import { Scheme, CitizenProfile, EligibilityAssessment } from '../types';

export function evaluateEligibility(scheme: Scheme, profile: CitizenProfile): EligibilityAssessment {
  const matchedCriteria: string[] = [];
  const unmetCriteria: string[] = [];
  const missingInformation: string[] = [];

  let totalRules = 0;
  let passedRules = 0;

  // 1. Profile Type check
  totalRules++;
  if (scheme.profileTypes.includes(profile.profileType)) {
    matchedCriteria.push(`Profile Match: Your profile (${profile.profileType.toUpperCase()}) matches the target beneficiary category.`);
    passedRules++;
  } else {
    unmetCriteria.push(`Profile Mismatch: Scheme is intended for ${scheme.profileTypes.join(', ').toUpperCase()}, but your active profile is ${profile.profileType.toUpperCase()}.`);
  }

  // 2. Age criteria
  if (scheme.eligibilityRules.minAge !== undefined || scheme.eligibilityRules.maxAge !== undefined) {
    totalRules++;
    const min = scheme.eligibilityRules.minAge ?? 0;
    const max = scheme.eligibilityRules.maxAge ?? 120;

    if (profile.age >= min && profile.age <= max) {
      matchedCriteria.push(`Age Requirement: Your age (${profile.age} years) is within the eligible range (${min} - ${max} years).`);
      passedRules++;
    } else if (profile.age < min) {
      unmetCriteria.push(`Age Requirement: Minimum age required is ${min} years (Your age: ${profile.age} years).`);
    } else {
      unmetCriteria.push(`Age Requirement: Maximum age limit is ${max} years (Your age: ${profile.age} years).`);
    }
  }

  // 3. Gender criteria
  if (scheme.eligibilityRules.requiredGender) {
    totalRules++;
    if (profile.gender === scheme.eligibilityRules.requiredGender) {
      matchedCriteria.push(`Gender Criteria: Matches specified gender requirement (${scheme.eligibilityRules.requiredGender}).`);
      passedRules++;
    } else {
      unmetCriteria.push(`Gender Criteria: Scheme is designated specifically for ${scheme.eligibilityRules.requiredGender} beneficiaries.`);
    }
  }

  // 4. Income ceiling criteria
  if (scheme.eligibilityRules.maxIncome !== undefined) {
    totalRules++;
    if (profile.annualIncome > 0 && profile.annualIncome <= scheme.eligibilityRules.maxIncome) {
      matchedCriteria.push(`Income Ceiling: Family annual income (₹${profile.annualIncome.toLocaleString('en-IN')}) is below the prescribed limit of ₹${scheme.eligibilityRules.maxIncome.toLocaleString('en-IN')}.`);
      passedRules++;
    } else if (profile.annualIncome > scheme.eligibilityRules.maxIncome) {
      unmetCriteria.push(`Income Ceiling: Annual income (₹${profile.annualIncome.toLocaleString('en-IN')}) exceeds maximum scheme threshold of ₹${scheme.eligibilityRules.maxIncome.toLocaleString('en-IN')}.`);
    } else {
      missingInformation.push('Income Certificate verification is required to confirm annual family income.');
    }
  }

  // 5. Specific profile checks
  if (profile.profileType === 'student') {
    if (profile.studentDetails?.institution) {
      matchedCriteria.push(`Enrollment: Active student at ${profile.studentDetails.institution} (${profile.studentDetails.course}).`);
      passedRules += 0.5;
    }
    if (scheme.id === 'pm-usp-central-sector') {
      if ((profile.studentDetails?.previousYearMarks ?? 0) >= 80) {
        matchedCriteria.push(`Merit Criterion: High percentile academic score (${profile.studentDetails?.previousYearMarks}% in qualifying examination).`);
      } else {
        unmetCriteria.push(`Merit Criterion: Requires 80th percentile or above in qualifying examination (Current score: ${profile.studentDetails?.previousYearMarks}%).`);
      }
    }
  } else if (profile.profileType === 'farmer') {
    if ((profile.farmerDetails?.landSizeAcres ?? 0) > 0) {
      matchedCriteria.push(`Cultivable Land: Verified ownership of ${profile.farmerDetails?.landSizeAcres} Acres in ${profile.district}.`);
      passedRules += 0.5;
    }
    if (scheme.id === 'pm-krishi-sinchayee-yojana' && profile.farmerDetails?.irrigationStatus) {
      matchedCriteria.push(`Irrigation Setup: Existing source status (${profile.farmerDetails.irrigationStatus.replace('_', ' ')}) eligible for micro-irrigation component.`);
    }
  } else if (profile.profileType === 'senior') {
    if (scheme.id === 'ayushman-bharat-senior-70') {
      if (profile.age >= 70) {
        matchedCriteria.push(`Universal Senior 70+ Criterion: Meets universal healthcare cover age threshold (Age ${profile.age} ≥ 70).`);
        passedRules++;
      } else {
        unmetCriteria.push(`Universal Senior 70+ Criterion: Open to citizens aged 70 and above (Your age is ${profile.age}). You can access general PM-JAY if BPL eligible.`);
      }
    }
    if (scheme.id === 'ignoaps-old-age-pension') {
      if (profile.seniorDetails?.bplCardHolder) {
        matchedCriteria.push('BPL Verification: Valid BPL / Antyodaya ration card recorded.');
      } else {
        missingInformation.push('BPL or EWS status proof required for non-contributory monthly pension.');
      }
    }
  }

  // 6. Required Documents Check
  const uploadedTypes = new Set(profile.documents.map(d => d.type));
  const hasAadhaar = uploadedTypes.has('aadhaar');
  if (!hasAadhaar) {
    missingInformation.push('Aadhaar Card is mandatory for Direct Benefit Transfer (DBT) verification.');
  }

  // Score calculation
  const score = Math.min(100, Math.round((passedRules / Math.max(1, totalRules)) * 100));

  let status: 'eligible' | 'not_eligible' | 'potentially_eligible' = 'potentially_eligible';
  if (unmetCriteria.length === 0 && score >= 85) {
    status = 'eligible';
  } else if (unmetCriteria.length > 0 && score < 50) {
    status = 'not_eligible';
  } else {
    status = 'potentially_eligible';
  }

  // Clear explanation synthesis
  let explanation = '';
  if (status === 'eligible') {
    explanation = `You fulfill the core eligibility criteria for ${scheme.name}. Your verified age (${profile.age} yrs), location (${profile.state}), demographic profile (${profile.profileType}), and income parameters align with official guidelines released by ${scheme.department}.`;
  } else if (status === 'not_eligible') {
    explanation = `Based on current statutory guidelines for ${scheme.name}, you do not currently qualify due to: ${unmetCriteria.join(' ')}`;
  } else {
    explanation = `You are potentially eligible for ${scheme.name}, but final approval requires submitting ${missingInformation.length > 0 ? missingInformation.join(' and ') : 'supporting certificates during official verification'}.`;
  }

  const actionNext = [
    'Review the matched policy parameters against the official notifications.',
    'Verify that your supporting documents match your primary Aadhaar record.',
    'Ensure your bank account is seeded with Aadhaar for direct DBT transfer.'
  ];

  return {
    schemeId: scheme.id,
    schemeName: scheme.name,
    status,
    score,
    matchedCriteria,
    unmetCriteria,
    missingInformation,
    explanation,
    actionNext,
    evaluatedAt: new Date().toISOString()
  };
}
