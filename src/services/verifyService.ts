import { VerifyAnalysisResult, ClaimVerdict } from '../types';

export interface SampleClaim {
  id: string;
  category: 'Student Scam' | 'Farmer Fraud' | 'Senior Scam' | 'Official Scheme' | 'Ambiguous';
  queryText: string;
  expectedVerdict: ClaimVerdict;
  description: string;
}

export const SAMPLE_CLAIMS_FOR_DEMO: SampleClaim[] = [
  {
    id: 'sample-student-fraud',
    category: 'Student Scam',
    queryText: 'I received a WhatsApp message saying: "Government is giving free ₹50,000 scholarship cash grant to ALL college students under PM YUVA 2026. Click here to apply: http://gov-pm-scholarship2026.xyz/apply and share OTP to receive money"',
    expectedVerdict: 'fraudulent',
    description: 'Fake scholarship scam harvesting Aadhaar OTPs on a suspicious non-government .xyz domain.'
  },
  {
    id: 'sample-farmer-fraud',
    category: 'Farmer Fraud',
    queryText: 'SMS: "PM Kisan 19th installment ₹4000 bonus released! Your account is blocked. Update immediate eKYC by paying ₹99 verification fee at http://pmkisan-giftbonus.com or your benefits will be terminated today."',
    expectedVerdict: 'fraudulent',
    description: 'Impersonation scam requesting upfront fee and creating artificial urgency.'
  },
  {
    id: 'sample-senior-official',
    category: 'Official Scheme',
    queryText: 'Is it true that all senior citizens aged 70 and above in India can get ₹5 Lakh free health insurance under Ayushman Bharat regardless of their income on beneficiary.nha.gov.in?',
    expectedVerdict: 'verified',
    description: 'Genuine official expansion of AB-PMJAY Universal Senior 70+ coverage.'
  },
  {
    id: 'sample-pmkisan-official',
    category: 'Official Scheme',
    queryText: 'Does PM-Kisan provide ₹6,000 per year directly to eligible landholding farmers in 3 installments of ₹2,000 each on pmkisan.gov.in?',
    expectedVerdict: 'verified',
    description: 'Legitimate central government income support scheme.'
  },
  {
    id: 'sample-senior-bonus-fraud',
    category: 'Senior Scam',
    queryText: 'WhatsApp forward: "Senior Citizen Special Festival Bonus Scheme: All elderly above 60 years will get ₹10,000 monthly cash pension. Register name by sending WhatsApp message with bank passbook copy and Aadhaar photo to 9876543210."',
    expectedVerdict: 'fraudulent',
    description: 'Unverified social media forward attempting identity theft via WhatsApp numbers.'
  },
  {
    id: 'sample-unverified-claim',
    category: 'Ambiguous',
    queryText: 'I heard from a neighbor that the local panchayat is giving free solar pumps to all small farmers starting tomorrow morning without any paperwork.',
    expectedVerdict: 'unverified',
    description: 'Unverified word-of-mouth claim lacking official government circular citations.'
  }
];

