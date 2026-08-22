import React, { useState, useEffect } from 'react';
import {
  ActiveTab,
  CitizenProfile,
  CitizenProfileType,
  Scheme,
  EligibilityAssessment,
  SupportedDocument,
  ApplicationRecord,
  ReminderItem
} from './types';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { SCHEMES_DATABASE, LEGAL_RIGHTS_DATABASE } from './data/schemesData';
import { DEMO_PROFILES, DEMO_APPLICATIONS, DEMO_REMINDERS } from './data/demoProfiles';
import { evaluateEligibility } from './services/eligibilityEngine';

import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { DashboardView } from './components/DashboardView';
import { DiscoverView } from './components/DiscoverView';
import { PrepareView } from './components/PrepareView';
import { VerifyView } from './components/VerifyView';
import { DocumentsView } from './components/DocumentsView';
import { ApplicationsView } from './components/ApplicationsView';
import { RemindersView } from './components/RemindersView';
import { ProfileView } from './components/ProfileView';
import { EligibilityModal } from './components/EligibilityModal';
import { OnboardingModal } from './components/OnboardingModal';
import { HelpSupportModal } from './components/HelpSupportModal';

const CivicLensApp: React.FC = () => {
  const { t } = useLanguage();

  // Navigation State
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active Citizen Profile State (Default: Student)
  const [currentProfile, setCurrentProfile] = useState<CitizenProfile>(() => {
    try {
      const saved = localStorage.getItem('civiclens_citizen_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEMO_PROFILES.student;
  });

  // Dynamic applications and reminders keyed to active profile
  const [applications, setApplications] = useState<ApplicationRecord[]>(
    DEMO_APPLICATIONS[currentProfile.profileType] || DEMO_APPLICATIONS.student
  );

  const [reminders, setReminders] = useState<ReminderItem[]>(
    DEMO_REMINDERS[currentProfile.profileType] || DEMO_REMINDERS.student
  );

  // Modals state
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);

  // SEPARATE ELIGIBILITY ASSESSMENT STATE
  const [eligibilityScheme, setEligibilityScheme] = useState<Scheme | null>(null);
  const [eligibilityAssessment, setEligibilityAssessment] = useState<EligibilityAssessment | null>(null);

  // PREPARE FORM TARGET STATE
  const [prepareTargetScheme, setPrepareTargetScheme] = useState<Scheme | null>(null);

  // Synchronize profile switch
  const handleSelectProfileType = (type: CitizenProfileType) => {
    const nextProfile = DEMO_PROFILES[type] || DEMO_PROFILES.student;
    setCurrentProfile(nextProfile);
    setApplications(DEMO_APPLICATIONS[type] || []);
    setReminders(DEMO_REMINDERS[type] || []);
    try {
      localStorage.setItem('civiclens_citizen_profile', JSON.stringify(nextProfile));
    } catch {
      // ignore
    }
  };

  // CHECK ELIGIBILITY ACTION (STRICTLY OPENS ELIGIBILITY MODAL ONLY)
  const handleCheckEligibility = (scheme: Scheme) => {
    const result = evaluateEligibility(scheme, currentProfile);
    setEligibilityScheme(scheme);
    setEligibilityAssessment(result);
  };

  // PREPARE / APPLY ACTION (TRANSITIONS DIRECTLY TO PREPARE VIEW)
  const handlePrepareScheme = (scheme: Scheme) => {
    setPrepareTargetScheme(scheme);
    setActiveTab('prepare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveApplication = (app: ApplicationRecord) => {
    setApplications((prev) => [app, ...prev]);
  };

  const handleAddReminder = (item: ReminderItem) => {
    setReminders((prev) => [item, ...prev]);
  };

  const handleUpdateDocuments = (docs: SupportedDocument[]) => {
    const updated = { ...currentProfile, documents: docs };
    setCurrentProfile(updated);
    try {
      localStorage.setItem('civiclens_citizen_profile', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleUpdateProfile = (updated: CitizenProfile) => {
    setCurrentProfile(updated);
    try {
      localStorage.setItem('civiclens_citizen_profile', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <div id="civiclens-root" className="min-h-screen bg-[#F1F5F9] flex flex-col font-sans text-slate-900">
      <div className="flex flex-1 w-full">
        {/* Desktop Left Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          profileType={currentProfile.profileType}
          onResetOnboarding={() => setIsOnboardingOpen(true)}
          applicationsCount={applications.length}
          remindersCount={reminders.length}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 pb-8">
          {/* Top Bar Header */}
          <TopHeader
            currentProfile={currentProfile}
            onSelectProfileType={handleSelectProfileType}
            onOpenHelp={() => setIsHelpModalOpen(true)}
            onOpenReminders={() => setActiveTab('reminders')}
            onSearchQuery={(q) => {
              setSearchQuery(q);
              if (activeTab !== 'discover' && q.trim()) {
                setActiveTab('discover');
              }
            }}
            remindersCount={reminders.length}
          />

          {/* View Container */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
            {activeTab === 'home' && (
              <DashboardView
                profile={currentProfile}
                schemes={SCHEMES_DATABASE}
                applications={applications}
                reminders={reminders}
                onNavigate={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onCheckEligibility={handleCheckEligibility}
                onPrepareScheme={handlePrepareScheme}
              />
            )}

            {activeTab === 'discover' && (
              <DiscoverView
                schemes={SCHEMES_DATABASE}
                rights={LEGAL_RIGHTS_DATABASE}
                profile={currentProfile}
                onCheckEligibility={handleCheckEligibility}
                onPrepareScheme={handlePrepareScheme}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'prepare' && (
              <PrepareView
                profile={currentProfile}
                schemes={SCHEMES_DATABASE}
                preSelectedScheme={prepareTargetScheme}
                onSaveApplication={handleSaveApplication}
                onNavigateToApplications={() => setActiveTab('applications')}
              />
            )}

            {activeTab === 'verify' && <VerifyView />}

            {activeTab === 'documents' && (
              <DocumentsView
                profile={currentProfile}
                onUpdateDocuments={handleUpdateDocuments}
                onNavigateToPrepare={() => setActiveTab('prepare')}
              />
            )}

            {activeTab === 'applications' && (
              <ApplicationsView
                applications={applications}
                onNavigateToDiscover={() => setActiveTab('discover')}
              />
            )}

            {activeTab === 'reminders' && (
              <RemindersView
                reminders={reminders}
                onNavigate={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onAddReminder={handleAddReminder}
              />
            )}

            {activeTab === 'profile' && (
              <ProfileView
                profile={currentProfile}
                onUpdateProfile={handleUpdateProfile}
                onSwitchPersona={handleSelectProfileType}
              />
            )}

            {activeTab === 'help' && (
              <div className="space-y-4">
                <HelpSupportModal isOpen={true} onClose={() => setActiveTab('home')} />
              </div>
            )}
          </main>
        </div>
      </div>

      {/* DEDICATED SEPARATE ELIGIBILITY ASSESSMENT MODAL */}
      <EligibilityModal
        isOpen={Boolean(eligibilityScheme && eligibilityAssessment)}
        onClose={() => {
          setEligibilityScheme(null);
          setEligibilityAssessment(null);
        }}
        scheme={eligibilityScheme}
        assessment={eligibilityAssessment}
        onProceedToPrepare={(sch) => {
          handlePrepareScheme(sch);
        }}
      />

      {/* ONBOARDING / PROFILE CREATION MODAL */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onComplete={(newProfile) => {
          setCurrentProfile(newProfile);
          setApplications(DEMO_APPLICATIONS[newProfile.profileType] || []);
          setReminders(DEMO_REMINDERS[newProfile.profileType] || []);
          setIsOnboardingOpen(false);
          setActiveTab('home');
        }}
      />

      {/* HELP & HOTLINES MODAL */}
      {isHelpModalOpen && (
        <HelpSupportModal isOpen={true} onClose={() => setIsHelpModalOpen(false)} />
      )}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <CivicLensApp />
    </LanguageProvider>
  );
}
