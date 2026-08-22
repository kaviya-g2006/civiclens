import React, { useState } from 'react';
import {
  FileText,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Eye,
  Plus,
  Trash2,
  ShieldCheck,
  ScanLine,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { CitizenProfile, SupportedDocument, DocumentType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface DocumentsViewProps {
  profile: CitizenProfile;
  onUpdateDocuments: (docs: SupportedDocument[]) => void;
  onNavigateToPrepare: () => void;
}

export const DocumentsView: React.FC<DocumentsViewProps> = ({
  profile,
  onUpdateDocuments,
  onNavigateToPrepare,
}) => {
  const { t } = useLanguage();

  const [selectedDoc, setSelectedDoc] = useState<SupportedDocument | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const docTypesList: { type: DocumentType; label: string }[] = [
    { type: 'aadhaar', label: t('aadhaarCard') },
    { type: 'pan', label: t('panCard') },
    { type: 'voter_id', label: t('voterId') },
    { type: 'ration_card', label: t('rationCard') },
    { type: 'income_cert', label: t('incomeCert') },
    { type: 'land_record', label: t('landRecords') },
    { type: 'student_id', label: t('studentId') },
  ];

  const handleSimulatedUpload = (docType: DocumentType) => {
    setIsUploading(true);
    setTimeout(() => {
      const typeLabel = docTypesList.find((d) => d.type === docType)?.label || 'Document';
      const newDoc: SupportedDocument = {
        id: 'doc-' + Date.now(),
        type: docType,
        name: typeLabel,
        documentNumber: `VER/${Math.floor(1000 + Math.random() * 9000)}`,
        status: 'verified',
        uploadDate: new Date().toISOString().split('T')[0],
        confidenceScore: 98,
        extractedData: {
          name: profile.name,
          dob: profile.dob,
          address: profile.address,
          status: 'Document AI OCR Verified'
        }
      };

      onUpdateDocuments([...profile.documents, newDoc]);
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 2500);
    }, 1000);
  };

  return (
    <div id="civiclens-documents-view" className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>{t('navDocuments')}</span>
        </div>
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
          {t('documentVault')}
        </h1>
        <p className="text-xs text-slate-600">
          {t('documentsSubtitle')}
        </p>
      </div>

      {/* Upload New Document Dropzone */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-dashed border-slate-300 shadow-2xs space-y-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
          <Upload className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-base">
            {t('uploadCitizenDoc')}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
            {t('uploadDocTypesSupported')}
          </p>
        </div>

        {/* Quick Upload Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {docTypesList.map((dt) => (
            <button
              key={dt.type}
              onClick={() => handleSimulatedUpload(dt.type)}
              disabled={isUploading}
              className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-xs font-semibold text-slate-700 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ {dt.label}</span>
            </button>
          ))}
        </div>

        {isUploading && (
          <div className="flex items-center justify-center gap-2 text-xs text-blue-600 font-bold animate-pulse pt-2">
            <ScanLine className="w-4 h-4 animate-spin" />
            <span>{t('analyzingIndicators')}...</span>
          </div>
        )}

        {uploadSuccess && (
          <div className="text-xs text-emerald-700 font-bold bg-emerald-50 py-2 px-4 rounded-xl inline-flex items-center gap-2 border border-emerald-200 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t('docVerifiedSuccess')}</span>
          </div>
        )}
      </div>

      {/* Uploaded Documents Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            {t('verifiedDocuments')} ({profile.documents.length})
          </h2>
          <button
            onClick={onNavigateToPrepare}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>{t('runConsistencyAudit')} →</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{doc.confidenceScore || 98}% {t('verified')}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{doc.name}</h3>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {doc.documentNumber || 'Ref #99104'}
                  </div>
                </div>

                {/* Extracted Fields Summary */}
                {doc.extractedData && (
                  <div className="p-2.5 bg-slate-50 rounded-xl text-xs space-y-1 border border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">
                      {t('extractedMetadata')}
                    </div>
                    {Object.entries(doc.extractedData).slice(0, 2).map(([k, v]) => (
                      <div key={k} className="text-slate-700 truncate">
                        <span className="capitalize text-slate-400 font-medium">{k}: </span>
                        <span className="font-semibold text-slate-900">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">{t('uploaded')}: {doc.uploadDate}</span>
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t('inspectOcr')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspect OCR Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900">{selectedDoc.name} — {t('inspectOcr')}</h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                {t('close')}
              </button>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                {t('extractedMetadata')}
              </div>
              {selectedDoc.extractedData && (
                <div className="space-y-1.5 font-mono">
                  {Object.entries(selectedDoc.extractedData).map(([k, v]) => (
                    <div key={k} className="flex justify-between bg-white p-2 rounded-lg border border-slate-200/60">
                      <span className="text-slate-500 font-semibold">{k}:</span>
                      <span className="text-slate-900 font-bold">{String(v)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl"
              >
                {t('done')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
