import React, { useState } from 'react';
import {
  FolderKanban,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  Plus,
  Building2,
  Copy,
  Check,
  FileText,
  ChevronRight
} from 'lucide-react';
import { ApplicationRecord, ApplicationStatus } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface ApplicationsViewProps {
  applications: ApplicationRecord[];
  onAddNewApplication?: () => void;
  onNavigateToDiscover: () => void;
}

export const ApplicationsView: React.FC<ApplicationsViewProps> = ({
  applications,
  onNavigateToDiscover,
}) => {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const statusConfig: Record<
    ApplicationStatus,
    { label: string; badge: string; icon: React.FC<{ className?: string }> }
  > = {
    draft: {
      label: t('statusDraft'),
      badge: 'bg-slate-100 text-slate-800 border-slate-300',
      icon: FileText,
    },
    documents_pending: {
      label: t('statusDocsPending'),
      badge: 'bg-amber-100 text-amber-800 border-amber-300',
      icon: AlertCircle,
    },
    in_review: {
      label: t('statusInReview'),
      badge: 'bg-blue-100 text-blue-800 border-blue-300',
      icon: Clock,
    },
    approved: {
      label: t('statusApproved'),
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      icon: CheckCircle2,
    },
    action_required: {
      label: t('statusActionReq'),
      badge: 'bg-rose-100 text-rose-800 border-rose-300',
      icon: AlertCircle,
    },
    rejected: {
      label: t('statusRejected'),
      badge: 'bg-slate-100 text-slate-700 border-slate-300',
      icon: AlertCircle,
    },
  };

  const handleCopy = (ref: string) => {
    navigator.clipboard.writeText(ref);
    setCopiedId(ref);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div id="civiclens-applications-view" className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
          <FolderKanban className="w-4 h-4" />
          <span>{t('navApplications')}</span>
        </div>
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
          {t('trackedGovApps')}
        </h1>
        <p className="text-xs text-slate-600">
          {t('trackAppsDesc')}
        </p>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-3xl border border-slate-200 space-y-3">
            <FolderKanban className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-700 text-base">{t('noApplicationsFound')}</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {t('noApplicationsDesc')}
            </p>
            <button
              onClick={onNavigateToDiscover}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              {t('discoverSchemesBtn')}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => {
              const config = statusConfig[app.status] || statusConfig.in_review;
              const StatusIcon = config.icon;

              return (
                <div
                  key={app.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-5"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-extrabold px-3 py-0.5 rounded-full border ${config.badge} flex items-center gap-1.5`}>
                          <StatusIcon className="w-3.5 h-3.5" />
                          <span>{config.label}</span>
                        </span>
                        <span className="text-xs text-slate-400">
                          {t('submittedOn')} {app.appliedDate}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mt-2">
                        {app.schemeName}
                      </h3>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{app.department || 'Government of India'}</span>
                      </div>
                    </div>

                    {/* Reference number badge */}
                    {app.referenceNumber && (
                      <button
                        onClick={() => handleCopy(app.referenceNumber!)}
                        className="self-start sm:self-auto flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-700 transition-colors"
                        title="Copy Official Reference Number"
                      >
                        <span>Ref: {app.referenceNumber}</span>
                        {copiedId === app.referenceNumber ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Current Status Box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {t('currentActionMilestone')}
                    </div>
                    <div className="text-xs font-semibold text-slate-800">
                      {app.pendingAction}
                    </div>
                  </div>

                  {/* Document Status Pills */}
                  {app.requiredDocs && app.requiredDocs.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">
                        {t('attachedSupportingProofs')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {app.requiredDocs.map((doc, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1.5 ${
                              doc.status === 'verified'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : doc.status === 'pending'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : 'bg-slate-50 text-slate-700 border-slate-200'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            <span>{doc.docName}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer links */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{t('lastSync')}: {app.lastUpdated}</span>
                    <a
                      href={app.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline"
                    >
                      <span>{t('checkPortalLiveStatus')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
