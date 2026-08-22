import React, { useState } from 'react';
import {
  Search,
  CheckSquare,
  ShieldAlert,
  ArrowRight,
  Gift,
  FileText,
  Bell,
  Folder,
  ChevronRight,
  ExternalLink,
  SlidersHorizontal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CitizenProfile, Scheme, ApplicationRecord, ReminderItem, ActiveTab } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedScheme } from '../data/localizedData';

interface DashboardViewProps {
  profile: CitizenProfile;
  schemes: Scheme[];
  applications: ApplicationRecord[];
  reminders: ReminderItem[];
  onNavigate: (tab: ActiveTab) => void;
  onCheckEligibility: (scheme: Scheme) => void;
  onPrepareScheme: (scheme: Scheme) => void;
  onSearchQuery?: (q: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  profile,
  schemes,
  applications,
  reminders,
  onNavigate,
  onCheckEligibility,
  onPrepareScheme,
  onSearchQuery
}) => {
  const { language, t } = useLanguage();
  const [dashboardSearch, setDashboardSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchQuery && dashboardSearch.trim()) {
      onSearchQuery(dashboardSearch.trim());
      onNavigate('discover');
    } else {
      onNavigate('discover');
    }
  };

  // Localized and matched schemes
  const localizedSchemes = schemes.map((s) => getLocalizedScheme(s, language));
  const matchedSchemes = localizedSchemes.filter((s) => s.profileTypes.includes(profile.profileType));

  return (
    <div id="civiclens-dashboard-view" className="space-y-8 animate-in fade-in duration-200 font-sans">
      {/* 1. Hero Banner with Citizen Illustration & Search */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50/70 border border-blue-100/80 p-6 sm:p-8 lg:p-10 shadow-xs">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t('greetingPrefix')} {profile.name}! 👋
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
              {t('greetingSubtitle')}
            </p>
          </div>

          {/* Embedded Search Input */}
          <form onSubmit={handleSearch} className="pt-2">
            <div className="flex items-center bg-white rounded-2xl shadow-sm border border-slate-200/80 p-1.5 max-w-lg transition-all focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={dashboardSearch}
                onChange={(e) => setDashboardSearch(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs"
              >
                {t('searchBtn')}
              </button>
            </div>
          </form>
        </div>

        {/* Decorative Graphic on Right */}
        <div className="hidden md:flex absolute right-6 bottom-0 top-0 items-center pointer-events-none pr-4">
          <svg viewBox="0 0 280 200" className="w-64 h-48 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="185" rx="120" ry="12" fill="#E2E8F0" />
            <path d="M70 170 C70 110, 210 110, 210 170 Z" fill="#DBEAFE" />
            <path d="M110 170 L110 120 C110 110, 170 110, 170 120 L170 170 Z" fill="#93C5FD" />
            <circle cx="140" cy="95" r="16" fill="#FBBF24" />
            <rect x="132" y="115" width="16" height="40" rx="8" fill="#2563EB" />
            {/* Citizens Vector Art */}
            <circle cx="105" cy="85" r="14" fill="#F472B6" />
            <path d="M92 105 C92 98, 118 98, 118 105 L118 170 L92 170 Z" fill="#EC4899" />
            <circle cx="175" cy="88" r="14" fill="#60A5FA" />
            <path d="M162 108 C162 100, 188 100, 188 108 L188 170 L162 170 Z" fill="#3B82F6" />
            {/* Indian Emblem Pillar / Arch Silhouette */}
            <path d="M40 170 L40 140 L50 140 L50 170 Z" fill="#CBD5E1" />
            <path d="M230 170 L230 140 L240 140 L240 170 Z" fill="#CBD5E1" />
            <path d="M35 140 C35 130, 55 130, 55 140 Z" fill="#94A3B8" />
            <path d="M225 140 C225 130, 245 130, 245 140 Z" fill="#94A3B8" />
          </svg>
        </div>
      </div>

      {/* 2. Three Pillar Cards (DISCOVER, PREPARE, VERIFY) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* DISCOVER */}
        <div
          id="card-pillar-discover"
          className="bg-white rounded-2xl p-6 border border-blue-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              {t('discoverPillarTitle')}
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {t('discoverPillarDesc')}
            </p>
          </div>
          <div className="pt-6">
            <button
              id="btn-dash-explore"
              onClick={() => onNavigate('discover')}
              className="w-full py-2.5 px-4 rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t('discoverPillarBtn')}</span>
            </button>
          </div>
        </div>

        {/* PREPARE */}
        <div
          id="card-pillar-prepare"
          className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs mb-4">
              <CheckSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              {t('preparePillarTitle')}
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {t('preparePillarDesc')}
            </p>
          </div>
          <div className="pt-6">
            <button
              id="btn-dash-prepare"
              onClick={() => onNavigate('prepare')}
              className="w-full py-2.5 px-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-600 hover:text-white text-emerald-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t('preparePillarBtn')}</span>
            </button>
          </div>
        </div>

        {/* VERIFY */}
        <div
          id="card-pillar-verify"
          className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              {t('verifyPillarTitle')}
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {t('verifyPillarDesc')}
            </p>
          </div>
          <div className="pt-6">
            <button
              id="btn-dash-verify"
              onClick={() => onNavigate('verify')}
              className="w-full py-2.5 px-4 rounded-xl border border-amber-200 bg-amber-50/50 hover:bg-amber-500 hover:text-white text-amber-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t('verifyPillarBtn')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. "Your Summary" Section (4 White Stat Cards) */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          {t('yourSummary')}
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Potential Benefits */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">{t('statPotentialBenefits')}</p>
              <h4 className="text-2xl font-black text-slate-900 mt-1">12</h4>
              <button
                onClick={() => onNavigate('discover')}
                className="text-xs font-bold text-blue-600 hover:underline mt-1 block"
              >
                {t('viewAll')}
              </button>
            </div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5" />
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">{t('statApplications')}</p>
              <h4 className="text-2xl font-black text-slate-900 mt-1">{applications.length || 2}</h4>
              <p className="text-xs text-slate-400 mt-1">{t('inProgress')}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          {/* Reminders */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">{t('statReminders')}</p>
              <h4 className="text-2xl font-black text-slate-900 mt-1">{reminders.length || 3}</h4>
              <p className="text-xs text-amber-600 font-medium mt-1">{t('pending')}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5" />
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">{t('statDocuments')}</p>
              <h4 className="text-2xl font-black text-slate-900 mt-1">{profile.documents.length || 6}</h4>
              <p className="text-xs text-emerald-600 font-medium mt-1">{t('uploaded')}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Folder className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. "Schemes for You" Preview Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            {t('schemesForYou')}
          </h3>
          <button
            onClick={() => onNavigate('discover')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>{t('viewAll')}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {matchedSchemes.slice(0, 3).map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    {t(scheme.category) || scheme.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {t('eligibleBadge')}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                  {scheme.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {scheme.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onCheckEligibility(scheme)}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  {t('knowMore')}
                </button>
                <button
                  onClick={() => onPrepareScheme(scheme)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  {t('prepareApplyBtn')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
