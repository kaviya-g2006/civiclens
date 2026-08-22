import { CitizenProfile, ConsistencyCheckItem, ApplicationRecord, ReminderItem } from '../types';

export const DEMO_PROFILES: Record<string, CitizenProfile> = {
  student: {
    id: 'demo-student',
    name: 'Kaviya G',
    profileType: 'student',
    dob: '2003-05-12',
    age: 20,
    gender: 'Female',
    address: '12, Lake View Road, Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641001',
    fatherOrSpouseName: 'Govindaraj G',
    phone: '98XXXXXX21',
    email: 'kaviya.g@example.edu',
    maskedAadhaar: 'XXXX XXXX 1234',
    maskedPan: 'XXXXX8492K',
    maskedVoterId: 'TN/31/12345',
    annualIncome: 180000,
    socialCategory: 'OBC',
    isDifferentlyAbled: false,
    studentDetails: {
      institution: 'PSG College of Technology, Coimbatore',
      course: 'B.Sc Computer Science',
      currentYear: '2nd Year',
      previousYearMarks: 84.5,
      isHosteller: false,
      studentIdNumber: '22BCS104'
    },
    documents: [
      {
        id: 'doc-aadhaar-student',
        type: 'aadhaar',
        name: 'Aadhaar Card',
        documentNumber: 'XXXX XXXX 1234',
        status: 'verified',
        uploadDate: '2026-08-01',
        confidenceScore: 99,
        extractedData: {
          name: 'Kaviya G',
          dob: '12/05/2003',
          gender: 'Female',
          address: '12, Lake View Road, Coimbatore - 641001',
          fatherName: 'Govindaraj G',
          maskedNumber: 'XXXX XXXX 1234'
        }
      },
      {
        id: 'doc-pan-student',
        type: 'pan',
        name: 'PAN Card',
        documentNumber: 'XXXXX8492K',
        status: 'verified',
        uploadDate: '2026-08-01',
        confidenceScore: 98,
        extractedData: {
          name: 'Kaviya G',
          dob: '12/05/2003',
          fatherName: 'Govindaraj G',
          panNumber: 'XXXXX8492K'
        }
      },
      {
        id: 'doc-voter-student',
        type: 'voter_id',
        name: 'Voter ID Card',
        documentNumber: 'TN/31/12345',
        status: 'review_required',
        uploadDate: '2026-08-02',
        confidenceScore: 94,
        extractedData: {
          name: 'Kavya G', // Subtle spelling discrepancy for consistency check demo!
          dob: '12/05/2003',
          gender: 'Female',
          address: '12, Lake View Road, Coimbatore - 641001',
          relativeName: 'Govindaraju G',
          epicNumber: 'TN/31/12345'
        }
      },
      {
        id: 'doc-income-student',
        type: 'income_cert',
        name: 'Income Certificate',
        documentNumber: 'TN-INC-2026-9901',
        status: 'verified',
        uploadDate: '2026-08-05',
        confidenceScore: 97,
        extractedData: {
          name: 'Kaviya G',
          fatherName: 'Govindaraj G',
          annualIncome: '₹1,80,000',
          issuedBy: 'Tahsildar Coimbatore North',
          validUntil: '2027-03-31'
        }
      },
      {
        id: 'doc-student-id',
        type: 'student_id',
        name: 'College Bonafide & ID',
        documentNumber: '22BCS104',
        status: 'verified',
        uploadDate: '2026-08-06',
        confidenceScore: 96,
        extractedData: {
          studentName: 'Kaviya G',
          college: 'PSG College of Technology',
          degree: 'B.Sc Computer Science',
          rollNo: '22BCS104',
          academicYear: '2026-2027'
        }
      },
      {
        id: 'doc-birth-student',
        type: 'birth_cert',
        name: 'Birth Certificate',
        status: 'verified',
        uploadDate: '2026-08-01',
        confidenceScore: 95,
        extractedData: {
          childName: 'Kaviya G',
          dob: '12/05/2003',
          motherName: 'Meenakshi G',
          fatherName: 'Govindaraj G'
        }
      }
    ],
    confirmedAt: '2026-08-08'
  },

  farmer: {
    id: 'demo-farmer',
    name: 'Ramasamy M',
    profileType: 'farmer',
    dob: '1978-06-15',
    age: 48,
    gender: 'Male',
    address: '45, North Street, Sulur, Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641402',
    fatherOrSpouseName: 'Muthusamy K',
    phone: '94XXXXXX88',
    email: 'ramasamy.farmer@example.com',
    maskedAadhaar: 'XXXX XXXX 5678',
    maskedPan: 'XXXXX4910M',
    maskedVoterId: 'TN/32/77881',
    annualIncome: 120000,
    socialCategory: 'OBC',
    isDifferentlyAbled: false,
    farmerDetails: {
      landSizeAcres: 2.5,
      landOwnership: 'owner',
      cropType: ['Paddy', 'Cotton', 'Millets'],
      irrigationStatus: 'partially_irrigated',
      khasraPattaNo: 'TN-CBE-2024-8841',
      kccHolder: true
    },
    documents: [
      {
        id: 'doc-aadhaar-farmer',
        type: 'aadhaar',
        name: 'Aadhaar Card',
        documentNumber: 'XXXX XXXX 5678',
        status: 'verified',
        uploadDate: '2026-07-15',
        confidenceScore: 99,
        extractedData: {
          name: 'Ramasamy M',
          dob: '15/06/1978',
          gender: 'Male',
          address: '45, North Street, Sulur, Coimbatore - 641402',
          fatherName: 'Muthusamy K'
        }
      },
      {
        id: 'doc-land-farmer',
        type: 'land_record',
        name: 'Patta / Chitta Land Record',
        documentNumber: 'TN-CBE-2024-8841',
        status: 'verified',
        uploadDate: '2026-07-16',
        confidenceScore: 97,
        extractedData: {
          ownerName: 'Ramasamy M',
          pattaNumber: '8841',
          surveyNumber: '142/2A',
          landExtentAcres: '2.50 Acres',
          village: 'Sulur',
          classification: 'Nanja / Punja Cultivable'
        }
      },
      {
        id: 'doc-ration-farmer',
        type: 'ration_card',
        name: 'Smart Family Card (Ration Card)',
        documentNumber: '33/G/0182741',
        status: 'verified',
        uploadDate: '2026-07-18',
        confidenceScore: 96,
        extractedData: {
          headOfFamily: 'Ramasamy M',
          membersCount: '4',
          cardType: 'PHH (Priority Household)',
          address: '45, North Street, Sulur'
        }
      },
      {
        id: 'doc-pan-farmer',
        type: 'pan',
        name: 'PAN Card',
        documentNumber: 'XXXXX4910M',
        status: 'verified',
        uploadDate: '2026-07-15',
        confidenceScore: 98,
        extractedData: {
          name: 'Ramasamy M',
          dob: '15/06/1978',
          fatherName: 'Muthusamy K'
        }
      }
    ],
    confirmedAt: '2026-07-20'
  },

  senior: {
    id: 'demo-senior',
    name: 'Sundaramoorthy K',
    profileType: 'senior',
    dob: '1954-04-08',
    age: 72,
    gender: 'Male',
    address: '7, Temple View Avenue, Mylapore, Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600004',
    fatherOrSpouseName: 'Krishnan R',
    phone: '91XXXXXX45',
    email: 'sundaramoorthy.k@example.com',
    maskedAadhaar: 'XXXX XXXX 9012',
    maskedPan: 'XXXXX1123P',
    maskedVoterId: 'TN/02/44129',
    annualIncome: 95000,
    socialCategory: 'General',
    isDifferentlyAbled: false,
    seniorDetails: {
      isRetired: true,
      previousOccupation: 'Small Shopkeeper / Retired',
      pensionStatus: 'receiving_pension',
      bplCardHolder: true,
      seniorCardNumber: 'TN-SR-99214',
      livingStatus: 'with_family'
    },
    documents: [
      {
        id: 'doc-aadhaar-senior',
        type: 'aadhaar',
        name: 'Aadhaar Card',
        documentNumber: 'XXXX XXXX 9012',
        status: 'verified',
        uploadDate: '2026-08-01',
        confidenceScore: 99,
        extractedData: {
          name: 'Sundaramoorthy K',
          dob: '08/04/1954',
          age: '72 Years',
          gender: 'Male',
          address: '7, Temple View Avenue, Mylapore, Chennai - 600004',
          fatherName: 'Krishnan R'
        }
      },
      {
        id: 'doc-ration-senior',
        type: 'ration_card',
        name: 'Antyodaya Anna Yojana (AAY / BPL Card)',
        documentNumber: '33/AAY/99120',
        status: 'verified',
        uploadDate: '2026-08-02',
        confidenceScore: 98,
        extractedData: {
          headOfFamily: 'Sundaramoorthy K',
          cardCategory: 'AAY / BPL (Below Poverty Line)',
          address: '7, Temple View Avenue, Mylapore'
        }
      },
      {
        id: 'doc-senior-card',
        type: 'address_proof',
        name: 'Senior Citizen Identity Card',
        documentNumber: 'TN-SR-99214',
        status: 'verified',
        uploadDate: '2026-08-03',
        confidenceScore: 97,
        extractedData: {
          name: 'Sundaramoorthy K',
          ageProof: 'Verified 72 Yrs',
          issuedBy: 'District Social Welfare Office, Chennai'
        }
      }
    ],
    confirmedAt: '2026-08-05'
  }
};

