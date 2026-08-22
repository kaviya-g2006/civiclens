import React from 'react';
import {
  Home,
  User,
  FileText,
  Search,
  CheckSquare,
  ShieldAlert,
  FolderKanban,
  Bell,
  HelpCircle,
  LogOut,
  Menu
} from 'lucide-react';
import { CivicLogo } from './CivicLogo';
import { ActiveTab, CitizenProfileType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  profileType: CitizenProfileType;
  onResetOnboarding: () => void;
  applicationsCount: number;
  remindersCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  profileType,
  onResetOnboarding,
  applicationsCount,
  remindersCount,
}) => {
  const { t } = useLanguage();

  return (
    <aside
      id="civiclens-sidebar"
      className="flex flex-col w-56 sm:w-64 bg-white border-r border-slate-200/80 h-screen sticky top-0 shrink-0 select-none z-30 font-sans shadow-xs"
    >
      {/* Brand Header */}
      <div className="px-4 sm:px-5 py-4 flex items-center justify-between border-b border-slate-100">
        <CivicLogo size="md" showTagline={false} theme="light" />
        <button
          onClick={onResetOnboarding}
          className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          title="Settings / Switch Profile"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3.5 py-3 space-y-1 overflow-y-auto">
        <button
          id="nav-btn-home"
          onClick={() => setActiveTab('home')}
          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'home'
              ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Home className={`w-4 h-4 ${activeTab === 'home' ? 'text-blue-600' : 'text-slate-500'}`} />
          <span>{t('navHome')}</span>
        </button>

        <div className="pt-1 pb-1" />

        {/* 3 Core Pillars with Badges */}
        <button
          id="nav-btn-discover"
          onClick={() => setActiveTab('discover')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
            activeTab === 'discover'
              ? 'bg-blue-50 text-blue-700 font-semibold ring-1 ring-blue-200'
              : 'text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Search className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t('navDiscover')}
            </div>
            <div className="text-[11px] text-slate-500 truncate">
              {t('navDiscoverSub')}
            </div>
          </div>
        </button>

        <button
          id="nav-btn-prepare"
          onClick={() => setActiveTab('prepare')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
            activeTab === 'prepare'
              ? 'bg-emerald-50 text-emerald-700 font-semibold ring-1 ring-emerald-200'
              : 'text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckSquare className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              {t('navPrepare')}
            </div>
            <div className="text-[11px] text-slate-500 truncate">
              {t('navPrepareSub')}
            </div>
          </div>
        </button>

        <button
          id="nav-btn-verify"
          onClick={() => setActiveTab('verify')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
            activeTab === 'verify'
              ? 'bg-amber-50 text-amber-700 font-semibold ring-1 ring-amber-200'
              : 'text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
              {t('navVerify')}
            </div>
            <div className="text-[11px] text-slate-500 truncate">
              {t('navVerifySub')}
            </div>
          </div>
        </button>

        <div className="pt-1.5 pb-1 border-t border-slate-100 my-2" />

        <button
          id="nav-btn-profile"
          onClick={() => setActiveTab('profile')}
          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'profile'
              ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <User className={`w-4 h-4 ${activeTab === 'profile' ? 'text-blue-600' : 'text-slate-500'}`} />
          <span>{t('navProfile')}</span>
        </button>

        <button
          id="nav-btn-documents"
          onClick={() => setActiveTab('documents')}
          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'documents'
              ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <FileText className={`w-4 h-4 ${activeTab === 'documents' ? 'text-blue-600' : 'text-slate-500'}`} />
          <span>{t('navDocuments')}</span>
        </button>

        {/* Applications */}
        <button
          id="nav-btn-applications"
          onClick={() => setActiveTab('applications')}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'applications'
              ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <FolderKanban className={`w-4 h-4 ${activeTab === 'applications' ? 'text-blue-600' : 'text-slate-500'}`} />
            <span>{t('navApplications')}</span>
          </div>
          {applicationsCount > 0 && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {applicationsCount}
            </span>
          )}
        </button>

        {/* Reminders */}
        <button
          id="nav-btn-reminders"
          onClick={() => setActiveTab('reminders')}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'reminders'
              ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <Bell className={`w-4 h-4 ${activeTab === 'reminders' ? 'text-blue-600' : 'text-slate-500'}`} />
            <span>{t('navReminders')}</span>
          </div>
          {remindersCount > 0 && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
              {remindersCount}
            </span>
          )}
        </button>

        {/* Help & Support */}
        <button
          id="nav-btn-help"
          onClick={() => setActiveTab('help')}
          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'help'
              ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <HelpCircle className={`w-4 h-4 ${activeTab === 'help' ? 'text-blue-600' : 'text-slate-500'}`} />
          <span>{t('navHelp')}</span>
        </button>
      </nav>

      {/* Footer: Logout / Switch Profile */}
      <div className="p-3.5 border-t border-slate-100 bg-slate-50/50">
        <button
          id="nav-btn-logout"
          onClick={onResetOnboarding}
          className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
        >
          <LogOut className="w-4 h-4 text-slate-500" />
          <span>{t('navLogout')}</span>
        </button>
      </div>
    </aside>
  );
};
