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
  Check,
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
        className={`w-full border-b backdrop-blur-xl sticky top-0 z-30 px-3 sm:px-8 py-3 no-print transition-colors ${
          isDark
            ? 'bg-slate-900/90 border-slate-800/80 text-white'
            : 'bg-white/90 border-slate-200 text-slate-900 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <FileText className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`font-extrabold text-sm sm:text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Resume<span className="text-cyan-500">Craft</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-500 border border-cyan-500/30">
                  Web & Android
                </span>
              </div>
              <p className={`text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'} hidden md:block`}>
                Professional ATS CV & Resume Generator
              </p>
            </div>
          </div>

          {/* Center / Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Day and Night Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              title={isDark ? 'Switch to Day Mode (Light)' : 'Switch to Night Mode (Dark)'}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                isDark
                  ? 'bg-slate-800/90 hover:bg-slate-750 text-amber-400 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-indigo-600 border-slate-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="text-[11px] hidden lg:inline">{isDark ? 'Day' : 'Night'}</span>
            </button>

            {/* Donation / Support Button */}
            <button
              type="button"
              onClick={onOpenDonationModal}
              title="Support & Donate"
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition shrink-0 ${
                isDark
                  ? 'bg-emerald-950/50 hover:bg-emerald-900/70 text-emerald-300 border-emerald-800/70 shadow-sm shadow-emerald-950/40'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300 shadow-sm'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span className="font-bold">Donate</span>
            </button>

            {/* Android / Mobile App Info Button */}
            <button
              type="button"
              onClick={() => setShowAndroidModal(true)}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                isDark
                  ? 'bg-slate-800/90 hover:bg-slate-750 text-slate-300 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden md:inline">Android Ready</span>
            </button>

            {/* Load Sample Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSamplesDropdown(!showSamplesDropdown)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                  isDark
                    ? 'bg-slate-800/90 hover:bg-slate-750 text-slate-200 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                }`}
              >
                <FolderOpen className="w-3.5 h-3.5 text-cyan-500" />
                <span className="hidden sm:inline">Sample Profiles</span>
                <span className="sm:hidden">Samples</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showSamplesDropdown && (
                <div
                  className={`absolute right-0 top-full mt-2 w-64 rounded-xl p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 border ${
                    isDark
                      ? 'bg-slate-900 border-slate-750 text-slate-100'
                      : 'bg-white border-slate-200 text-slate-800 shadow-slate-300'
                  }`}
                >
                  <div className={`text-[10px] font-bold px-3 py-1 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Instant Load Profile
                  </div>
                  <div className="max-h-80 overflow-y-auto scrollbar-none">
                    {SAMPLE_PROFILES.map((sample, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          onLoadProfile(sample.data);
                          setShowSamplesDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2 transition ${
                          isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <span className="text-base">{sample.icon}</span>
                        <div className="truncate">
                          <div className={`font-semibold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{sample.label}</div>
                          <div className={`text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{sample.role}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className={`border-t mt-1 pt-1 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
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

            {/* Big Build Resume Button */}
            <button
              type="button"
              onClick={onOpenModal}
              className="px-3.5 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-1.5 transition active:scale-95 cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span className="hidden sm:inline">Generate / Edit Data</span>
              <span className="sm:hidden">Edit</span>
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

            <div className={`space-y-2 text-xs mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Touch-optimized mobile drawer & modals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>A4 scale auto-fit on mobile screens</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Instant offline local storage auto-save</span>
              </div>
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