export const getConsistencyCheckItems = (profile: CitizenProfile): ConsistencyCheckItem[] => {
  if (profile.profileType === 'student') {
    return [
      {
        id: 'chk-name',
        field: 'name',
        label: 'Full Name',
        status: 'review',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: 'Kaviya G' },
          { docType: 'pan', docName: 'PAN Card', value: 'Kaviya G' },
          { docType: 'voter_id', docName: 'Voter ID', value: 'Kavya G' }
        ],
        notes: 'Potential inconsistency detected. Voter ID has "Kavya G" while Aadhaar & PAN have "Kaviya G". Please verify.'
      },
      {
        id: 'chk-dob',
        field: 'dob',
        label: 'Date of Birth',
        status: 'match',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: '12/05/2003' },
          { docType: 'pan', docName: 'PAN Card', value: '12/05/2003' },
          { docType: 'birth_cert', docName: 'Birth Certificate', value: '12/05/2003' }
        ],
        notes: 'Exact match across all primary identity documents.'
      },
      {
        id: 'chk-address',
        field: 'address',
        label: 'Permanent Address',
        status: 'match',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: '12, Lake View Road, Coimbatore - 641001' },
          { docType: 'voter_id', docName: 'Voter ID', value: '12, Lake View Road, Coimbatore - 641001' }
        ],
        notes: 'Matches across residential records.'
      },
      {
        id: 'chk-father',
        field: 'fatherName',
        label: "Father / Guardian Name",
        status: 'review',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: 'Govindaraj G' },
          { docType: 'voter_id', docName: 'Voter ID', value: 'Govindaraju G' }
        ],
        notes: 'Minor suffix spelling variation between Aadhaar ("Govindaraj") and Voter ID ("Govindaraju").'
      }
    ];
  } else if (profile.profileType === 'farmer') {
    return [
      {
        id: 'chk-name-farmer',
        field: 'name',
        label: 'Full Name',
        status: 'match',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: 'Ramasamy M' },
          { docType: 'land_record', docName: 'Patta Document', value: 'Ramasamy M' },
          { docType: 'pan', docName: 'PAN Card', value: 'Ramasamy M' }
        ],
        notes: 'Name is consistent across identity and land revenue records.'
      },
      {
        id: 'chk-dob-farmer',
        field: 'dob',
        label: 'Date of Birth',
        status: 'match',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: '15/06/1978' },
          { docType: 'pan', docName: 'PAN Card', value: '15/06/1978' }
        ],
        notes: 'Date of birth matches across records.'
      },
      {
        id: 'chk-land-farmer',
        field: 'landExtent',
        label: 'Land Title & Survey Number',
        status: 'match',
        values: [
          { docType: 'land_record', docName: 'Patta #8841', value: 'Survey No 142/2A (2.50 Acres)' },
          { docType: 'ration_card', docName: 'Ration Record', value: 'Sulur Village' }
        ],
        notes: 'Land survey registration verified against State Land Revenue database.'
      }
    ];
  } else {
    // Senior Citizen
    return [
      {
        id: 'chk-name-senior',
        field: 'name',
        label: 'Full Name',
        status: 'match',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: 'Sundaramoorthy K' },
          { docType: 'ration_card', docName: 'BPL Card', value: 'Sundaramoorthy K' },
          { docType: 'address_proof', docName: 'Senior Citizen ID', value: 'Sundaramoorthy K' }
        ],
        notes: 'Name matches consistently across all senior welfare cards.'
      },
      {
        id: 'chk-age-senior',
        field: 'ageVerification',
        label: 'Age Proof (70+ Universal Criteria)',
        status: 'match',
        values: [
          { docType: 'aadhaar', docName: 'Aadhaar Card', value: 'DOB: 08/04/1954 (Age 72)' },
          { docType: 'address_proof', docName: 'Senior Citizen ID', value: 'Verified 70+ Senior' }
        ],
        notes: 'Aadhaar confirms Age 72, qualifying for Universal Ayushman Bharat PMJAY 70+ cover without income restrictions.'
      }
    ];
  }
};

