import React from 'react';
import { Sparkles, FileDown, ShieldCheck, Palette, Layers, Smartphone } from 'lucide-react';

interface HeroSectionProps {
  onOpenGenerateModal: () => void;
  onScrollToTemplates: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenGenerateModal,
  onScrollToTemplates,
}) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 text-center no-print">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Feature Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-750 text-xs font-semibold text-cyan-300 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Professional ATS-Engineered Resume & CV Studio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-400 font-normal">Web & Android</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Create a Winning <span className="text-gradient">Resume or CV</span> in Minutes
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
          Input your experience, choose from <strong>15 industry & executive layouts</strong>, customize colors or switch to pure monochrome, and download a pixel-perfect <strong>PDF</strong> instantly.
        </p>

        {/* Giant Main Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onOpenGenerateModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Sparkles className="w-6 h-6 fill-slate-950 group-hover:rotate-12 transition-transform" />
            <span>✨ Generate Resume / CV Now</span>
          </button>

          <button
            type="button"
            onClick={onScrollToTemplates}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-750 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 hover:border-slate-600 transition flex items-center justify-center gap-2"
          >
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Browse 15 Templates</span>
          </button>
        </div>

        {/* Key Feature Badges */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs text-slate-300">
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <Layers className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="font-semibold">15 Pro Templates</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <Palette className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="font-semibold">Colors & Monochrome</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <FileDown className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold">High-Res Vector PDF</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-semibold">100% ATS Optimized</span>
          </div>
        </div>
      </div>
    </div>
  );
};
