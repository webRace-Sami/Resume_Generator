import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ResumeData, ResumeStyle } from './types/resume';
import { SAMPLE_PROFILES, EMPTY_RESUME } from './data/samples';
import { saveResumeToStorage, loadResumeFromStorage, syncResumeWithBackend } from './services/apiService';
import { exportResumeToPDF } from './services/pdfService';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TemplateGallery } from './components/TemplateGallery';
import { ResumeRenderer } from './components/templates/ResumeRenderer';
import { LiveEditorToolbar } from './components/LiveEditorToolbar';
import { ResumeModal } from './components/ResumeModal';
import { DonationModal } from './components/DonationModal';
import { Layers, Sparkles, Check } from 'lucide-react';

export function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Initialize resume from storage or first sample profile
  const [resume, setResume] = useState<ResumeData>(() => {
    const saved = loadResumeFromStorage();
    if (saved && saved.personalInfo?.fullName) {
      return saved;
    }
    return SAMPLE_PROFILES[0].data;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadProgressText, setDownloadProgressText] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [saveToast, setSaveToast] = useState(false);

  const templatesSectionRef = useRef<HTMLDivElement>(null);
  const previewSectionRef = useRef<HTMLDivElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Auto-fit function calculating optimal zoom based on device screen width
  const calculateOptimalZoom = useCallback(() => {
    if (typeof window === 'undefined') return 1.0;
    const containerWidth = previewContainerRef.current?.clientWidth || window.innerWidth;
    // Standard A4 width is 794px (210mm)
    const availableWidth = containerWidth - 32; // subtracting horizontal padding
    const fitScale = Math.min(1.0, availableWidth / 794);
    return Math.max(0.35, parseFloat(fitScale.toFixed(2)));
  }, []);

  // Fit to screen handler
  const handleFitToScreen = () => {
    const optimal = calculateOptimalZoom();
    setZoomLevel(optimal);
  };

  // Adjust zoom for devices on initial load & resize
  useEffect(() => {
    const handleResize = () => {
      const optimal = calculateOptimalZoom();
      setZoomLevel(optimal);
    };

    // Initial calculation
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateOptimalZoom]);

  // Auto-save to LocalStorage whenever resume changes
  useEffect(() => {
    saveResumeToStorage(resume);
  }, [resume]);

  // Save updated resume
  const handleSaveResume = (updated: ResumeData) => {
    setResume(updated);
    saveResumeToStorage(updated);
    syncResumeWithBackend(updated);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  // Quick photo update handler
  const handleUpdatePhoto = (photoUrl: string) => {
    setResume((prev) => {
      const updated: ResumeData = {
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          photoUrl,
        },
        style: {
          ...prev.style,
          showPhoto: true,
        },
      };
      saveResumeToStorage(updated);
      syncResumeWithBackend(updated);
      return updated;
    });
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

    await exportResumeToPDF('resume-document-to-export', {
      filename,
      onProgress: (_prog, msg) => setDownloadProgressText(msg),
    });

    setIsDownloadingPdf(false);
    setDownloadProgressText('');
  };

  const scrollToTemplates = () => {
    templatesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Height compensation for scaled A4 preview (A4 height ~1123px)
  const scaledHeight = 1123 * zoomLevel;

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      } flex flex-col font-sans selection:bg-cyan-500 selection:text-white w-full overflow-x-hidden transition-colors duration-200`}
    >
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
        onOpenDonationModal={() => setIsDonationModalOpen(true)}
      />

      {/* Hero CTA Section */}
      <HeroSection
        onOpenGenerateModal={() => setIsModalOpen(true)}
        onScrollToTemplates={scrollToTemplates}
      />

      {/* 15 Templates Selector Gallery Section */}
      <section
        ref={templatesSectionRef}
        className={`w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 border-t no-print transition-colors ${
          isDark ? 'border-slate-850' : 'border-slate-200'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
          <div>
            <h2
              className={`text-lg sm:text-2xl font-bold flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              <Layers className="w-5 h-5 text-cyan-500" />
              <span>Choose From 20 Professional CV & Resume Layouts</span>
            </h2>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Select any design below — your information stays completely intact across all templates.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="self-start sm:self-auto text-xs text-cyan-500 hover:text-cyan-400 font-semibold flex items-center gap-1.5"
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
          onFitToScreen={handleFitToScreen}
          onSelectTemplate={handleSelectTemplate}
          onUpdatePhoto={handleUpdatePhoto}
        />
      </div>

      {/* Responsive Live Resume Paper Container */}
      <main
        ref={previewContainerRef}
        className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 py-4 flex flex-col items-center justify-start overflow-hidden"
      >
        <div
          className="w-full flex justify-center items-start overflow-hidden"
          style={{
            minHeight: `${scaledHeight + 40}px`,
          }}
        >
          <div
            className="transition-transform duration-200 origin-top flex justify-center shrink-0"
            style={{
              transform: `scale(${zoomLevel})`,
              width: '794px', // 210mm in standard pixels
            }}
          >
            <ResumeRenderer resume={resume} elementId="resume-document-to-export" />
          </div>
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

      {/* Donation Popup Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      {/* Footer */}
      <footer
        className={`w-full border-t py-8 px-4 text-center text-xs space-y-3.5 no-print transition-colors ${
          isDark ? 'bg-slate-950 border-slate-850 text-slate-500' : 'bg-white border-slate-200 text-slate-600'
        }`}
      >
        <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-medium ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          <button type="button" onClick={() => setIsModalOpen(true)} className="hover:text-cyan-500 transition">
            Generate / Edit Data
          </button>
          <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
          <button type="button" onClick={scrollToTemplates} className="hover:text-cyan-500 transition">
            20 Pro Templates
          </button>
          <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
          <button type="button" onClick={handleDownloadPdf} className="hover:text-cyan-400 text-cyan-500 font-bold transition">
            Download PDF
          </button>

          <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
          <button type="button" onClick={() => setIsDonationModalOpen(true)} className="hover:text-emerald-500 text-emerald-500 font-bold transition flex items-center gap-1">
            <span>Support & Donate</span>
          </button>
        </div>

        <div className="pt-1 flex flex-col items-center justify-center gap-1.5">
          <p className={`text-xs font-semibold flex items-center justify-center gap-1.5 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <span>Engineered & Crafted with Precision by</span>
            <span className="text-cyan-500 font-bold tracking-wide">WebRace Co.</span>
          </p>
          <p className={`text-[11px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} <strong className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>WebRace Co.</strong> All Rights Reserved. • Professional Resume & CV Studio
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

