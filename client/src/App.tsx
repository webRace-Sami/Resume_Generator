import React, { useState, useEffect, useRef } from 'react';
import { ResumeData, ResumeStyle } from './types/resume';
import { SAMPLE_PROFILES, EMPTY_RESUME } from './data/samples';
import { saveResumeToStorage, loadResumeFromStorage, syncResumeWithBackend } from './services/apiService';
import { exportResumeToPDF } from './services/pdfService';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TemplateGallery } from './components/TemplateGallery';
import { ResumeRenderer } from './components/templates/ResumeRenderer';
import { LiveEditorToolbar } from './components/LiveEditorToolbar';
import { ResumeModal } from './components/ResumeModal';
import { Layers, Sparkles, Check, Download, Smartphone, ArrowDown } from 'lucide-react';

export function App() {
  // Initialize resume from storage or first sample profile
  const [resume, setResume] = useState<ResumeData>(() => {
    const saved = loadResumeFromStorage();
    if (saved && saved.personalInfo?.fullName) {
      return saved;
    }
    return SAMPLE_PROFILES[0].data;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadProgressText, setDownloadProgressText] = useState('');
  const [zoomLevel, setZoomLevel] = useState(0.95);
  const [saveToast, setSaveToast] = useState(false);

  const templatesSectionRef = useRef<HTMLDivElement>(null);
  const previewSectionRef = useRef<HTMLDivElement>(null);

  // Auto-save to LocalStorage whenever resume changes
  useEffect(() => {
    saveResumeToStorage(resume);
  }, [resume]);

  // Adjust zoom for mobile screens automatically
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setZoomLevel(0.44); // Scale down nicely for mobile viewports
      } else if (width < 1024) {
        setZoomLevel(0.72);
      } else {
        setZoomLevel(0.95);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save updated resume
  const handleSaveResume = (updated: ResumeData) => {
    setResume(updated);
    saveResumeToStorage(updated);
    syncResumeWithBackend(updated);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  // Change specific styling property (color, font, monochrome, spacing, etc.)
  const handleChangeStyle = (newStyle: Partial<ResumeStyle>) => {
    setResume((prev) => {
      const updated = {
        ...prev,
        style: {
          ...prev.style,
          ...newStyle,
        },
      };
      saveResumeToStorage(updated);
      return updated;
    });
  };

  // Select template
  const handleSelectTemplate = (templateId: string) => {
    setResume((prev) => {
      const updated = { ...prev, templateId };
      saveResumeToStorage(updated);
      return updated;
    });
    // Scroll to preview smoothly
    previewSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load sample profile
  const handleLoadProfile = (profile: ResumeData) => {
    setResume(profile);
    saveResumeToStorage(profile);
    syncResumeWithBackend(profile);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  // Reset to empty
  const handleResetNew = () => {
    setResume(EMPTY_RESUME);
    setIsModalOpen(true);
  };

  // Download PDF Handler
  const handleDownloadPdf = async () => {
    setIsDownloadingPdf(true);
    setDownloadProgressText('Preparing PDF...');

    const filename = `${resume.personalInfo.fullName ? resume.personalInfo.fullName.replace(/\s+/g, '_') : 'Resume'}_CV.pdf`;

    const success = await exportResumeToPDF('resume-document-to-export', {
      filename,
      onProgress: (_prog, msg) => setDownloadProgressText(msg),
    });

    setIsDownloadingPdf(false);
    setDownloadProgressText('');
  };

  const scrollToTemplates = () => {
    templatesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Resume Saved & Updated Successfully!</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onOpenModal={() => setIsModalOpen(true)}
        onLoadProfile={handleLoadProfile}
        onResetNew={handleResetNew}
      />

      {/* Hero CTA Section */}
      <HeroSection
        onOpenGenerateModal={() => setIsModalOpen(true)}
        onScrollToTemplates={scrollToTemplates}
      />

      {/* 10 Templates Selector Gallery Section */}
      <section
        ref={templatesSectionRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-850 no-print"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Choose From 10 Professional CV & Resume Layouts</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select any design below — your data is automatically preserved across all layouts.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="self-start sm:self-auto text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customize Data in Popup</span>
          </button>
        </div>

        <TemplateGallery
          selectedTemplateId={resume.templateId}
          onSelectTemplate={handleSelectTemplate}
          accentColor={resume.style.accentColor}
        />
      </section>

      {/* Live Editor Sticky Toolbar */}
      <div ref={previewSectionRef} className="pt-4 pb-2">
        <LiveEditorToolbar
          resume={resume}
          onChangeStyle={handleChangeStyle}
          onOpenEditModal={() => setIsModalOpen(true)}
          onDownloadPdf={handleDownloadPdf}
          isDownloadingPdf={isDownloadingPdf}
          downloadProgressText={downloadProgressText}
          zoomLevel={zoomLevel}
          onZoomChange={setZoomLevel}
          onSelectTemplate={handleSelectTemplate}
        />
      </div>

      {/* Live Resume Paper Preview Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 py-6 flex flex-col items-center justify-start overflow-x-auto">
        <div
          className="transition-transform duration-200 origin-top flex justify-center w-full"
          style={{
            transform: `scale(${zoomLevel})`,
            marginBottom: zoomLevel < 1 ? `-${(1 - zoomLevel) * 297 * 3.78}px` : '0px',
          }}
        >
          <ResumeRenderer resume={resume} elementId="resume-document-to-export" />
        </div>
      </main>

      {/* Popup Modal Window for Data Entry */}
      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resume={resume}
        onSave={handleSaveResume}
        onDownloadPdfNow={handleDownloadPdf}
      />

      {/* Footer */}
      <footer className="w-full border-t border-slate-850 py-8 px-4 text-center text-xs text-slate-500 space-y-2 no-print bg-slate-950">
        <div className="flex items-center justify-center gap-4 text-slate-400 font-medium">
          <button type="button" onClick={() => setIsModalOpen(true)} className="hover:text-white">
            Generate / Edit Data
          </button>
          <span>•</span>
          <button type="button" onClick={scrollToTemplates} className="hover:text-white">
            10 Templates
          </button>
          <span>•</span>
          <button type="button" onClick={handleDownloadPdf} className="hover:text-white text-cyan-400 font-bold">
            Download PDF
          </button>
        </div>
        <p>Professional MERN + TypeScript + Vite Resume & CV Studio • Web & Android Ready</p>
      </footer>
    </div>
  );
}

export default App;
