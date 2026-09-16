import React, { useState } from 'react';
import { SAMPLE_PROFILES } from '../data/samples';
import { ResumeData } from '../types/resume';
import {
  FileText,
  Sparkles,
  Smartphone,
  PlusCircle,
  FolderOpen,
  Check,
  ChevronDown,
} from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
  onLoadProfile: (profile: ResumeData) => void;
  onResetNew: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onLoadProfile, onResetNew }) => {
  const [showSamplesDropdown, setShowSamplesDropdown] = useState(false);
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  return (
    <>
      <nav className="w-full bg-slate-900/80 border-b border-slate-800/80 backdrop-blur-xl sticky top-0 z-30 px-4 sm:px-8 py-3.5 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <FileText className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white">
                  Resume<span className="text-cyan-400">Craft</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  Web & Android
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Professional ATS CV & Resume Generator
              </p>
            </div>
          </div>

          {/* Center / Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Android / Mobile App Info Button */}
            <button
              type="button"
              onClick={() => setShowAndroidModal(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-300 text-xs font-semibold border border-slate-700 transition"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Android Ready</span>
            </button>

            {/* Load Sample Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSamplesDropdown(!showSamplesDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700 transition"
              >
                <FolderOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Sample Profiles</span>
                <span className="sm:hidden">Samples</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showSamplesDropdown && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95">
                  <div className="text-[10px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                    Instant Load Profile
                  </div>
                  {SAMPLE_PROFILES.map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        onLoadProfile(sample.data);
                        setShowSamplesDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800 text-xs flex items-center gap-2 text-slate-200 transition"
                    >
                      <span className="text-base">{sample.icon}</span>
                      <div className="truncate">
                        <div className="font-semibold text-white truncate">{sample.label}</div>
                        <div className="text-[10px] text-slate-400 truncate">{sample.role}</div>
                      </div>
                    </button>
                  ))}

                  <div className="border-t border-slate-800 mt-1 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        onResetNew();
                        setShowSamplesDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800 text-xs text-red-400 flex items-center gap-2 font-medium"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Start Clean Blank Resume</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Big Build Resume Button */}
            <button
              type="button"
              onClick={onOpenModal}
              className="px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Generate / Edit Data</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Android & Mobile Info Modal */}
      {showAndroidModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-750 rounded-2xl max-w-md w-full p-6 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Android & Mobile Ready</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAndroidModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              This application is configured with <strong>Capacitor</strong> and <strong>PWA Manifest</strong> for native Android bundling and instant mobile home screen installation.
            </p>

            <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-400 mb-4">
              <p className="text-cyan-400 font-bold font-sans">Android Build Steps (Capacitor):</p>
              <p className="text-emerald-400">1. npm run build</p>
              <p className="text-emerald-400">2. npx cap add android</p>
              <p className="text-emerald-400">3. npx cap open android</p>
            </div>

            <div className="space-y-2 text-xs text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Touch-optimized mobile drawer & modals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>A4 scale auto-fit on mobile screens</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Instant offline local storage auto-save</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAndroidModal(false)}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md"
            >
              Awesome, Got It!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
