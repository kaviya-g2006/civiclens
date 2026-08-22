/**
 * CivicLens - Type Definitions
 * Discover. Prepare. Verify.
 */

export type LanguageCode = 'en' | 'ta' | 'hi' | 'te' | 'kn' | 'ml';

export type CitizenProfileType = 'student' | 'farmer' | 'senior';

export type DocumentType =
  | 'aadhaar'
  | 'pan'
  | 'voter_id'
  | 'ration_card'
  | 'birth_cert'
  | 'address_proof'
  | 'income_cert'
  | 'land_record'
  | 'student_id'
  | 'caste_cert';

export type VerificationStatus = 'match' | 'review' | 'discrepancy';

export interface UploadedDocument {
  id: string;
  type: DocumentType;
  name: string;
  documentNumber?: string;
  status: 'uploaded' | 'verified' | 'review_required' | 'missing';
  extractedData: Record<string, string>;
  uploadDate: string;
  fileSize?: string;
  confidenceScore: number;
  isCustomUploaded?: boolean;
}

export type SupportedDocument = UploadedDocument;

export interface ConsistencyCheckItem {
  id: string;
  field: string;
  label: string;
  status: VerificationStatus;
  values: {
    docType: string;
    docName: string;
    value: string;
  }[];
  notes?: string;
}

export interface StudentDetails {
  institution: string;
  course: string;
  currentYear: string;
  previousYearMarks: number;
  isHosteller: boolean;
  studentIdNumber: string;
}

export interface FarmerDetails {
  landSizeAcres: number;
  landOwnership: 'owner' | 'tenant' | 'sharecropper';
  cropType: string[];
  irrigationStatus: 'irrigated' | 'rainfed' | 'partially_irrigated';
  khasraPattaNo: string;
  kccHolder: boolean;
}

export interface SeniorDetails {
  isRetired: boolean;
  previousOccupation: string;
  pensionStatus: 'receiving_pension' | 'no_pension' | 'applied';
  bplCardHolder: boolean;
  seniorCardNumber: string;
  livingStatus: 'with_family' | 'living_alone' | 'care_home';
}

export interface CitizenProfile {
  id: string;
  name: string;
  profileType: CitizenProfileType;
  dob: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  district: string;
  state: string;
  pincode: string;
  fatherOrSpouseName: string;
  phone: string;
  email: string;
  maskedAadhaar: string;
  maskedPan: string;
  maskedVoterId?: string;
  annualIncome: number;
  socialCategory: 'General' | 'OBC' | 'SC' | 'ST' | 'Minority' | 'EWS';
  isDifferentlyAbled: boolean;
  studentDetails?: StudentDetails;
  farmerDetails?: FarmerDetails;
  seniorDetails?: SeniorDetails;
  documents: UploadedDocument[];
  confirmedAt?: string;
}

export type SchemeCategory =
  | 'education'
  | 'agriculture'
  | 'healthcare'
  | 'pension'
  | 'housing'
  | 'financial'
  | 'social_welfare';

export interface Scheme {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: SchemeCategory;
  profileTypes: CitizenProfileType[];
  centralOrState: 'central' | 'state';
  state?: string;
  department: string;
  benefits: string[];
  eligibilityRules: {
    minAge?: number;
    maxAge?: number;
    maxIncome?: number;
    requiredProfile?: CitizenProfileType;
    requiredGender?: 'Male' | 'Female' | 'Other';
    otherCriteria: string[];
  };
  requiredDocuments: string[];
  officialSource: string;
  officialPortalUrl?: string;
  lastVerifiedDate: string;
  deadline?: string;
  tags: string[];
  estimatedProcessingTime?: string;
  isSupportedForm?: boolean;
}

export interface LegalRight {
  id: string;
  title: string;
  description: string;
  actOrBasis: string;
  appliesTo: CitizenProfileType[];
  keyEntitlements: string[];
  howToExercise: string;
  grievancePortal?: string;
}

export type EligibilityStatus = 'eligible' | 'not_eligible' | 'potentially_eligible';

export interface EligibilityAssessment {
  schemeId: string;
  schemeName: string;
  status: EligibilityStatus;
  score: number; // 0 to 100
  matchedCriteria: string[];
  unmetCriteria: string[];
  missingInformation: string[];
  explanation: string;
  actionNext: string[];
  evaluatedAt: string;
}

export type ApplicationStatus =
  | 'draft'
  | 'documents_pending'
  | 'in_review'
  | 'approved'
  | 'action_required'
  | 'rejected';

export interface ApplicationRecord {
  id: string;
  schemeId: string;
  schemeName: string;
  appliedDate: string;
  status: ApplicationStatus;
  pendingAction?: string;
  requiredDocs: {
    docName: string;
    status: 'ready' | 'pending' | 'verified';
  }[];
  officialPortalUrl?: string;
  lastUpdated: string;
  reminderDate?: string;
  referenceNumber: string;
  department: string;
}

export type ReminderType =
  | 'deadline'
  | 'document_expiry'
  | 'scheme_update'
  | 'application_update';

export interface ReminderItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  type: ReminderType;
  isRead: boolean;
  actionLink?: string;
}

export type ClaimVerdict = 'verified' | 'unverified' | 'fraudulent';

export interface VerifyAnalysisResult {
  id: string;
  claimText: string;
  verdict: ClaimVerdict;
  confidence: number;
  summary: string;
  detectedRisks: string[];
  safeIndicators: string[];
  officialSource?: {
    name: string;
    url: string;
    description: string;
  };
  recommendations: string[];
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'system';
  text: string;
  timestamp: string;
  verifyResult?: VerifyAnalysisResult;
}

export type ActiveTab =
  | 'home'
  | 'discover'
  | 'prepare'
  | 'verify'
  | 'documents'
  | 'applications'
  | 'reminders'
  | 'profile'
  | 'help';