export const DEMO_APPLICATIONS: Record<string, ApplicationRecord[]> = {
  student: [
    {
      id: 'app-scholarship-1',
      schemeId: 'post-matric-scholarship',
      schemeName: 'Post-Matric Scholarship 2026-27',
      appliedDate: '2026-08-10',
      status: 'documents_pending',
      pendingAction: 'Upload renewed College Bonafide certificate',
      requiredDocs: [
        { docName: 'Aadhaar Card', status: 'verified' },
        { docName: 'Income Certificate', status: 'verified' },
        { docName: 'College Bonafide', status: 'pending' },
        { docName: 'Bank Passbook', status: 'ready' }
      ],
      officialPortalUrl: 'https://scholarships.gov.in',
      lastUpdated: '2026-08-18',
      reminderDate: '2026-09-15',
      referenceNumber: 'NSP/2026/TN/882194',
      department: 'Ministry of Social Justice & Empowerment'
    },
    {
      id: 'app-pragati-1',
      schemeId: 'aicte-pragati-scholarship',
      schemeName: 'AICTE Pragati Scholarship for Girls',
      appliedDate: '2026-08-12',
      status: 'in_review',
      pendingAction: 'Institute Level e-Verification in progress',
      requiredDocs: [
        { docName: 'Admission Letter', status: 'verified' },
        { docName: 'Income Certificate', status: 'verified' },
        { docName: 'Aadhaar Card', status: 'verified' }
      ],
      officialPortalUrl: 'https://www.aicte-india.org',
      lastUpdated: '2026-08-19',
      referenceNumber: 'AICTE/PRG/2026/0491',
      department: 'All India Council for Technical Education'
    }
  ],
  farmer: [
    {
      id: 'app-pmkisan-1',
      schemeId: 'pm-kisan-samman-nidhi',
      schemeName: 'PM-Kisan 19th Installment eKYC Renewal',
      appliedDate: '2026-07-25',
      status: 'approved',
      pendingAction: 'Installment scheduled for direct DBT credit',
      requiredDocs: [
        { docName: 'Aadhaar e-KYC', status: 'verified' },
        { docName: 'Land Patta Record', status: 'verified' },
        { docName: 'Bank DBT Link', status: 'verified' }
      ],
      officialPortalUrl: 'https://pmkisan.gov.in',
      lastUpdated: '2026-08-15',
      referenceNumber: 'PMK/TN/CBE/998124',
      department: 'Ministry of Agriculture & Farmers Welfare'
    },
    {
      id: 'app-pmfby-1',
      schemeId: 'pm-fasal-bima-yojana',
      schemeName: 'PMFBY Kharif Crop Insurance Policy',
      appliedDate: '2026-08-02',
      status: 'in_review',
      pendingAction: 'Awaiting Village Sowing Certificate endorsement',
      requiredDocs: [
        { docName: 'Land Patta #8841', status: 'verified' },
        { docName: 'Sowing Certificate', status: 'pending' },
        { docName: 'Aadhaar Card', status: 'verified' }
      ],
      officialPortalUrl: 'https://pmfby.gov.in',
      lastUpdated: '2026-08-17',
      referenceNumber: 'PMFBY/2026/KHF/77192',
      department: 'Department of Agriculture'
    }
  ],
  senior: [
    {
      id: 'app-ayushman-senior',
      schemeId: 'ayushman-bharat-senior-70',
      schemeName: 'Ayushman Vay Vandana Card (Senior 70+)',
      appliedDate: '2026-08-05',
      status: 'approved',
      pendingAction: 'Digital Golden Card ready for instant download',
      requiredDocs: [
        { docName: 'Aadhaar Age Proof (72 Yrs)', status: 'verified' },
        { docName: 'Mobile OTP Verification', status: 'verified' }
      ],
      officialPortalUrl: 'https://beneficiary.nha.gov.in',
      lastUpdated: '2026-08-06',
      referenceNumber: 'AB-PMJAY/SR70/TN/44129',
      department: 'National Health Authority (NHA)'
    },
    {
      id: 'app-ignoaps-senior',
      schemeId: 'ignoaps-old-age-pension',
      schemeName: 'IGNOAPS Monthly Pension Disbursement',
      appliedDate: '2026-07-10',
      status: 'in_review',
      pendingAction: 'Annual digital life certificate (Jeevan Pramaan) update due',
      requiredDocs: [
        { docName: 'Aadhaar Card', status: 'verified' },
        { docName: 'BPL Ration Card', status: 'verified' },
        { docName: 'Bank Passbook', status: 'verified' }
      ],
      officialPortalUrl: 'https://nsap.nic.in',
      lastUpdated: '2026-08-14',
      referenceNumber: 'NSAP/IGNOAPS/TN/00341',
      department: 'Ministry of Rural Development'
    }
  ]
};

