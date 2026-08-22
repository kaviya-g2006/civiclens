import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  Send,
  ExternalLink,
  ShieldCheck,
  Info,
  HelpCircle,
  FileSearch,
  Check
} from 'lucide-react';
import { VerifyAnalysisResult, ClaimVerdict } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { analyzeClaimWithAI } from '../services/verifyService';
import { getLocalizedSampleClaims, LocalizedSampleClaim } from '../data/localizedData';

export const VerifyView: React.FC = () => {
  const { t, language } = useLanguage();

  const [inputClaim, setInputClaim] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<VerifyAnalysisResult | null>(null);
  const [history, setHistory] = useState<VerifyAnalysisResult[]>([]);

  const sampleClaims = getLocalizedSampleClaims(language);

  const handleRunAnalysis = async (textToAnalyze?: string) => {
    const text = textToAnalyze || inputClaim;
    if (!text.trim()) return;

    setIsAnalyzing(true);
    try {
      const result = await analyzeClaimWithAI(text, language);
      setAnalysisResult(result);
      setHistory((prev) => [result, ...prev.filter((h) => h.id !== result.id)]);
      if (textToAnalyze) {
        setInputClaim(textToAnalyze);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSelectSample = (sample: LocalizedSampleClaim) => {
    setInputClaim(sample.queryText);
    handleRunAnalysis(sample.queryText);
  };

  const verdictConfig: Record<
    ClaimVerdict,
    {
      label: string;
      color: string;
      badgeBg: string;
      icon: React.FC<{ className?: string }>;
      titleColor: string;
    }
  > = {
    verified: {
      label: t('verdictVerified'),
      color: 'bg-emerald-500',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      icon: CheckCircle2,
      titleColor: 'text-emerald-900',
    },
    unverified: {
      label: t('verdictUnverified'),
      color: 'bg-amber-500',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      icon: AlertTriangle,
      titleColor: 'text-amber-900',
    },
    fraudulent: {
      label: t('verdictFraudulent'),
      color: 'bg-rose-500',
      badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
      icon: XCircle,
      titleColor: 'text-rose-900',
    },
  };

  return (
    <div id="civiclens-verify-view" className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>{t('navVerify')}</span>
        </div>
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
          {t('verifyPillarTitle')}
        </h1>
        <p className="text-xs text-slate-600 max-w-3xl">
          {t('verifyPillarDesc')}
        </p>
      </div>

      {/* Interactive Verification Input Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
          {t('enterClaimToVerify')}
        </label>

        <div className="relative">
          <textarea
            id="input-verify-claim-text"
            rows={4}
            placeholder={t('verifyPlaceholder')}
            value={inputClaim}
            onChange={(e) => setInputClaim(e.target.value)}
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('crossRefGov')}</span>
          </div>

          <button
            id="btn-run-verify-analysis"
            onClick={() => handleRunAnalysis()}
            disabled={isAnalyzing || !inputClaim.trim()}
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>{t('analyzingIndicators')}</span>
              </>
            ) : (
              <>
                <FileSearch className="w-4 h-4" />
                <span>{t('verifyWithAI')}</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Sample Test Prompts */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {t('quickTestSamples')}
          </div>
          <div className="flex flex-wrap gap-2">
            {sampleClaims.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleSelectSample(sample)}
                className="text-xs px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-50 hover:text-amber-900 border border-slate-200 hover:border-amber-200 text-slate-700 transition-all font-medium flex items-center gap-1.5"
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    sample.expectedVerdict === 'fraudulent'
                      ? 'bg-rose-500'
                      : sample.expectedVerdict === 'verified'
                      ? 'bg-emerald-500'
                      : 'bg-amber-500'
                  }`}
                />
                <span>{sample.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ANALYSIS RESULT CARD */}
      {analysisResult && (
        <div
          id="civiclens-verification-result"
          className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Verdict Banner */}
          {(() => {
            const config = verdictConfig[analysisResult.verdict];
            const VerdictIcon = config.icon;
            return (
              <div
                className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  analysisResult.verdict === 'fraudulent'
                    ? 'bg-rose-50/70 border-rose-200'
                    : analysisResult.verdict === 'verified'
                    ? 'bg-emerald-50/70 border-emerald-200'
                    : 'bg-amber-50/70 border-amber-200'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white shadow-xs">
                    <VerdictIcon
                      className={`w-7 h-7 ${
                        analysisResult.verdict === 'fraudulent'
                          ? 'text-rose-600'
                          : analysisResult.verdict === 'verified'
                          ? 'text-emerald-600'
                          : 'text-amber-600'
                      }`}
                    />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full border ${config.badgeBg}`}
                    >
                      {config.label}
                    </span>
                    <h3 className={`text-base font-bold mt-2 ${config.titleColor}`}>
                      {analysisResult.summary}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200/60">
                  <div className="text-[11px] text-slate-500 font-semibold">{t('confidenceScore')}</div>
                  <div className="text-xl font-extrabold text-slate-900">
                    {analysisResult.confidence}%
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Red Flag Risks Detected */}
          {analysisResult.detectedRisks && analysisResult.detectedRisks.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>{t('suspiciousRedFlags')}</span>
              </h4>
              <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-200 space-y-2">
                {analysisResult.detectedRisks.map((risk, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-rose-900 font-medium">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safe Indicators (if any) */}
          {analysisResult.safeIndicators && analysisResult.safeIndicators.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t('legitimateTrustFactors')}</span>
              </h4>
              <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200 space-y-2">
                {analysisResult.safeIndicators.map((safe, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-emerald-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{safe}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Official Source Link */}
          {analysisResult.officialSource && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {t('authenticOfficialSource')}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-slate-900">
                    {analysisResult.officialSource.name}
                  </div>
                  <div className="text-slate-600 text-[11px] mt-0.5">
                    {analysisResult.officialSource.description}
                  </div>
                </div>
                <a
                  href={analysisResult.officialSource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-2xs"
                >
                  <span>{t('visitOfficialPortal')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Safety Recommendations */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
              {t('citizenAdvisory')}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {analysisResult.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
