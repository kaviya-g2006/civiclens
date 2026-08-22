import React, { useState } from 'react';
import {
  CheckSquare,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Upload,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Copy,
  Check,
  Edit3,
  Download,
  AlertCircle,
  FileCheck2
} from 'lucide-react';
import { CitizenProfile, Scheme, ConsistencyCheckItem, ApplicationRecord } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getConsistencyCheckItems } from '../data/demoProfiles';
import { getLocalizedScheme } from '../data/localizedData';

interface PrepareViewProps {
  profile: CitizenProfile;
  schemes: Scheme[];
  preSelectedScheme?: Scheme | null;
  onSaveApplication: (app: ApplicationRecord) => void;
  onNavigateToApplications: () => void;
}

export const PrepareView: React.FC<PrepareViewProps> = ({
  profile,
  schemes,
  preSelectedScheme,
  onSaveApplication,
  onNavigateToApplications,
}) => {
  const { language, t } = useLanguage();

  const localizedSchemes = schemes.map((s) => getLocalizedScheme(s, language));
  const supportedSchemes = localizedSchemes.filter((s) => s.isSupportedForm && s.profileTypes.includes(profile.profileType));

  const [selectedSchemeId, setSelectedSchemeId] = useState<string>(
    preSelectedScheme?.id || supportedSchemes[0]?.id || schemes[0]?.id
  );

  const rawActiveScheme = schemes.find((s) => s.id === selectedSchemeId) || schemes[0];
  const activeScheme = getLocalizedScheme(rawActiveScheme, language);

  // Editable Form fields
  const [formData, setFormData] = useState({
    applicantName: profile.name,
    dob: profile.dob,
    gender: profile.gender,
    address: profile.address,
    district: profile.district,
    state: profile.state,
    pincode: profile.pincode,
    maskedAadhaar: profile.maskedAadhaar,
    phone: profile.phone,
    email: profile.email,
    socialCategory: profile.socialCategory,
    annualIncome: profile.annualIncome.toString(),
    // Specifics
    institutionOrLand: profile.profileType === 'student'
      ? profile.studentDetails?.institution || ''
      : profile.profileType === 'farmer'
      ? `Patta #${profile.farmerDetails?.khasraPattaNo || '8841'} (${profile.farmerDetails?.landSizeAcres || 2.5} Acres)`
      : `Senior Card #${profile.seniorDetails?.seniorCardNumber || 'TN-SR-99214'}`,
    bankAccountSeeded: 'Yes (Aadhaar DBT Enabled)'
  });

  const [copiedSummary, setCopiedSummary] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const consistencyItems: ConsistencyCheckItem[] = getConsistencyCheckItems(profile);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopySummary = () => {
    const summaryText = `CIVICLENS VERIFIED APPLICATION SUMMARY
Scheme: ${activeScheme.name}
Applicant Name: ${formData.applicantName}
DOB: ${formData.dob} (${profile.age} Yrs)
Gender: ${formData.gender}
Address: ${formData.address}, ${formData.district}, ${formData.state} - ${formData.pincode}
Aadhaar (Masked): ${formData.maskedAadhaar}
Phone: ${formData.phone}
Social Category: ${formData.socialCategory}
Annual Family Income: ₹${formData.annualIncome}
Specific Entity: ${formData.institutionOrLand}
DBT Bank Status: ${formData.bankAccountSeeded}
Verified on CivicLens: ${new Date().toLocaleDateString()}`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const handleRecordApplication = () => {
    const newRecord: ApplicationRecord = {
      id: 'app-' + Date.now(),
      schemeId: activeScheme.id,
      schemeName: activeScheme.name,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'in_review',
      pendingAction: 'Submitted on Official Portal. Awaiting Institute / Nodal verification.',
      requiredDocs: activeScheme.requiredDocuments.map((doc) => ({
        docName: doc,
        status: 'verified'
      })),
      officialPortalUrl: activeScheme.officialPortalUrl,
      lastUpdated: new Date().toISOString().split('T')[0],
      referenceNumber: `CIVIC/${new Date().getFullYear()}/${Math.floor(100000 + Math.random() * 900000)}`,
      department: activeScheme.department
    };

    onSaveApplication(newRecord);
    setApplicationSubmitted(true);
  };

  return (
    <div id="civiclens-prepare-view" className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider">
          <CheckSquare className="w-4 h-4" />
          <span>{t('navPrepare')}</span>
        </div>
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
          {t('preparePillarTitle')} & {t('docVerification')}
        </h1>
        <p className="text-xs text-slate-600">
          {t('preparePillarDesc')}
        </p>
      </div>

      {/* SECTION 1: Cross-Document Consistency Check Panel */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                {t('crossDocAnalysis')}
              </h2>
              <p className="text-xs text-slate-500">
                {t('consistencySubtitle')}
              </p>
            </div>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 self-start sm:self-auto">
            {profile.documents.length} {t('proofsVerified')}
          </span>
        </div>

        {/* Consistency Comparison Table */}
        <div className="overflow-x-auto">
          <div className="space-y-3 min-w-[500px]">
            {consistencyItems.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border transition-all ${
                  item.status === 'match'
                    ? 'bg-slate-50/70 border-slate-200'
                    : 'bg-amber-50/70 border-amber-200'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                    {item.status === 'match' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      item.status === 'match'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        : 'bg-amber-100 text-amber-800 border-amber-300'
                    }`}
                  >
                    {item.status === 'match' ? t('matchVerified') : t('reviewRecommended')}
                  </span>
                </div>

                {/* Values across docs */}
                <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                  {item.values.map((v, i) => (
                    <div key={i} className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">
                        {v.docName}
                      </div>
                      <div className="font-bold text-slate-900 mt-0.5 truncate">{v.value}</div>
                    </div>
                  ))}
                </div>

                {/* Notes */}
                <div className="text-xs text-slate-600 mt-2.5 flex items-start gap-2 bg-white/70 p-2 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-700">{t('resolutionTip')}:</span>
                  <span>{item.notes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: Supported Form Preparation & Pre-Fill */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <FileCheck2 className="w-4 h-4" />
              <span>{t('preparePillarTitle')}</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mt-0.5">
              {t('schemeFormAutoFill')}
            </h2>
            <p className="text-xs text-slate-500">
              {t('autoFilledFromVault')}
            </p>
          </div>

          {/* Scheme Selector Dropdown */}
          <div className="min-w-[260px]">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              {t('selectScheme')}:
            </label>
            <select
              value={selectedSchemeId}
              onChange={(e) => setSelectedSchemeId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {localizedSchemes.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({t(s.category) || s.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Scheme Header info */}
        <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <div className="font-bold text-blue-950 text-sm">{activeScheme.name}</div>
            <div className="text-blue-800 text-[11px] mt-0.5">
              {activeScheme.department}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-white font-bold text-blue-700 border border-blue-200 shadow-2xs">
              {t('officialPortal')}: {activeScheme.officialSource}
            </span>
          </div>
        </div>

        {/* Auto-filled form inputs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              {t('autoFilledFromVault')}
            </h3>
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <Edit3 className="w-3 h-3" />
              <span>{t('reviewRecommended')}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Field 1: Full Name */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('applicantFullName')}
              </label>
              <input
                type="text"
                value={formData.applicantName}
                onChange={(e) => handleInputChange('applicantName', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Field 2: Date of Birth */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('dob')} (DD/MM/YYYY)
              </label>
              <input
                type="text"
                value={formData.dob}
                onChange={(e) => handleInputChange('dob', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Field 3: Gender */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('gender')}
              </label>
              <input
                type="text"
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Field 4: Masked Aadhaar */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('maskedAadhaar')}
              </label>
              <input
                type="text"
                value={formData.maskedAadhaar}
                disabled
                className="w-full px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-700 cursor-not-allowed"
              />
            </div>

            {/* Field 5: Phone */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('contactPhone')}
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Field 6: Annual Family Income */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('annualIncome')} (₹)
              </label>
              <input
                type="text"
                value={formData.annualIncome}
                onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Field 7: Address */}
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('residentialAddress')}
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Field 8: District / State */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('district')} / {t('state')}
              </label>
              <input
                type="text"
                value={`${formData.district}, ${formData.state} - ${formData.pincode}`}
                disabled
                className="w-full px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 cursor-not-allowed"
              />
            </div>

            {/* Field 9: Role Specific Detail */}
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {profile.profileType === 'student'
                  ? t('educationalInstitution')
                  : profile.profileType === 'farmer'
                  ? t('landDetailsPatta')
                  : t('seniorCitizenDetails')}
              </label>
              <input
                type="text"
                value={formData.institutionOrLand}
                onChange={(e) => handleInputChange('institutionOrLand', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Field 10: DBT Bank */}
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">
                {t('dbtBankSeeded')}
              </label>
              <input
                type="text"
                value={formData.bankAccountSeeded}
                disabled
                className="w-full px-3.5 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-800 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Required Documents Attachment Checklist */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            {t('requiredDocsChecklist')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {activeScheme.requiredDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <span className="font-medium text-slate-800">{doc}</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{t('ready')}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Submission notification if completed */}
        {applicationSubmitted && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">{t('trackedInApplications')} </span>
                <span>{t('trackApplicationSubtitle')}</span>
              </div>
            </div>
            <button
              onClick={onNavigateToApplications}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shrink-0"
            >
              {t('navApplications')}
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopySummary}
            className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
          >
            {copiedSummary ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copiedSummary ? t('summaryCopied') : t('copyApplicationSummary')}</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleRecordApplication}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition-all"
            >
              {t('markAsApplied')}
            </button>

            {/* Direct Official Government Portal Link */}
            <a
              href={activeScheme.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/20"
            >
              <span>{t('openOfficialPortal')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
