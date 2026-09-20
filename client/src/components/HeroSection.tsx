import React from 'react';
import { Sparkles, FileDown, ShieldCheck, Palette, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onOpenGenerateModal: () => void;
  onScrollToTemplates: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenGenerateModal,
  onScrollToTemplates,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative overflow-hidden pt-6 sm:pt-8 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center no-print">
      {/* Background glow highlights */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] rounded-full pointer-events-none -z-10 ${
          isDark
            ? 'bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15'
            : 'bg-gradient-to-tr from-cyan-400/25 via-sky-300/20 to-indigo-300/20'
        }`}
      />

      <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
        {/* Top Feature Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm transition ${
            isDark
              ? 'bg-slate-800/80 border border-slate-750 text-cyan-300'
              : 'bg-white/90 border border-slate-200 text-cyan-700 shadow-slate-200/50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          <span>Professional ATS-Engineered Resume & CV Studio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Web & Android</span>
        </div>

        {/* Hero Title */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Create a Winning{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Resume or CV
          </span>{' '}
          in Minutes
        </h1>

        {/* Subtitle */}
        <p
          className={`max-w-2xl mx-auto text-sm sm:text-base leading-relaxed transition-colors ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Input your experience, choose from <strong>20 colorful, modern & executive layouts</strong>, customize colors or switch to pure monochrome, and download a pixel-perfect <strong>PDF</strong> instantly.
        </p>

        {/* Giant Main Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onOpenGenerateModal}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
            <span>✨ Generate Resume / CV Now</span>
          </button>

          <button
            type="button"
            onClick={onScrollToTemplates}
            className={`w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base border transition flex items-center justify-center gap-2 ${
              isDark
                ? 'bg-slate-800/90 hover:bg-slate-750 text-slate-200 border-slate-700 hover:border-slate-600'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 hover:border-slate-400 shadow-sm'
            }`}
          >
            <Layers className="w-5 h-5 text-cyan-500" />
            <span>Browse 20 Templates</span>
          </button>
        </div>

        {/* Key Feature Badges */}
        <div
          className={`pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto text-xs ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          <div
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border transition ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <Layers className="w-4 h-4 text-sky-500 shrink-0" />
            <span className="font-semibold">20 Pro Templates</span>
          </div>


          <div
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border transition ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <Palette className="w-4 h-4 text-purple-500 shrink-0" />
            <span className="font-semibold">Colors & Monochrome</span>
          </div>

          <div
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border transition ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <FileDown className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="font-semibold">High-Res Vector PDF</span>
          </div>

          <div
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border transition ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0" />
            <span className="font-semibold">100% ATS Optimized</span>
          </div>
        </div>
      </div>
    </div>
  );
};
