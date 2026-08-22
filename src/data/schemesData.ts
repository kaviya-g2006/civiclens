import { Scheme, LegalRight } from '../types';

export const SCHEMES_DATABASE: Scheme[] = [
  // --- STUDENT SCHEMES ---
  {
    id: 'post-matric-scholarship',
    name: 'Post-Matric Scholarship Scheme',
    shortDescription: 'Financial assistance for post-matriculation or post-secondary education for eligible category students.',
    fullDescription: 'Centrally sponsored scheme implemented by state governments to provide financial assistance to students pursuing higher secondary, undergraduate, postgraduate, and professional courses, covering tuition fees and monthly maintenance allowances.',
    category: 'education',
    profileTypes: ['student'],
    centralOrState: 'central',
    department: 'Ministry of Social Justice and Empowerment / Ministry of Tribal Affairs',
    benefits: [
      '100% reimbursement of compulsory non-refundable course fees',
      'Monthly maintenance allowance up to ₹1,200/month for hostellers and ₹550/month for day scholars',
      'Additional book grant and study tour allowance for professional courses'
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 30,
      maxIncome: 250000,
      requiredProfile: 'student',
      otherCriteria: [
        'Enrolled in a recognized post-matriculation institution or university',
        'Annual parental/family income not exceeding ₹2,50,000',
        'Satisfactory attendance and passing grades in previous academic year'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Income Certificate', 'Community / Caste Certificate', 'Previous Year Marksheet', 'College Bonafide / ID', 'Bank Passbook'],
    officialSource: 'National Scholarship Portal (NSP), Government of India',
    officialPortalUrl: 'https://scholarships.gov.in',
    lastVerifiedDate: '2026-08-15',
    deadline: '2026-10-31',
    tags: ['Scholarship', 'Higher Education', 'Fee Waiver', 'DBT'],
    estimatedProcessingTime: '3-4 Weeks',
    isSupportedForm: true
  },
  {
    id: 'pm-usp-central-sector',
    name: 'PM-USP Central Sector Scheme of Scholarship',
    shortDescription: 'Merit-cum-means scholarship for top-percentile college and university students.',
    fullDescription: 'Department of Higher Education initiative providing direct financial support to meritorious students from low-income families to meet day-to-day expenses while pursuing graduate and postgraduate studies.',
    category: 'education',
    profileTypes: ['student'],
    centralOrState: 'central',
    department: 'Department of Higher Education, Ministry of Education',
    benefits: [
      '₹12,000 per annum at Graduation level for first 3 years',
      '₹20,000 per annum at Post-Graduation level for 2 years',
      'Direct Benefit Transfer (DBT) into student Aadhaar-seeded bank account'
    ],
    eligibilityRules: {
      minAge: 17,
      maxAge: 25,
      maxIncome: 450000,
      requiredProfile: 'student',
      otherCriteria: [
        'Above 80th percentile in Class 12 / Higher Secondary Board Examination',
        'Pursuing regular (non-correspondence) degree course',
        'Family income less than ₹4,50,000 per annum'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Class 12 Marksheet', 'Income Certificate', 'Current College Bonafide', 'Bank Passbook'],
    officialSource: 'Ministry of Education, GoI',
    officialPortalUrl: 'https://scholarships.gov.in',
    lastVerifiedDate: '2026-08-10',
    deadline: '2026-11-15',
    tags: ['Merit', 'College Degree', 'University', 'Central Sector'],
    estimatedProcessingTime: '4-6 Weeks',
    isSupportedForm: true
  },
  {
    id: 'aicte-pragati-scholarship',
    name: 'AICTE Pragati Scholarship for Girl Students',
    shortDescription: '₹50,000/year assistance for girl students admitted to technical degree or diploma courses.',
    fullDescription: 'Scheme aimed at advancing female participation in technical and engineering education across AICTE-approved institutions in India.',
    category: 'education',
    profileTypes: ['student'],
    centralOrState: 'central',
    department: 'All India Council for Technical Education (AICTE)',
    benefits: [
      '₹50,000 per year of study for college fee, computer, software, books & equipment',
      'Maximum 2 girl children per family eligible'
    ],
    eligibilityRules: {
      minAge: 17,
      maxAge: 26,
      maxIncome: 800000,
      requiredProfile: 'student',
      requiredGender: 'Female',
      otherCriteria: [
        'Admitted to 1st year of Degree/Diploma course or 2nd year via Lateral Entry',
        'AICTE approved institution',
        'Family income less than ₹8,00,000 per annum'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Admission Letter', 'AICTE Institute Bonafide', 'Income Certificate', 'Class 10 & 12 Marksheets', 'Bank Passbook'],
    officialSource: 'AICTE Portal, Government of India',
    officialPortalUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
    lastVerifiedDate: '2026-08-01',
    deadline: '2026-12-15',
    tags: ['Technical Education', 'Women Empowerment', 'Engineering', 'Diploma'],
    estimatedProcessingTime: '3 Weeks',
    isSupportedForm: true
  },
  {
    id: 'free-laptop-scheme',
    name: 'State Student Digital Access Support (Laptop Scheme)',
    shortDescription: 'Free computing device distribution for meritorious higher secondary and college students.',
    fullDescription: 'State initiative facilitating digital learning for students in government and government-aided colleges to bridge the digital divide.',
    category: 'education',
    profileTypes: ['student'],
    centralOrState: 'state',
    state: 'Tamil Nadu',
    department: 'Special Programme Implementation Department & Higher Education',
    benefits: [
      'Free laptop preloaded with educational software and open-source study tools',
      'Standard 1-year hardware warranty and technical support'
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 24,
      maxIncome: 300000,
      requiredProfile: 'student',
      otherCriteria: [
        'Enrolled in Government or Government-aided Arts/Science/Polytechnic/Engineering college',
        'Resident of state'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Student ID Card', 'College Bonafide Certificate', 'Ration Card / Address Proof'],
    officialSource: 'ELCOT & Department of Higher Education, Govt of Tamil Nadu',
    officialPortalUrl: 'https://tnega.tn.gov.in',
    lastVerifiedDate: '2026-07-20',
    tags: ['Digital Device', 'College', 'State Scheme'],
    estimatedProcessingTime: 'School/College Distribution',
    isSupportedForm: false
  },

  // --- FARMER SCHEMES ---
  {
    id: 'pm-kisan-samman-nidhi',
    name: 'PM Kisan Samman Nidhi',
    shortDescription: 'Direct income support of ₹6,000 per year in three equal installments of ₹2,000 for landholding farmer families.',
    fullDescription: 'Flagship central sector scheme providing supplementary financial support to all landholding farmer families to procure agricultural inputs and manage domestic needs without falling into informal debt.',
    category: 'agriculture',
    profileTypes: ['farmer'],
    centralOrState: 'central',
    department: 'Department of Agriculture & Farmers Welfare, Ministry of Agriculture',
    benefits: [
      '₹6,000 per year transferred directly to Aadhaar-seeded bank account',
      'Paid in 3 equal installments of ₹2,000 every four months',
      'Completely paperless e-KYC renewal and automatic DBT transfer'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 75,
      requiredProfile: 'farmer',
      otherCriteria: [
        'Farmer family owning cultivable land registered in State land records',
        'Excludes institutional landholders and income tax payers',
        'Completed e-KYC on PM-Kisan portal'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Land Ownership Record (Patta / Chitta / Khasra)', 'Aadhaar-Linked Bank Account', 'Mobile Number linked to Aadhaar'],
    officialSource: 'PM-KISAN Portal, Ministry of Agriculture & Farmers Welfare',
    officialPortalUrl: 'https://pmkisan.gov.in',
    lastVerifiedDate: '2026-08-18',
    tags: ['Direct Income Support', 'DBT', 'Kisan', 'Agriculture'],
    estimatedProcessingTime: '2-3 Weeks',
    isSupportedForm: true
  },
  {
    id: 'pm-fasal-bima-yojana',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    shortDescription: 'Comprehensive crop insurance coverage against yield loss from sowing to post-harvest natural calamities.',
    fullDescription: 'Standardized agricultural insurance scheme covering food crops, oilseeds, and commercial/horticultural crops with the lowest ever uniform farmer premium (2% for Kharif, 1.5% for Rabi, 5% for commercial crops).',
    category: 'agriculture',
    profileTypes: ['farmer'],
    centralOrState: 'central',
    department: 'Ministry of Agriculture & Farmers Welfare',
    benefits: [
      'Comprehensive insurance from pre-sowing to post-harvest losses',
      'Local calamity and mid-season adversity immediate claim settlement',
      'Direct digital claim settlement directly to farmer bank account'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 80,
      requiredProfile: 'farmer',
      otherCriteria: [
        'Cultivating notified crops in notified areas',
        'Includes both loanee and non-loanee farmers, sharecroppers, and tenant farmers'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Land Record / Tenancy Agreement', 'Sowing Certificate / V.A.O Certificate', 'Bank Passbook Copy'],
    officialSource: 'PMFBY National Crop Insurance Portal, GoI',
    officialPortalUrl: 'https://pmfby.gov.in',
    lastVerifiedDate: '2026-08-12',
    deadline: '2026-09-30',
    tags: ['Crop Insurance', 'Risk Protection', 'Weather Calamity', 'Agriculture'],
    estimatedProcessingTime: 'Instant on Enrollment',
    isSupportedForm: true
  },
  {
    id: 'kisan-credit-card',
    name: 'Kisan Credit Card (KCC) Scheme',
    shortDescription: 'Institutional credit up to ₹3,00,000 at a subsidized interest rate of 4% per annum for farm operations.',
    fullDescription: 'Provides timely and adequate credit to farmers from banking institutions for their cultivation expenses, post-harvest expenses, produce marketing loans, consumption requirements, and maintenance of farm assets.',
    category: 'financial',
    profileTypes: ['farmer'],
    centralOrState: 'central',
    department: 'NABARD & Department of Financial Services',
    benefits: [
      'Subsidized 7% basic interest rate with 3% prompt repayment incentive = 4% net interest rate',
      'Collateral-free agricultural loan up to ₹1.60 Lakh (extended to ₹2 Lakhs in select states)',
      'Flexible revolving credit card limit valid for 5 years with annual review'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 75,
      requiredProfile: 'farmer',
      otherCriteria: [
        'Individual / joint owner cultivators',
        'Tenant farmers, oral lessees, and sharecroppers',
        'SHGs or Joint Liability Groups of farmers'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Land Title Document / Patta', 'Cropping Pattern Document', 'Passport Size Photograph', 'PAN Card / Form 60'],
    officialSource: 'Reserve Bank of India & NABARD',
    officialPortalUrl: 'https://pmkisan.gov.in/KCC.aspx',
    lastVerifiedDate: '2026-08-05',
    tags: ['Credit', 'Subsidized Loan', 'NABARD', 'Farm Working Capital'],
    estimatedProcessingTime: '14 Working Days',
    isSupportedForm: true
  },
  {
    id: 'pm-krishi-sinchayee-yojana',
    name: 'PMKSY — Per Drop More Crop (Micro Irrigation)',
    shortDescription: '55% to 75% subsidy on Drip and Sprinkler irrigation installations for small & marginal farmers.',
    fullDescription: 'Promotes precision water management technologies to improve on-farm water use efficiency, reduce electricity and fertilizer costs, and increase crop yields.',
    category: 'agriculture',
    profileTypes: ['farmer'],
    centralOrState: 'central',
    department: 'Department of Agriculture & Farmers Welfare',
    benefits: [
      '55% financial assistance for Small & Marginal Farmers',
      '45% financial assistance for Other Farmers',
      'Additional state top-up subsidy (up to 100% in Tamil Nadu for small farmers)'
    ],
    eligibilityRules: {
      minAge: 18,
      requiredProfile: 'farmer',
      otherCriteria: [
        'Available water source (well, borewell, canal, farm pond)',
        'Landownership proof registered in farmer name'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Land Record (Chitta/Patta)', 'Water Source Inspection Certificate', 'Soil & Water Test Report', 'Bank Passbook'],
    officialSource: 'PMKSY Portal, Ministry of Agriculture',
    officialPortalUrl: 'https://pmksy.gov.in',
    lastVerifiedDate: '2026-07-28',
    tags: ['Drip Irrigation', 'Water Efficiency', 'Subsidy', 'Farm Equipment'],
    estimatedProcessingTime: '3-4 Weeks',
    isSupportedForm: false
  },

  // --- SENIOR CITIZEN SCHEMES ---
  {
    id: 'ayushman-bharat-senior-70',
    name: 'Ayushman Bharat — PM-JAY (Senior Citizen 70+ Universal Cover)',
    shortDescription: 'Universal cashless health insurance of ₹5,00,000 per year for all senior citizens aged 70 and above.',
    fullDescription: 'Comprehensive hospitalization and tertiary healthcare coverage of ₹5 Lakh per year provided on a family basis for all citizens aged 70 years and above, irrespective of socioeconomic or income status.',
    category: 'healthcare',
    profileTypes: ['senior'],
    centralOrState: 'central',
    department: 'National Health Authority (NHA), Ministry of Health and Family Welfare',
    benefits: [
      'Cashless in-patient secondary and tertiary hospital treatment up to ₹5,00,000/year',
      'Dedicated distinct Ayushman Vay Vandana Golden Card issued instantly with Aadhaar eKYC',
      'Covers pre-existing conditions from Day 1 across 29,000+ empaneled public & private hospitals nationwide'
    ],
    eligibilityRules: {
      minAge: 70,
      requiredProfile: 'senior',
      otherCriteria: [
        'Indian citizen aged 70 years or above as verified by Aadhaar date of birth',
        'Universal coverage (No income ceiling or ration card requirement)'
      ]
    },
    requiredDocuments: ['Aadhaar Card with updated Date of Birth', 'Aadhaar-linked Mobile Number for OTP Verification'],
    officialSource: 'National Health Authority (NHA) — PMJAY Portal',
    officialPortalUrl: 'https://beneficiary.nha.gov.in',
    lastVerifiedDate: '2026-08-19',
    tags: ['Health Insurance', 'Senior 70+', 'Cashless Hospitalization', 'PMJAY', 'Universal'],
    estimatedProcessingTime: 'Instant / Same Day',
    isSupportedForm: true
  },
  {
    id: 'ignoaps-old-age-pension',
    name: 'Indira Gandhi National Old Age Pension Scheme (IGNOAPS)',
    shortDescription: 'Monthly social security cash pension for senior citizens from economically weaker households.',
    fullDescription: 'Component of the National Social Assistance Programme (NSAP) providing non-contributory monthly cash assistance to elderly citizens below the poverty line.',
    category: 'pension',
    profileTypes: ['senior'],
    centralOrState: 'central',
    department: 'Ministry of Rural Development / State Social Welfare Departments',
    benefits: [
      '₹1,000 to ₹2,000 monthly pension (Central base + State government top-up)',
      'Enhanced rate of ₹2,500/month for senior citizens aged 80 years and above',
      'Direct monthly bank or post office DBT deposit'
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 120000,
      requiredProfile: 'senior',
      otherCriteria: [
        'Aged 60 years or above',
        'Belonging to a household living Below Poverty Line (BPL / AAY card holder)'
      ]
    },
    requiredDocuments: ['Aadhaar Card / Voter ID', 'BPL Ration Card / Income Certificate', 'Age Proof / Birth Record', 'Bank / Post Office Passbook'],
    officialSource: 'National Social Assistance Programme (NSAP), Ministry of Rural Development',
    officialPortalUrl: 'https://nsap.nic.in',
    lastVerifiedDate: '2026-08-14',
    tags: ['Old Age Pension', 'NSAP', 'Social Security', 'Monthly DBT'],
    estimatedProcessingTime: '3-5 Weeks',
    isSupportedForm: true
  },
  {
    id: 'rashtriya-vayoshri-yojana',
    name: 'Rashtriya Vayoshri Yojana (RVY)',
    shortDescription: 'Free distribution of assisted living devices and physical aids for senior citizens with age-related disabilities.',
    fullDescription: 'Central sector scheme providing physical aids and assistive living devices to senior citizens belonging to BPL category or earning less than ₹15,000/month to restore near normalcy in their bodily functions.',
    category: 'healthcare',
    profileTypes: ['senior'],
    centralOrState: 'central',
    department: 'Department of Empowerment of Persons with Disabilities / ALIMCO',
    benefits: [
      'Free high-grade Walking Sticks, Elbow Crutches, Walkers, and Quadripods',
      'Free Digital Hearing Aids, Spectacles, and Artificial Dentures',
      'Wheelchairs and specialized commode chairs with free doorstep fitment'
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 180000,
      requiredProfile: 'senior',
      otherCriteria: [
        'Senior Citizen aged 60+ suffering from age-related disability/infirmity',
        'Monthly family income not exceeding ₹15,000 (or BPL card holder)'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'Medical / Disability Assessment Certificate from Govt Medical Officer', 'Income Certificate / BPL Card', 'Passport Photograph'],
    officialSource: 'ALIMCO / Ministry of Social Justice & Empowerment',
    officialPortalUrl: 'https://www.alimco.in/Default.aspx',
    lastVerifiedDate: '2026-07-25',
    tags: ['Assistive Devices', 'Hearing Aid', 'Wheelchair', 'Elderly Health'],
    estimatedProcessingTime: 'Camp Based / 2 Weeks',
    isSupportedForm: false
  },
  {
    id: 'pm-vaya-vandana-yojana',
    name: 'Pradhan Mantri Vaya Vandana Yojana (PMVVY)',
    shortDescription: 'Guaranteed pension scheme for senior citizens offering assured 7.4% per annum return.',
    fullDescription: 'Government-subsidized pension scheme operated through Life Insurance Corporation of India (LIC) providing social security and protection against fall in interest income to elderly persons.',
    category: 'pension',
    profileTypes: ['senior'],
    centralOrState: 'central',
    department: 'Department of Financial Services / LIC of India',
    benefits: [
      'Assured return of 7.40% p.a. payable monthly for 10 years',
      'Pension payout from ₹1,000 to ₹9,250 per month depending on purchase price',
      'Loan facility up to 75% of purchase price available after 3 policy years'
    ],
    eligibilityRules: {
      minAge: 60,
      requiredProfile: 'senior',
      otherCriteria: [
        'Must be at least 60 years of age (completed) as on date of purchase',
        'Maximum investment limit of ₹15,00,000 per senior citizen'
      ]
    },
    requiredDocuments: ['Aadhaar Card', 'PAN Card', 'Address Proof', 'Bank Account Details & Cancelled Cheque'],
    officialSource: 'Life Insurance Corporation of India (LIC) / Ministry of Finance',
    officialPortalUrl: 'https://licindia.in',
    lastVerifiedDate: '2026-08-02',
    tags: ['Guaranteed Pension', 'LIC', 'Senior Investment', 'Assured Return'],
    estimatedProcessingTime: '1-2 Days',
    isSupportedForm: true
  }
];

export const LEGAL_RIGHTS_DATABASE: LegalRight[] = [
  // --- STUDENT RIGHTS ---
  {
    id: 'right-to-education',
    title: 'Right to Education & Fee Transparency',
    description: 'Statutory rights prohibiting capitation fees, guaranteeing fee regulation, and ensuring non-discrimination in admissions.',
    actOrBasis: 'Right of Children to Free and Compulsory Education Act & UGC Guidelines',
    appliesTo: ['student'],
    keyEntitlements: [
      'Strict prohibition of capitation fees or unapproved donation charges',
      'Mandatory refund of tuition fee upon admission withdrawal within specified UGC timeframe',
      'Protection against withholding of original educational marksheets/certificates by institutions'
    ],
    howToExercise: 'Lodge grievances directly via National Consumer Helpline (1915) or UGC e-Samadhan portal.',
    grievancePortal: 'https://samadhan.ugc.ac.in'
  },
  {
    id: 'student-travel-concession',
    title: 'Statutory Student Concession in Public Transit',
    description: 'Entitlement to subsidized travel passes across state bus corporations and Indian Railways.',
    actOrBasis: 'Ministry of Railways Tariff Rules & State Transport Acts',
    appliesTo: ['student'],
    keyEntitlements: [
      'Up to 75% fare concession in Second Class for daily travel to recognized educational institutions',
      'Free or highly subsidized State RTC bus passes for government and aided school/college students',
      'Educational tour group travel concessions on Indian Railways'
    ],
    howToExercise: 'Apply via the institution principal or state road transport corporation pass portal.',
    grievancePortal: 'https://pgportal.gov.in'
  },

  // --- FARMER RIGHTS ---
  {
    id: 'farmer-mandi-msp-rights',
    title: 'Fair Weighment & Prompt Payment Entitlement at APMC Mandis',
    description: 'Statutory right to receive computerized weighment receipts and prompt payment within 24–72 hours of agricultural produce sale.',
    actOrBasis: 'State Agricultural Produce Market Committee (APMC) Acts & e-NAM Rules',
    appliesTo: ['farmer'],
    keyEntitlements: [
      'Zero deduction of unauthorized market commission or brokerage fees from farmers',
      'Compulsory computerized weightment slips at APMC checkposts',
      'Direct online settlement into farmer bank accounts via e-NAM national portal'
    ],
    howToExercise: 'Report unauthorized commission or delayed payment to the APMC Mandi Secretary or Kisan Call Centre (1800-180-1551).',
    grievancePortal: 'https://enam.gov.in'
  },
  {
    id: 'farmer-land-title-protection',
    title: 'Right to Certified Land Title & Protection from Arbitrary Eviction',
    description: 'Right to receive updated Patta/Chitta/Khasra documents and protection of agricultural tenancy rights.',
    actOrBasis: 'State Land Revenue Codes & Digital India Land Records Modernization Programme (DILRMP)',
    appliesTo: ['farmer'],
    keyEntitlements: [
      'Right to download digitally signed record of rights (RoR) within 15 days of survey mutation',
      'Protection against attachment of minimum agricultural land or farm implements in recovery suits',
      'Notice and fair compensation under RFCTLARR Act 2013 in case of public land acquisition'
    ],
    howToExercise: 'Access digital land records via state e-District / AnyRoR / e-Bhoomi / Tamil Nilam portals.',
    grievancePortal: 'https://dolr.gov.in'
  },

  // --- SENIOR CITIZEN RIGHTS ---
  {
    id: 'senior-maintenance-act',
    title: 'Statutory Maintenance & Property Protection Rights',
    description: 'Legal right to claim maintenance from adult children/heirs and revoke conditional property transfers in case of neglect.',
    actOrBasis: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
    appliesTo: ['senior'],
    keyEntitlements: [
      'Right to monthly maintenance allowance up to ₹10,000/month ordered by the Maintenance Tribunal (Sub-Divisional Magistrate)',
      'Summary tribunal proceedings completed within 90 days without requiring expensive advocates',
      'Section 23 power: Automatic voiding of property deed gifted to children if they fail to provide basic physical needs'
    ],
    howToExercise: 'Submit an application to the Sub-Divisional Magistrate (SDM) / Revenue Divisional Officer (RDO) or dial National Elderline at 14567.',
    grievancePortal: 'https://elderline.dosje.gov.in'
  },
  {
    id: 'senior-healthcare-priority',
    title: 'Priority Healthcare & Dedicated Geriatric Desks',
    description: 'Mandatory priority consultation queues and subsidized medicines in all government hospitals.',
    actOrBasis: 'National Programme for Health Care of the Elderly (NPHCE)',
    appliesTo: ['senior'],
    keyEntitlements: [
      'Separate dedicated registration and medicine dispensing queues in primary and district hospitals',
      'Free essential geriatric clinical checkups and diagnostic screenings',
      'Priority emergency transport and subsidized ambulance dispatch'
    ],
    howToExercise: 'Present Senior Citizen ID or Aadhaar at hospital Help Desk or contact 104 Health Helpline.',
    grievancePortal: 'https://mohfw.gov.in'
  }
];
