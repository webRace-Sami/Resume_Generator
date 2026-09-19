import React, { useState } from 'react';
import { X, Heart, Copy, Check, Smartphone, Sparkles, Coffee } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-md rounded-2xl border shadow-2xl overflow-hidden transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-750 text-slate-100 shadow-cyan-950/30'
            : 'bg-white border-slate-200 text-slate-800 shadow-slate-300'
        }`}
      >
        {/* Glow Header Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-600" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'} flex items-center gap-1.5`}>
                <span>Support & Donation</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </h3>
              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Help us keep this generator 100% free
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`p-1.5 rounded-xl transition ${
              isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-5 pb-6 space-y-4">
          {/* Note Banner */}
          <div
            className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
              isDark
                ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}
          >
            <Coffee className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Description: </span>
              <span>donate 10 rupees if you like our services.</span>
            </div>
          </div>

          {/* Account Details Box */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isDark
                ? 'bg-slate-850/80 border-slate-750'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-700/50">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Easypaisa / Direct Bank Transfer</span>
              </span>
            </div>

            {/* Easypaisa Account Number */}
            <div className="space-y-1">
              <label className={`text-[11px] font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Easypaisa Account Number
              </label>
              <div
                className={`flex items-center justify-between p-2.5 rounded-lg border font-mono ${
                  isDark
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
              >
                <span className="text-sm font-bold tracking-wider">03428090699</span>
                <button
                  type="button"
                  onClick={() => handleCopy('03428090699', 'account')}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-md font-sans font-semibold transition ${
                    copiedField === 'account'
                      ? 'bg-emerald-500 text-slate-950'
                      : isDark
                      ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-cyan-600 border border-slate-200'
                  }`}
                >
                  {copiedField === 'account' ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Account Title */}
            <div className="space-y-1">
              <label className={`text-[11px] font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Account Title
              </label>
              <div
                className={`flex items-center justify-between p-2.5 rounded-lg border font-mono ${
                  isDark
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
              >
                <span className="text-sm font-bold">Samihullah</span>
                <button
                  type="button"
                  onClick={() => handleCopy('Samihullah', 'title')}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-md font-sans font-semibold transition ${
                    copiedField === 'title'
                      ? 'bg-emerald-500 text-slate-950'
                      : isDark
                      ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-cyan-600 border border-slate-200'
                  }`}
                >
                  {copiedField === 'title' ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Simple Instructions */}
          <div className={`p-2.5 rounded-lg text-[11px] leading-relaxed space-y-1 ${isDark ? 'text-slate-400 bg-slate-900/50' : 'text-slate-600 bg-slate-100/70'}`}>
            <p className="font-semibold text-slate-300">💡 How to send:</p>
            <p>1. Open your <strong>Easypaisa</strong>, <strong>JazzCash</strong>, <strong>NayaPay/SadaPay</strong>, or <strong>Mobile Banking app</strong>.</p>
            <p>2. Select <strong>Send Money</strong> &gt; <strong>Easypaisa Transfer</strong>.</p>
            <p>3. Enter <strong>03428090699</strong> and verify title <strong>Samihullah</strong>.</p>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition active:scale-98"
          >
            Thank You for Your Support! ❤️
          </button>
        </div>
      </div>
    </div>
  );
};
