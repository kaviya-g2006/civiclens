import React from 'react';
import {
  PhoneCall,
  ShieldAlert,
  HelpCircle,
  X,
  ExternalLink,
  BookOpen,
  Scale,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpSupportModal: React.FC<HelpSupportModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const helplines = [
    {
      number: '1930',
      title: 'National Cyber Crime & Fraud Helpline',
      desc: 'Immediate reporting for fake schemes, OTP harvesting, payment fraud, and WhatsApp impersonation.',
      badge: '24x7 Emergency',
      color: 'bg-rose-50 border-rose-200 text-rose-900',
      iconColor: 'text-rose-600'
    },
    {
      number: '14567',
      title: 'National Elderline (Senior Citizens)',
      desc: 'Free national helpline for elderly welfare, maintenance claims, healthcare assistance, and legal aid.',
      badge: 'Senior Citizens',
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      iconColor: 'text-purple-600'
    },
    {
      number: '1800-180-1551',
      title: 'Kisan Call Centre (Toll Free)',
      desc: 'Expert agricultural queries, PM-Kisan status, PMFBY crop loss claims, and Mandi price dispute support.',
      badge: 'Farmers',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      iconColor: 'text-emerald-600'
    },
    {
      number: '14555',
      title: 'Ayushman Bharat PM-JAY Helpline',
      desc: 'Hospital empanelment assistance, Senior 70+ Golden Card registration, and cashless hospital complaints.',
      badge: 'Healthcare',
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      iconColor: 'text-blue-600'
    },
    {
      number: '1915',
      title: 'National Consumer Helpline',
      desc: 'Legal redressal against prohibited capitation fees, withholding of student marksheets, and service disputes.',
      badge: 'Consumer Rights',
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      iconColor: 'text-amber-600'
    }
  ];

  const faqs = [
    {
      q: 'How does CivicLens assess my scheme eligibility?',
      a: 'CivicLens employs deterministic rule-based algorithms matching your verified age, domicile state, demographic category, and income against official government gazette notifications—eliminating AI hallucination.'
    },
    {
      q: 'Why did the system highlight a consistency review between my documents?',
      a: 'If your name or initials differ across cards (e.g. "Kavya G" on Voter ID vs "Kaviya G" on Aadhaar), government DBT portals may reject your application. CivicLens flags these early so you can apply using the Aadhaar-linked name.'
    },
    {
      q: 'Can I change my preferred language at any time?',
      a: 'Yes! English is set as default when opening CivicLens, and you can switch between Tamil, Hindi, Telugu, Kannada, and Malayalam anytime from the header globe menu.'
    }
  ];

  return (
    <div
      id="civiclens-help-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <PhoneCall className="w-4 h-4" />
            <span>{t('helpSupport')}</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Official Indian Government Hotlines
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Authorized national toll-free support numbers for civic grievances, cyber fraud, and emergency aid.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Helplines List */}
          <div className="space-y-3">
            {helplines.map((hl, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border ${hl.color} flex items-start justify-between gap-4`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white border border-current shadow-2xs">
                      {hl.badge}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900">{hl.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{hl.desc}</p>
                </div>

                <a
                  href={`tel:${hl.number}`}
                  className="px-3.5 py-2 bg-slate-900 text-white hover:bg-black rounded-xl text-xs font-extrabold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{hl.number}</span>
                </a>
              </div>
            ))}
          </div>

          {/* FAQs Section */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900">{faq.q}</div>
                  <div className="text-slate-600 leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
