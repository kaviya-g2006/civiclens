import React, { useState } from 'react';
import {
  User,
  ShieldCheck,
  Globe,
  Users,
  Building2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Edit2,
  Save,
  GraduationCap,
  Tractor,
  HeartHandshake
} from 'lucide-react';
import { CitizenProfile, CitizenProfileType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface ProfileViewProps {
  profile: CitizenProfile;
  onUpdateProfile: (updated: CitizenProfile) => void;
  onSwitchPersona: (role: CitizenProfileType) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  onUpdateProfile,
  onSwitchPersona,
}) => {
  const { language, setLanguage, languages, t } = useLanguage();

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(profile.name);
  const [editedPhone, setEditedPhone] = useState(profile.phone);
  const [editedAddress, setEditedAddress] = useState(profile.address);
  const [editedIncome, setEditedIncome] = useState(profile.annualIncome.toString());
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    onUpdateProfile({
      ...profile,
      name: editedName,
      phone: editedPhone,
      address: editedAddress,
      annualIncome: parseInt(editedIncome, 10) || profile.annualIncome
    });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const roleIcons = {
    student: GraduationCap,
    farmer: Tractor,
    senior: HeartHandshake
  };

  const RoleIcon = roleIcons[profile.profileType] || User;

  return (
    <div id="civiclens-profile-view" className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-md shadow-blue-600/20">
            {profile.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900">{profile.name}</h1>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('verified')}</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 capitalize mt-0.5">
              {t('category')}: {t(profile.profileType)} • {profile.district}, {profile.state}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Save className="w-4 h-4" />
              <span>{t('save')}</span>
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              <span>{t('editProfile')}</span>
            </button>
          )}
        </div>
      </div>

      {saveSuccess && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{t('profileSavedSuccess')}</span>
        </div>
      )}

      {/* Switch Demo Persona Box */}
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm">{t('switchPersona')}</h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">Demo Sandbox</span>
        </div>
        <p className="text-xs text-slate-600">
          Switch between pre-configured citizen roles to test eligibility rules, verified schemes, and document consistency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <button
            onClick={() => onSwitchPersona('student')}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              profile.profileType === 'student'
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="font-bold text-xs">{t('student')}</span>
            </div>
            <div className={`text-[11px] mt-1 ${profile.profileType === 'student' ? 'text-blue-100' : 'text-slate-500'}`}>
              Kaviya G (College Student)
            </div>
          </button>

          <button
            onClick={() => onSwitchPersona('farmer')}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              profile.profileType === 'farmer'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Tractor className="w-4 h-4" />
              <span className="font-bold text-xs">{t('farmer')}</span>
            </div>
            <div className={`text-[11px] mt-1 ${profile.profileType === 'farmer' ? 'text-emerald-100' : 'text-slate-500'}`}>
              Ramasamy M (2.5 Acres Landowner)
            </div>
          </button>

          <button
            onClick={() => onSwitchPersona('senior')}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              profile.profileType === 'senior'
                ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" />
              <span className="font-bold text-xs">{t('seniorCitizen')}</span>
            </div>
            <div className={`text-[11px] mt-1 ${profile.profileType === 'senior' ? 'text-purple-100' : 'text-slate-500'}`}>
              Sundaramoorthy K (Age 72)
            </div>
          </button>
        </div>
      </div>

      {/* Main Profile Details Grid */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
          {t('personalDetails')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-xs">
          <div>
            <div className="text-slate-400 font-semibold text-[11px]">{t('name')}</div>
            {isEditing ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="mt-1 w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div className="font-bold text-slate-900 mt-1 text-sm">{profile.name}</div>
            )}
          </div>

          <div>
            <div className="text-slate-400 font-semibold text-[11px]">{t('age')} & {t('gender')}</div>
            <div className="font-bold text-slate-900 mt-1 text-sm">
              {profile.age} Years ({profile.gender})
            </div>
          </div>

          <div>
            <div className="text-slate-400 font-semibold text-[11px]">{t('dob')}</div>
            <div className="font-bold text-slate-900 mt-1 text-sm font-mono">{profile.dob}</div>
          </div>

          <div>
            <div className="text-slate-400 font-semibold text-[11px]">{t('annualIncome')}</div>
            {isEditing ? (
              <input
                type="number"
                value={editedIncome}
                onChange={(e) => setEditedIncome(e.target.value)}
                className="mt-1 w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div className="font-bold text-slate-900 mt-1 text-sm">
                ₹{profile.annualIncome.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          <div>
            <div className="text-slate-400 font-semibold text-[11px]">{t('socialCategory')}</div>
            <div className="font-bold text-slate-900 mt-1 text-sm">{profile.socialCategory}</div>
          </div>

          <div>
            <div className="text-slate-400 font-semibold text-[11px]">{t('phone')}</div>
            {isEditing ? (
              <input
                type="text"
                value={editedPhone}
                onChange={(e) => setEditedPhone(e.target.value)}
                className="mt-1 w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div className="font-bold text-slate-900 mt-1 text-sm font-mono">{profile.phone}</div>
            )}
          </div>

          <div className="sm:col-span-2">
            <div className="text-slate-400 font-semibold text-[11px]">{t('address')}</div>
            {isEditing ? (
              <input
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                className="mt-1 w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div className="font-bold text-slate-900 mt-1 text-sm">
                {profile.address}, {profile.district}, {profile.state} - {profile.pincode}
              </div>
            )}
          </div>
        </div>

        {/* Masked Sensitive Government Identifiers */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Masked Government Identifiers (Data Privacy Protected)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80">
              <div className="text-slate-400 text-[10px] uppercase font-bold">{t('aadhaarCard')} (Masked)</div>
              <div className="font-mono font-bold text-slate-900 mt-0.5">{profile.maskedAadhaar}</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/80">
              <div className="text-slate-400 text-[10px] uppercase font-bold">{t('panCard')} (Masked)</div>
              <div className="font-mono font-bold text-slate-900 mt-0.5">{profile.maskedPan || 'XXXXX8492K'}</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/80">
              <div className="text-slate-400 text-[10px] uppercase font-bold">{t('voterId')}</div>
              <div className="font-mono font-bold text-slate-900 mt-0.5">{profile.maskedVoterId || 'TN/31/12345'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
