import React, { useState, useRef, useEffect } from 'react';
import {
  Globe,
  Users,
  Search,
  Bell,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Check,
  ShieldCheck
} from 'lucide-react';
import { CitizenProfile, CitizenProfileType, LanguageCode } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface TopHeaderProps {
  currentProfile: CitizenProfile;
  onSelectProfileType: (type: CitizenProfileType) => void;
  onOpenHelp: () => void;
  onOpenReminders: () => void;
  onSearchQuery?: (q: string) => void;
  remindersCount: number;
  pageTitle?: string;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentProfile,
  onSelectProfileType,
  onOpenHelp,
  onOpenReminders,
  onSearchQuery,
  remindersCount,
  pageTitle = 'Dashboard'
}) => {
  const { language, setLanguage, languages, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLangObj = languages.find((l) => l.code === language) || languages[0];

  const profileOptions: { type: CitizenProfileType; label: string; name: string; iconBg: string }[] = [
    { type: 'student', label: t('student'), name: 'Kaviya G', iconBg: 'bg-blue-100 text-blue-700' },
    { type: 'farmer', label: t('farmer'), name: 'Ramasamy M', iconBg: 'bg-emerald-100 text-emerald-700' },
    { type: 'senior', label: t('senior'), name: 'Sundaramoorthy K', iconBg: 'bg-purple-100 text-purple-700' }
  ];

  return (
    <header
      id="civiclens-top-header"
      className="sticky top-0 z-20 bg-white border-b border-slate-200/80 px-4 lg:px-8 h-16 flex items-center select-none"
    >
      <div className="flex items-center justify-between gap-4 w-full max-w-7xl mx-auto">
        {/* Left: Page Title */}
        <div className="flex items-center gap-3">
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            {pageTitle}
          </h1>
        </div>

        {/* Right Controls: Language Selector, Notifications Bell & User Profile */}
        <div className="flex items-center gap-3">
          {/* Global Language Selector Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              id="btn-language-selector"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors focus:outline-none"
              title="Change Application Language"
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium">{activeLangObj.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {langMenuOpen && (
              <div
                id="dropdown-language-menu"
                className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  {t('selectLanguage')}
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors ${
                      language === lang.code
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                        {lang.scriptBadge}
                      </span>
                      <div>
                        <div className="font-medium">{lang.name}</div>
                        <div className="text-[10px] text-slate-400">{lang.nativeName}</div>
                      </div>
                    </div>
                    {language === lang.code && <Check className="w-4 h-4 text-blue-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reminders / Notifications Bell with red badge count */}
          <button
            id="btn-header-reminders"
            onClick={onOpenReminders}
            className="relative p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 focus:outline-none transition-colors"
            title="View Reminders & Notifications"
          >
            <Bell className="w-4 h-4" />
            {remindersCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                {remindersCount}
              </span>
            )}
          </button>

          {/* Citizen Profile Avatar & Name Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              id="btn-profile-switcher"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all focus:outline-none"
              title="Citizen Profile"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                {currentProfile.name.charAt(0)}
              </div>
              <span className="hidden md:inline text-xs font-semibold text-slate-800">
                {currentProfile.name}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:block" />
            </button>

            {profileMenuOpen && (
              <div
                id="dropdown-profile-menu"
                className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-900">{currentProfile.name}</p>
                  <p className="text-[11px] text-slate-500">{currentProfile.district}, {currentProfile.state}</p>
                </div>
                <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Switch Persona
                </div>
                {profileOptions.map((opt) => (
                  <button
                    key={opt.type}
                    onClick={() => {
                      onSelectProfileType(opt.type);
                      setProfileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2 text-left text-xs transition-colors ${
                      currentProfile.profileType === opt.type
                        ? 'bg-blue-50 text-blue-800 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${opt.iconBg}`}>
                        {opt.label.charAt(0)}
                      </span>
                      <div>
                        <div className="font-semibold text-slate-900">{opt.label}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{opt.name}</div>
                      </div>
                    </div>
                    {currentProfile.profileType === opt.type && (
                      <Check className="w-4 h-4 text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
