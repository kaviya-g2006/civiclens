import React from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  FileCheck,
  FileQuestion,
  X,
  HelpCircle
} from 'lucide-react';
import { Scheme, CitizenProfile, EligibilityAssessment } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedScheme } from '../data/localizedData';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  scheme: Scheme | null;
  assessment: EligibilityAssessment | null;
  onProceedToPrepare: (scheme: Scheme) => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  scheme,
  assessment,
  onProceedToPrepare,
}) => {
  const { t, language } = useLanguage();

  if (!isOpen || !scheme || !assessment) return null;

  const localizedScheme = getLocalizedScheme(scheme, language);

  const statusConfig = {
    eligible: {
      label: t('statusEligible'),
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      cardBg: 'bg-emerald-50/60 border-emerald-200',
      icon: CheckCircle2,
      iconColor: 'text-emerald-600',
      headline: 'You meet the eligibility criteria for this scheme.'
    },
    not_eligible: {
      label: t('statusIneligible'),
      badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
      cardBg: 'bg-rose-50/60 border-rose-200',
      icon: XCircle,
      iconColor: 'text-rose-600',
      headline: 'You do not currently satisfy the statutory criteria for this scheme.'
    },
    potentially_eligible: {
      label: t('statusVerificationReq'),
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      cardBg: 'bg-amber-50/60 border-amber-200',
      icon: AlertCircle,
      iconColor: 'text-amber-600',
      headline: 'You meet the primary criteria, but final approval requires document verification.'
    }
  }[assessment.status];

  const StatusIcon = statusConfig.icon;

  return (
    <div
      id="civiclens-eligibility-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Eligibility Assessment"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>{t('eligibilityEngine')}</span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white pr-8">
            {localizedScheme.name}
          </h2>
          <p className="text-xs text-slate-300 mt-1 font-medium">
            {localizedScheme.department}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Status Banner */}
          <div className={`p-4 rounded-2xl border ${statusConfig.cardBg} flex items-start gap-4`}>
            <StatusIcon className={`w-7 h-7 ${statusConfig.iconColor} shrink-0 mt-0.5`} />
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full border ${statusConfig.badgeBg}`}>
                  {statusConfig.label}
                </span>
                <span className="text-xs font-bold text-slate-700">
                  {t('matchScore')}: <span className="text-blue-700">{assessment.score}%</span>
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mt-2">
                {statusConfig.headline}
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {assessment.explanation}
              </p>
            </div>
          </div>

          {/* Matched Criteria List */}
          {assessment.matchedCriteria.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>{t('matchedCriteria')} ({assessment.matchedCriteria.length})</span>
              </h3>
              <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 space-y-2">
                {assessment.matchedCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Unmet Criteria / Disqualifiers (if any) */}
          {assessment.unmetCriteria.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>{t('unmetCriteria')} ({assessment.unmetCriteria.length})</span>
              </h3>
              <div className="bg-rose-50/70 rounded-2xl p-3.5 border border-rose-200 space-y-2">
                {assessment.unmetCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-rose-900 font-medium">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Missing Information / Pending Certificates */}
          {assessment.missingInformation.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center gap-2">
                <FileQuestion className="w-4 h-4 text-amber-600" />
                <span>{t('requiredDocs')}</span>
              </h3>
              <div className="bg-amber-50/70 rounded-2xl p-3.5 border border-amber-200 space-y-2">
                {assessment.missingInformation.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Citizen Action Checklist */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              {t('actionNext')}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {assessment.actionNext.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 shrink-0">{idx + 1}.</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Source Link */}
          <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs">
            <div className="text-slate-600">
              {t('officialSource')}: <span className="font-semibold text-slate-900">{localizedScheme.officialSource}</span>
            </div>
            <a
              href={localizedScheme.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
            >
              <span>{t('visitOfficialPortal')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            {t('close')}
          </button>

          {assessment.status !== 'not_eligible' && (
            <button
              id="btn-eligibility-proceed-prepare"
              onClick={() => {
                onClose();
                onProceedToPrepare(scheme);
              }}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <span>{t('proceedToPrepare')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