export const DEMO_REMINDERS: Record<string, ReminderItem[]> = {
  student: [
    {
      id: 'rem-student-1',
      title: 'Post-Matric Scholarship Application Deadline',
      description: 'National Scholarship Portal application window closes on October 31, 2026. Keep your college bonafide ready.',
      dueDate: '2026-10-31',
      priority: 'high',
      type: 'deadline',
      isRead: false,
      actionLink: 'discover'
    },
    {
      id: 'rem-student-2',
      title: 'Income Certificate Annual Validity Check',
      description: 'Your State Income Certificate is valid until March 2027. No immediate renewal required.',
      dueDate: '2027-03-31',
      priority: 'low',
      type: 'document_expiry',
      isRead: true,
      actionLink: 'documents'
    },
    {
      id: 'rem-student-3',
      title: 'AICTE Pragati Portal Institution Verification',
      description: 'Check with your college scholarship nodal officer for institute-level e-signature.',
      dueDate: '2026-09-10',
      priority: 'medium',
      type: 'application_update',
      isRead: false,
      actionLink: 'applications'
    }
  ],
  farmer: [
    {
      id: 'rem-farmer-1',
      title: 'PMFBY Kharif Crop Insurance Enrollment Cut-off',
      description: 'Last date for Kharif crop coverage premium enrollment is September 30, 2026.',
      dueDate: '2026-09-30',
      priority: 'high',
      type: 'deadline',
      isRead: false,
      actionLink: 'discover'
    },
    {
      id: 'rem-farmer-2',
      title: 'PM-Kisan Face-Authentication eKYC Notice',
      description: 'Annual biometrics eKYC on the PM-Kisan mobile app completed successfully.',
      dueDate: '2026-11-15',
      priority: 'low',
      type: 'scheme_update',
      isRead: true,
      actionLink: 'applications'
    },
    {
      id: 'rem-farmer-3',
      title: 'Soil Health Card 3-Year Cycle Renewal',
      description: 'Collect your free soil sample testing report at the Sulur Agricultural Extension Centre.',
      dueDate: '2026-10-15',
      priority: 'medium',
      type: 'document_expiry',
      isRead: false,
      actionLink: 'documents'
    }
  ],
  senior: [
    {
      id: 'rem-senior-1',
      title: 'Jeevan Pramaan (Digital Life Certificate) Submission',
      description: 'Annual digital life certificate submission opens from October 1st for uninterrupted pension DBT.',
      dueDate: '2026-11-30',
      priority: 'high',
      type: 'deadline',
      isRead: false,
      actionLink: 'applications'
    },
    {
      id: 'rem-senior-2',
      title: 'Ayushman Vay Vandana Card Active',
      description: 'Universal ₹5 Lakh cashless hospital coverage is active. Present card at empaneled hospitals.',
      dueDate: '2027-08-01',
      priority: 'low',
      type: 'scheme_update',
      isRead: true,
      actionLink: 'discover'
    },
    {
      id: 'rem-senior-3',
      title: 'Free Geriatric Health Camp in District Hospital',
      description: 'NPHCE free eye screening and assisted mobility device measurement camp next Tuesday.',
      dueDate: '2026-09-02',
      priority: 'medium',
      type: 'scheme_update',
      isRead: false,
      actionLink: 'discover'
    }
  ]
};
