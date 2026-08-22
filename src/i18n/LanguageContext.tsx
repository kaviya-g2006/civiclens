import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode } from '../types';
import { translations, TranslationDictionary } from './translations';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  scriptBadge: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', scriptBadge: 'EN' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', scriptBadge: 'தமிழ்' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', scriptBadge: 'हिंदी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', scriptBadge: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', scriptBadge: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', scriptBadge: 'മലയാളം' },
];

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: keyof TranslationDictionary | string, defaultFallback?: string) => any;
  currentTranslations: TranslationDictionary;
  languages: LanguageOption[];
}

const ALIAS_MAP: Record<string, keyof TranslationDictionary> = {
  checkEligibility: 'checkEligibilityBtn',
  prepareApply: 'prepareApplyBtn',
  greeting: 'greetingPrefix',
  catEducation: 'education',
  catAgriculture: 'agriculture',
  catHealthcare: 'healthcare',
  catPension: 'pension',
  catFinancial: 'financial',
  selectLanguage: 'chooseLanguage',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'civiclens_language_preference';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Always default to English on first load
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && ['en', 'ta', 'hi', 'te', 'kn', 'ml'].includes(saved)) {
        return saved as LanguageCode;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const currentTranslations = translations[language] || translations.en;

  const t = (key: keyof TranslationDictionary | string, defaultFallback?: string): any => {
    const resolvedKey = (ALIAS_MAP[key] || key) as keyof TranslationDictionary;
    if (currentTranslations[resolvedKey] !== undefined) {
      return currentTranslations[resolvedKey];
    }
    if (translations.en[resolvedKey] !== undefined) {
      return translations.en[resolvedKey];
    }
    return defaultFallback || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentTranslations,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
