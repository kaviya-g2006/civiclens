import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Clock,
  Calendar,
  FileText,
  Scale,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Scheme, LegalRight, CitizenProfile, SchemeCategory } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedScheme, getLocalizedLegalRight } from '../data/localizedData';

interface DiscoverViewProps {
  schemes: Scheme[];
  rights: LegalRight[];
  profile: CitizenProfile;
  onCheckEligibility: (scheme: Scheme) => void;
  onPrepareScheme: (scheme: Scheme) => void;
  searchQuery?: string;
}

export const DiscoverView: React.FC<DiscoverViewProps> = ({
  schemes,
  rights,
  profile,
  onCheckEligibility,
  onPrepareScheme,
  searchQuery = '',
}) => {
  const { language, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'schemes' | 'rights'>('schemes');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'central' | 'state'>('all');
  const [filterMyProfileOnly, setFilterMyProfileOnly] = useState<boolean>(true);
  const [localSearch, setLocalSearch] = useState<string>(searchQuery);

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t('allCategories') },
    { id: 'education', label: t('catEducation') },
    { id: 'agriculture', label: t('catAgriculture') },
    { id: 'healthcare', label: t('catHealthcare') },
    { id: 'pension', label: t('catPension') },
    { id: 'financial', label: t('catFinancial') },
  ];

  // Localize all schemes dynamically
  const localizedSchemes = useMemo(() => {
    return schemes.map((s) => getLocalizedScheme(s, language));
  }, [schemes, language]);

  // Filter schemes
  const filteredSchemes = useMemo(() => {
    return localizedSchemes.filter((s) => {
      // Category filter
      if (selectedCategory !== 'all' && s.category !== selectedCategory) {
        return false;
      }
      // Central / State filter
      if (selectedLevel !== 'all' && s.centralOrState !== selectedLevel) {
        return false;
      }
      // Profile filter
      if (filterMyProfileOnly && !s.profileTypes.includes(profile.profileType)) {
        return false;
      }
      // Search query
      if (localSearch.trim()) {
        const q = localSearch.toLowerCase();
        const matchesName = s.name.toLowerCase().includes(q);
        const matchesDesc = s.shortDescription.toLowerCase().includes(q) || s.fullDescription.toLowerCase().includes(q);
        const matchesDept = s.department.toLowerCase().includes(q);
        const matchesTags = s.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesDept && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [localizedSchemes, selectedCategory, selectedLevel, filterMyProfileOnly, localSearch, profile.profileType]);

  // Filter rights
  const filteredRights = useMemo(() => {
    const localizedRights = rights.map((r) => getLocalizedLegalRight(r, language));
    return localizedRights.filter((r) => {
      if (filterMyProfileOnly && !r.appliesTo.includes(profile.profileType)) {
        return false;
      }
      if (localSearch.trim()) {
        const q = localSearch.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.actOrBasis.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [rights, language, filterMyProfileOnly, localSearch, profile.profileType]);

  return (
    <div id="civiclens-discover-view" className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <Search className="w-4 h-4" />
              <span>{t('navDiscover')}</span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1">
              {t('schemesForYou')} & {t('citizenLegalRights')}
            </h1>
            <p className="text-xs text-slate-600 mt-0.5">
              {t('discoverPillarDesc')}
            </p>
          </div>

          {/* Sub Tab Switcher: Schemes vs Citizen Rights */}
          <div className="flex bg-slate-100 p-1 rounded-2xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('schemes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'schemes'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('publicSchemes')} ({schemes.length})
            </button>
            <button
              onClick={() => setActiveTab('rights')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'rights'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('citizenLegalRights')} ({rights.length})
            </button>
          </div>
        </div>

        {/* Search Bar & Profile Filter Toggle */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <label className="flex items-center gap-2.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl cursor-pointer text-xs font-semibold text-slate-700 select-none shrink-0">
            <input
              type="checkbox"
              checked={filterMyProfileOnly}
              onChange={(e) => setFilterMyProfileOnly(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
            />
            <span>{t('matchedToProfile')} ({t(profile.profileType)})</span>
          </label>
        </div>

        {/* Category Pills (When on Schemes tab) */}
        {activeTab === 'schemes' && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Section: Schemes List */}
      {activeTab === 'schemes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
            <span>{t('showing')} {filteredSchemes.length} {t('verifiedSchemes')}</span>
            <span>{t('lastUpdated')}: 2026</span>
          </div>

          {filteredSchemes.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-3xl border border-slate-200 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-700 text-base">{t('noSchemesFound')}</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {t('tryResetFilters')}
              </p>
              <button
                onClick={() => {
                  setLocalSearch('');
                  setSelectedCategory('all');
                  setFilterMyProfileOnly(false);
                }}
                className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl hover:bg-blue-100 transition-colors"
              >
                {t('resetFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  id={`scheme-card-${scheme.id}`}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Card Badges */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wide">
                          {t(scheme.category) || scheme.category}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {scheme.centralOrState === 'central' ? t('centralGovt') : `${t('state')}: ${scheme.state}`}
                        </span>
                      </div>

                      {scheme.deadline && (
                        <div className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <Calendar className="w-3 h-3" />
                          <span>{t('deadline')}: {scheme.deadline}</span>
                        </div>
                      )}
                    </div>

                    {/* Title & Department */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {scheme.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{scheme.department}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {scheme.shortDescription}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {t('keyBenefits')}
                      </div>
                      {scheme.benefits.slice(0, 2).map((ben, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{ben}</span>
                        </div>
                      ))}
                    </div>

                    {/* Required Documents Tags */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">
                        {t('requiredDocs')}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {scheme.requiredDocuments.slice(0, 4).map((doc, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                          >
                            {doc}
                          </span>
                        ))}
                        {scheme.requiredDocuments.length > 4 && (
                          <span className="text-[10px] text-slate-400 px-1 py-0.5">
                            +{scheme.requiredDocuments.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Official Link */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{t('estProcessing')}: {scheme.estimatedProcessingTime}</span>
                      </div>

                      <a
                        href={scheme.officialPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline"
                      >
                        <span>{t('officialPortal')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* DUAL ACTION BUTTONS */}
                    <div className="flex items-center gap-2">
                      <button
                        id={`btn-discover-check-${scheme.id}`}
                        onClick={() => onCheckEligibility(scheme)}
                        className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors text-center"
                      >
                        {t('checkEligibility')}
                      </button>

                      <button
                        id={`btn-discover-prepare-${scheme.id}`}
                        onClick={() => onPrepareScheme(scheme)}
                        className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors text-center flex items-center justify-center gap-1 shadow-xs"
                      >
                        <span>{t('prepareApply')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Content Section: Legal Rights List */}
      {activeTab === 'rights' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
            <span>{t('showing')} {filteredRights.length} {t('citizenLegalRights')}</span>
            <span className="flex items-center gap-1 text-blue-600 font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>{t('legallyProtected')}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredRights.map((right) => (
              <div
                key={right.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <Scale className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{right.title}</h3>
                      <div className="text-[11px] font-semibold text-purple-700">
                        {t('statutoryBasis')}: {right.actOrBasis}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {right.description}
                  </p>

                  {/* Key Entitlements */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {t('protectedEntitlements')}
                    </div>
                    {right.keyEntitlements.map((ent, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                        <span>{ent}</span>
                      </div>
                    ))}
                  </div>

                  {/* How to Exercise */}
                  <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 text-xs text-purple-950">
                    <span className="font-bold">{t('howToExercise')}: </span>
                    <span>{right.howToExercise}</span>
                  </div>
                </div>

                {right.grievancePortal && (
                  <div className="mt-5 pt-4 border-t border-slate-100 flex justify-end">
                    <a
                      href={right.grievancePortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 hover:underline"
                    >
                      <span>{t('officialGrievancePortal')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
