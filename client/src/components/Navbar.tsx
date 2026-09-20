import React, { useState } from 'react';
import { SAMPLE_PROFILES } from '../data/samples';
import { ResumeData } from '../types/resume';
import { useTheme } from '../context/ThemeContext';
import {
  FileText,
  Sparkles,
  Smartphone,
  PlusCircle,
  FolderOpen,
  ChevronDown,
  Sun,
  Moon,
  Heart,
} from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
  onLoadProfile: (profile: ResumeData) => void;
  onResetNew: () => void;
  onOpenDonationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenModal,
  onLoadProfile,
  onResetNew,
  onOpenDonationModal,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [showSamplesDropdown, setShowSamplesDropdown] = useState(false);
  const [showAndroidModal, setShowAndroidModal] = useState(false);
  const isDark = theme === 'dark';

  return (
    <>
      <nav
        className={`w-full border-b backdrop-blur-xl sticky top-0 z-30 px-2.5 sm:px-6 lg:px-8 py-2 sm:py-3 no-print transition-colors ${
          isDark
            ? 'bg-slate-900/90 border-slate-800/80 text-white'
            : 'bg-white/90 border-slate-200 text-slate-900 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/25 shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`font-extrabold text-sm sm:text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Resume<span className="text-cyan-500">Craft</span>
                </span>
                {/* Web & Android Badge: Hidden on mobile (Pixel 7/8), visible only on md+ screens */}
                <span className="hidden md:inline-flex text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-500 border border-cyan-500/30">
                  Web & Android
                </span>
              </div>
              <p className={`text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'} hidden lg:block`}>
                Professional ATS CV & Resume Generator
              </p>
            </div>
          </div>

          {/* Right Actions Bar - Spaced and organized cleanly for Pixel 7/8 */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Day and Night Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              title={isDark ? 'Switch to Day Mode (Light)' : 'Switch to Night Mode (Dark)'}
              className={`w-8 h-8 sm:w-auto sm:px-2.5 sm:py-1.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition shrink-0 ${
                isDark
                  ? 'bg-slate-800/90 hover:bg-slate-750 text-amber-400 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-indigo-600 border-slate-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="text-[11px] hidden xl:inline">{isDark ? 'Day' : 'Night'}</span>
            </button>

            {/* Donation / Support Button */}
            <button
              type="button"
              onClick={onOpenDonationModal}
              title="Support & Donate"
              className={`flex items-center justify-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition shrink-0 ${
                isDark
                  ? 'bg-emerald-950/50 hover:bg-emerald-900/70 text-emerald-300 border-emerald-800/70 shadow-sm shadow-emerald-950/40'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300 shadow-sm'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span className="font-bold text-[11px] sm:text-xs">Donate</span>
            </button>

            {/* Android / Mobile App Info Button (Desktop / Tablet only) */}
            <button
              type="button"
              onClick={() => setShowAndroidModal(true)}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition shrink-0 ${
                isDark
                  ? 'bg-slate-800/90 hover:bg-slate-750 text-slate-300 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden lg:inline">Android Ready</span>
            </button>

            {/* Load Sample Dropdown - Extra prominent on Pixel 7/8 and all mobile screens */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSamplesDropdown(!showSamplesDropdown)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl text-xs font-bold border transition shrink-0 shadow-xs ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-750 text-slate-100 border-cyan-500/40'
                    : 'bg-cyan-50/80 hover:bg-cyan-100 text-slate-900 border-cyan-400/50'
                }`}
              >
                {/* Prominent High-Visibility FolderOpen Icon */}
                <div className="w-5 h-5 rounded-md bg-cyan-500 text-slate-950 flex items-center justify-center shadow-xs shrink-0">
                  <FolderOpen className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="hidden sm:inline text-xs">Samples</span>
                <span className="sm:hidden text-[11px]">Samples</span>
                <ChevronDown className="w-3 h-3 text-cyan-500 stroke-[2.5]" />
              </button>

              {showSamplesDropdown && (
                <div
                  className={`absolute right-0 top-full mt-2 w-72 rounded-xl p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 border ${
                    isDark
                      ? 'bg-slate-900 border-slate-750 text-slate-100'
                      : 'bg-white border-slate-200 text-slate-800 shadow-slate-300'
                  }`}
                >
                  <div className={`text-[10px] font-bold px-3 py-1 uppercase tracking-wider flex items-center justify-between ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <span>Instant Load Profile</span>
                    <span className="text-cyan-500 font-bold">1-Click</span>
                  </div>

                  <div className="max-h-80 overflow-y-auto scrollbar-none space-y-0.5">
                    {SAMPLE_PROFILES.map((sample, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          onLoadProfile(sample.data);
                          setShowSamplesDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 transition ${
                          isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <span className="text-base shrink-0">{sample.icon}</span>
                        <div className="truncate flex-1">
                          <div className={`font-semibold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{sample.label}</div>
                          <div className={`text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{sample.role}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className={`border-t mt-1.5 pt-1.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <button
                      type="button"
                      onClick={() => {
                        onResetNew();
                        setShowSamplesDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2 font-medium ${
                        isDark ? 'hover:bg-slate-800 text-red-400' : 'hover:bg-red-50 text-red-600'
                      }`}
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Start Clean Blank Resume</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Edit Resume Button - Icon only on small devices, text on sm+ */}
            <button
              type="button"
              onClick={onOpenModal}
              title="Edit Resume Data"
              className="p-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/25 flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4 fill-slate-950 shrink-0" />
              <span className="hidden sm:inline">Edit Data</span>
            </button>
          </div>
        </div>
      </nav>


      {/* Android & Mobile Info Modal */}
      {showAndroidModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div
            className={`rounded-2xl max-w-md w-full p-6 shadow-2xl border transition-colors ${
              isDark
                ? 'bg-slate-900 border-slate-750 text-slate-100'
                : 'bg-white border-slate-200 text-slate-800 shadow-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Android & Mobile Ready</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAndroidModal(false)}
                className={`transition ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}
              >
                ✕
              </button>
            </div>

            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              This application is configured with <strong>Capacitor</strong> and <strong>PWA Manifest</strong> for native Android bundling and instant mobile home screen installation.
            </p>

            <div
              className={`rounded-xl p-3 border text-xs font-mono space-y-1.5 mb-4 ${
                isDark
                  ? 'bg-slate-950 border-slate-800 text-slate-400'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <p className="text-cyan-500 font-bold font-sans">Android Build Steps (Capacitor):</p>
              <p className="text-emerald-500">1. npm run build</p>
              <p className="text-emerald-500">2. npx cap add android</p>
              <p className="text-emerald-500">3. npx cap open android</p>
            </div>

            <button
              type="button"
              onClick={() => setShowAndroidModal(false)}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition"
            >
              Awesome, Got It!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