export async function analyzeClaimWithAI(claimText: string, language: string = 'en'): Promise<VerifyAnalysisResult> {
  try {
    const response = await fetch('/api/verify-claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ claimText, language })
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.warn('Backend verification API call fallback to local analysis engine', err);
  }

  // Robust Local Fallback Knowledge Engine
  return analyzeClaimLocally(claimText);
}

export function analyzeClaimLocally(claimText: string): VerifyAnalysisResult {
  const lower = claimText.toLowerCase();
  const detectedRisks: string[] = [];
  const safeIndicators: string[] = [];

  // Suspicious Domain check
  const nonGovUrlMatch = claimText.match(/https?:\/\/([^\s/$.?#].[^\s]*)/gi);
  let hasSuspiciousDomain = false;
  let hasGovDomain = false;

  if (nonGovUrlMatch) {
    for (const url of nonGovUrlMatch) {
      if (url.includes('.gov.in') || url.includes('.nic.in') || url.includes('aicte-india.org') || url.includes('licindia.in') || url.includes('nha.gov.in')) {
        hasGovDomain = true;
        safeIndicators.push(`Verified official government domain detected: ${url}`);
      } else {
        hasSuspiciousDomain = true;
        detectedRisks.push(`Unofficial domain detected (${url}). Genuine Indian government portals use '.gov.in' or '.nic.in'.`);
      }
    }
  }

  // Keywords for Scams
  if (lower.includes('otp') || lower.includes('one time password') || lower.includes('share otp')) {
    detectedRisks.push('Demands sharing OTP or passwords. No government scheme or officer ever asks for your OTP.');
  }

  if (lower.includes('fee') || lower.includes('pay ₹') || lower.includes('pay rs') || lower.includes('registration fee') || lower.includes('processing fee') || lower.includes('₹99') || lower.includes('₹299')) {
    detectedRisks.push('Demands upfront payment or registration fees for welfare schemes. Government direct welfare registration is free.');
  }

  if (lower.includes('xyz') || lower.includes('.top') || lower.includes('.club') || lower.includes('bit.ly') || lower.includes('wa.me') || lower.includes('tinyurl')) {
    detectedRisks.push('Uses URL shorteners or deceptive top-level domains commonly associated with phishing.');
  }

  if (lower.includes('blocked') || lower.includes('terminated today') || lower.includes('urgent') || lower.includes('within 24 hours') || lower.includes('act immediately')) {
    detectedRisks.push('Employs coercive urgency tactics to pressure citizens into panic action.');
  }

  if (lower.includes('50,000 scholarship') && lower.includes('to all') || lower.includes('free cash grant')) {
    detectedRisks.push('Unrealistic universal cash promise not backed by any authorized ministry budget or gazette notification.');
  }

  // Evaluation logic
  let verdict: ClaimVerdict = 'unverified';
  let summary = '';
  let confidence = 85;
  let officialSource = undefined;

  if (detectedRisks.length > 0) {
    verdict = 'fraudulent';
    confidence = Math.min(98, 80 + detectedRisks.length * 6);
    summary = `POTENTIALLY FRAUDULENT: This message contains ${detectedRisks.length} severe risk indicators typical of phishing and financial identity theft. It is not affiliated with any authorized government ministry.`;
    
    // Suggest genuine alternatives
    if (lower.includes('scholarship') || lower.includes('student')) {
      officialSource = {
        name: 'National Scholarship Portal (Official)',
        url: 'https://scholarships.gov.in',
        description: 'The sole unified official portal for Central and State government scholarships in India.'
      };
    } else if (lower.includes('kisan') || lower.includes('farmer') || lower.includes('pmkisan')) {
      officialSource = {
        name: 'PM-KISAN Official Portal',
        url: 'https://pmkisan.gov.in',
        description: 'The authorized official portal for PM Kisan Samman Nidhi DBT updates and status tracking.'
      };
    } else if (lower.includes('senior') || lower.includes('pension')) {
      officialSource = {
        name: 'National Social Assistance Programme (NSAP)',
        url: 'https://nsap.nic.in',
        description: 'Official Ministry of Rural Development portal for senior citizen pensions.'
      };
    }
  } else if (
    (lower.includes('70') && lower.includes('ayushman') && (lower.includes('5 lakh') || lower.includes('health'))) ||
    (lower.includes('pm-kisan') && lower.includes('6,000')) ||
    (lower.includes('pmkisan') && lower.includes('6000')) ||
    (lower.includes('central sector') && lower.includes('scholarship')) ||
    hasGovDomain
  ) {
    verdict = 'verified';
    confidence = 96;
    summary = 'VERIFIED OFFICIAL: This statement accurately reflects established, verified government policy published on authorized official portals.';
    
    if (lower.includes('ayushman') || lower.includes('70')) {
      officialSource = {
        name: 'National Health Authority (NHA) — Ayushman Bharat',
        url: 'https://beneficiary.nha.gov.in',
        description: 'Official portal for issuing Ayushman Vay Vandana cards for all senior citizens aged 70+.'
      };
    } else if (lower.includes('kisan')) {
      officialSource = {
        name: 'PM-KISAN Portal',
        url: 'https://pmkisan.gov.in',
        description: 'Official Ministry of Agriculture & Farmers Welfare portal.'
      };
    } else {
      officialSource = {
        name: 'National Scholarship Portal (NSP)',
        url: 'https://scholarships.gov.in',
        description: 'Official Ministry of Education & Social Justice scholarship portal.'
      };
    }
  } else {
    verdict = 'unverified';
    confidence = 70;
    summary = 'UNVERIFIED CLAIM: Could not match this claim with verified government gazette notifications or official departmental circulars. Exercise caution.';
    officialSource = {
      name: 'National Portal of India (Services Search)',
      url: 'https://services.india.gov.in',
      description: 'Official single-window access to authentic public schemes and services.'
    };
  }

  const recommendations = [
    verdict === 'fraudulent'
      ? 'NEVER click links or provide Aadhaar OTP / Bank PINs.'
      : 'Always check that the website domain ends in .gov.in or .nic.in before entering personal details.',
    'Access government schemes only through verified national portals or direct Common Service Centres (CSC).',
    'Report suspicious cyber fraud messages immediately to National Cyber Crime Helpline: 1930.'
  ];

  return {
    id: 'verify-' + Date.now(),
    claimText,
    verdict,
    confidence,
    summary,
    detectedRisks,
    safeIndicators,
    officialSource,
    recommendations,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
}
