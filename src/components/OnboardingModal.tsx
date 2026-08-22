import React, { useState } from 'react';
import {
  Globe,
  User,
  GraduationCap,
  Tractor,
  HeartHandshake,
  Upload,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Check,
  Building2,
  ScanLine
} from 'lucide-react';
import { CitizenProfile, CitizenProfileType, LanguageCode, SupportedDocument } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { DEMO_PROFILES, getConsistencyCheckItems } from '../data/demoProfiles';
import { CivicLogo } from './CivicLogo';

interface OnboardingModalProps {
  isOpen: boolean;
  onComplete: (profile: CitizenProfile) => void;
  onClose?: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onComplete }) => {
  const { language, setLanguage, languages, t } = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [selectedRole, setSelectedRole] = useState<CitizenProfileType>('student');
  const [isCustomProfile, setIsCustomProfile] = useState<boolean>(false);
  const [uploadedDocs, setUploadedDocs] = useState<SupportedDocument[]>(DEMO_PROFILES.student.documents);
  const [isExtractingOcr, setIsExtractingOcr] = useState<boolean>(false);
  const [confirmedProfile, setConfirmedProfile] = useState<CitizenProfile>(DEMO_PROFILES.student);

  if (!isOpen) return null;

  const handleRoleSelect = (role: CitizenProfileType) => {
    setSelectedRole(role);
    const demo = DEMO_PROFILES[role];
    setUploadedDocs(demo.documents);
    setConfirmedProfile(demo);
  };

  const handleSimulateOcr = () => {
    setIsExtractingOcr(true);
    setTimeout(() => {
      setIsExtractingOcr(false);
    }, 1200);
  };

  const handleFinalSubmit = () => {
    onComplete(confirmedProfile);
  };

  return (
    <div
      id="civiclens-onboarding-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Bar with Progress Indicator */}
        <div className="bg-slate-900 text-white px-6 py-5">
          <div className="flex items-center justify-between">
            <CivicLogo size="sm" showTagline={false} className="[&_span]:text-white" />
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
              <span>Step {step} of 4</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Modal Body: Dynamic Step Content */}
        <div className="p-6 md:p-8">
          {/* STEP 1: Select Language & Welcome */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="text-center max-w-md mx-auto">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  {t('selectLanguage')}
                </h2>
                <p className="text-sm text-slate-600 mt-1.5">
                  English is configured as the default language. Choose your preferred regional language to proceed.
                </p>
              </div>

              {/* Language Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {languages.map((lang) => {
                  const isSelected = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`p-3.5 rounded-2xl border-2 text-left transition-all relative ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {lang.scriptBadge}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </div>
                      <div className="mt-2 font-bold text-sm text-slate-900">{lang.name}</div>
                      <div className="text-xs text-slate-500">{lang.nativeName}</div>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>You can switch languages anytime from the header globe menu.</span>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  id="btn-step1-next"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Choose Persona / Role */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  {t('switchPersona')}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  CivicLens tailors public schemes, subsidies, and legal rights to your demographic profile.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {/* Option 1: Student */}
                <div
                  onClick={() => handleRoleSelect('student')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedRole === 'student'
                      ? 'border-blue-600 bg-blue-50/40 shadow-xs ring-1 ring-blue-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-slate-900">{t('student')}</span>
                        {selectedRole === 'student' && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Post-Matric Scholarships, PM-USP Central Sector grants, AICTE Pragati, free educational equipment.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="text-[11px] bg-white border border-blue-200 px-2 py-0.5 rounded-full text-blue-800 font-medium">
                          Demo: Kaviya G (College Student)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Option 2: Farmer */}
                <div
                  onClick={() => handleRoleSelect('farmer')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedRole === 'farmer'
                      ? 'border-emerald-600 bg-emerald-50/40 shadow-xs ring-1 ring-emerald-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Tractor className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-slate-900">{t('farmer')}</span>
                        {selectedRole === 'farmer' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        PM-Kisan DBT (₹6,000/yr), PMFBY Crop Insurance, Kisan Credit Cards (4% loan), Drip Irrigation Subsidy.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="text-[11px] bg-white border border-emerald-200 px-2 py-0.5 rounded-full text-emerald-800 font-medium">
                          Demo: Ramasamy M (Small Farmer)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Option 3: Senior Citizen */}
                <div
                  onClick={() => handleRoleSelect('senior')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedRole === 'senior'
                      ? 'border-purple-600 bg-purple-50/40 shadow-xs ring-1 ring-purple-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-slate-900">{t('seniorCitizen')}</span>
                        {selectedRole === 'senior' && <CheckCircle2 className="w-5 h-5 text-purple-600" />}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Ayushman Bharat Senior 70+ (Universal ₹5 Lakh cover), IGNOAPS Old Age Pension, Rashtriya Vayoshri aids.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="text-[11px] bg-white border border-purple-200 px-2 py-0.5 rounded-full text-purple-800 font-medium">
                          Demo: Sundaramoorthy K (Senior 72y)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t('back')}</span>
                </button>
                <button
                  id="btn-step2-next"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>{t('continue')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Document AI Extraction & Cross-Document Check */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Uploaded Documents & Verification
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Document AI extracts metadata to verify identity and check for data discrepancies.
                  </p>
                </div>
                <button
                  onClick={handleSimulateOcr}
                  disabled={isExtractingOcr}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <ScanLine className="w-3.5 h-3.5" />
                  <span>{isExtractingOcr ? 'Scanning...' : 'Re-Run OCR'}</span>
                </button>
              </div>

              {/* Uploaded Documents Pill List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {uploadedDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{doc.name}</div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {doc.documentNumber || 'Verified ID'}
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      98% Confidence
                    </span>
                  </div>
                ))}
              </div>

              {/* Consistency Check Preview Box */}
              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                      Cross-Document Consistency Check
                    </span>
                  </div>
                  <span className="text-xs font-medium text-amber-800">
                    {selectedRole === 'student' ? '1 Minor Notice' : '0 Discrepancies'}
                  </span>
                </div>

                <div className="space-y-2">
                  {getConsistencyCheckItems(confirmedProfile).map((chk) => (
                    <div
                      key={chk.id}
                      className="bg-white p-2.5 rounded-xl border border-amber-100 text-xs flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="font-bold text-slate-800">{chk.label}</div>
                        <p className="text-[11px] text-slate-600 mt-0.5">{chk.notes}</p>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 border ${
                          chk.status === 'match'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-100 text-amber-800 border-amber-200'
                        }`}
                      >
                        {chk.status === 'match' ? 'Match' : 'Review'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  id="btn-step3-next"
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Review Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Review Extracted Details & Sign off */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Confirm Citizen Profile
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Please review the verified identity details extracted from your documents.
                </p>
              </div>

              {/* Profile Summary Card */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-slate-500 text-[11px]">Full Name</div>
                    <div className="font-bold text-slate-900 mt-0.5">{confirmedProfile.name}</div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[11px]">Age / Gender</div>
                    <div className="font-bold text-slate-900 mt-0.5">
                      {confirmedProfile.age} Yrs / {confirmedProfile.gender}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[11px]">Annual Income</div>
                    <div className="font-bold text-slate-900 mt-0.5">
                      ₹{confirmedProfile.annualIncome.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[11px]">District / State</div>
                    <div className="font-bold text-slate-900 mt-0.5">
                      {confirmedProfile.district}, {confirmedProfile.state}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[11px]">Masked Aadhaar</div>
                    <div className="font-mono font-bold text-slate-900 mt-0.5">
                      {confirmedProfile.maskedAadhaar}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[11px]">Social Category</div>
                    <div className="font-bold text-slate-900 mt-0.5">
                      {confirmedProfile.socialCategory}
                    </div>
                  </div>
                </div>

                {/* Specific details */}
                {selectedRole === 'student' && confirmedProfile.studentDetails && (
                  <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs">
                    <div className="font-bold text-blue-950">
                      {confirmedProfile.studentDetails.institution}
                    </div>
                    <div className="text-blue-800 text-[11px] mt-0.5">
                      {confirmedProfile.studentDetails.course} ({confirmedProfile.studentDetails.currentYear}) • Marks: {confirmedProfile.studentDetails.previousYearMarks}%
                    </div>
                  </div>
                )}

                {selectedRole === 'farmer' && confirmedProfile.farmerDetails && (
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 text-xs">
                    <div className="font-bold text-emerald-950">
                      Land Extent: {confirmedProfile.farmerDetails.landSizeAcres} Acres (Patta #{confirmedProfile.farmerDetails.khasraPattaNo})
                    </div>
                    <div className="text-emerald-800 text-[11px] mt-0.5">
                      Crops: {confirmedProfile.farmerDetails.cropType.join(', ')} • KCC Holder: Active
                    </div>
                  </div>
                )}

                {selectedRole === 'senior' && confirmedProfile.seniorDetails && (
                  <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 text-xs">
                    <div className="font-bold text-purple-950">
                      Senior Card #{confirmedProfile.seniorDetails.seniorCardNumber} • Age 72
                    </div>
                    <div className="text-purple-800 text-[11px] mt-0.5">
                      BPL / AAY Card Holder • Eligible for Universal Ayushman Bharat Senior 70+ Cover
                    </div>
                  </div>
                )}
              </div>

              {/* Confirmation check */}
              <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200/80 flex items-start gap-3 text-xs text-blue-900">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Citizen Consent & Verification Notice</div>
                  <div className="text-[11px] text-blue-800 mt-0.5">
                    I confirm that the information shown has been accurately extracted from my supporting documents for determining scheme eligibility and preparing government applications.
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  id="btn-step4-finish"
                  onClick={handleFinalSubmit}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm flex items-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                >
                  <span>Launch CivicLens Dashboard</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
