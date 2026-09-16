import React, { useState } from 'react';
import { ResumeData, FontFamilyOption, FontSizeOption, SpacingOption } from '../types/resume';
import { ColorPicker } from './ColorPicker';
import {
  Edit3,
  FileDown,
  Printer,
  Type,
  ZoomIn,
  ZoomOut,
  Image as ImageIcon,
  Loader2,
  Maximize,
} from 'lucide-react';

interface LiveEditorToolbarProps {
  resume: ResumeData;
  onChangeStyle: (newStyle: Partial<ResumeData['style']>) => void;
  onOpenEditModal: () => void;
  onDownloadPdf: () => void;
  isDownloadingPdf: boolean;
  downloadProgressText: string;
  zoomLevel: number;
  onZoomChange: (zoom: number) => void;
  onFitToScreen: () => void;
  onSelectTemplate: (templateId: string) => void;
}

export const LiveEditorToolbar: React.FC<LiveEditorToolbarProps> = ({
  resume,
  onChangeStyle,
  onOpenEditModal,
  onDownloadPdf,
  isDownloadingPdf,
  downloadProgressText,
  zoomLevel,
  onZoomChange,
  onFitToScreen,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showTypography, setShowTypography] = useState(false);

  const fonts: FontFamilyOption[] = [
    'Inter',
    'Plus Jakarta Sans',
    'Outfit',
    'Roboto',
    'Playfair Display',
    'Merriweather',
    'JetBrains Mono',
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="sticky top-2 sm:top-4 z-40 w-full max-w-5xl mx-auto px-2 sm:px-4 no-print">
      <div className="bg-slate-900/95 border border-slate-750/90 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-1.5 sm:gap-2.5 overflow-x-auto scrollbar-none">
        {/* Left: Edit Data & Styling */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Big Edit Data Button */}
          <button
            type="button"
            onClick={onOpenEditModal}
            className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition group shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] group-hover:rotate-12 transition-transform" />
            <span>Edit Data</span>
          </button>

          {/* Color Picker Toggle */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => {
                setShowColorPicker(!showColorPicker);
                setShowTypography(false);
              }}
              className={`p-2 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                showColorPicker
                  ? 'bg-slate-800 text-cyan-400 border-cyan-500/50'
                  : 'bg-slate-850 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <div
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-white/50"
                style={{
                  backgroundColor: resume.style.isMonochrome ? '#000000' : resume.style.accentColor,
                }}
              />
              <span className="hidden md:inline">Color</span>
            </button>

            {/* Color Popup */}
            {showColorPicker && (
              <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 z-50">
                <ColorPicker
                  style={resume.style}
                  onChange={(newStyle) => {
                    onChangeStyle(newStyle);
                  }}
                />
              </div>
            )}
          </div>

          {/* Typography & Spacing Controls */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => {
                setShowTypography(!showTypography);
                setShowColorPicker(false);
              }}
              className={`p-2 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                showTypography
                  ? 'bg-slate-800 text-cyan-400 border-cyan-500/50'
                  : 'bg-slate-850 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Font</span>
            </button>

            {/* Typography Popover */}
            {showTypography && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-slate-900 border border-slate-750 rounded-xl p-4 shadow-xl z-50 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Font Family
                  </label>
                  <select
                    value={resume.style.fontFamily}
                    onChange={(e) => onChangeStyle({ fontFamily: e.target.value as FontFamilyOption })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  >
                    {fonts.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Text Size
                    </label>
                    <select
                      value={resume.style.fontSize}
                      onChange={(e) => onChangeStyle({ fontSize: e.target.value as FontSizeOption })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white"
                    >
                      <option value="compact">Compact (1 Page)</option>
                      <option value="normal">Standard</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Spacing
                    </label>
                    <select
                      value={resume.style.spacing}
                      onChange={(e) => onChangeStyle({ spacing: e.target.value as SpacingOption })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white"
                    >
                      <option value="tight">Tight</option>
                      <option value="normal">Normal</option>
                      <option value="relaxed">Relaxed</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Show Profile Photo</span>
                  <input
                    type="checkbox"
                    checked={resume.style.showPhoto}
                    onChange={(e) => onChangeStyle({ showPhoto: e.target.checked })}
                    className="rounded bg-slate-800 border-slate-700 text-cyan-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Photo quick toggle */}
          <button
            type="button"
            onClick={() => onChangeStyle({ showPhoto: !resume.style.showPhoto })}
            title="Toggle Profile Photo"
            className={`p-2 rounded-lg sm:rounded-xl border text-xs flex items-center transition shrink-0 ${
              resume.style.showPhoto
                ? 'bg-slate-800 text-cyan-400 border-slate-700'
                : 'bg-slate-850 text-slate-500 border-slate-800 hover:text-slate-300'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center: Zoom & Auto-Fit Controls */}
        <div className="flex items-center gap-1 bg-slate-850 px-1.5 sm:px-2 py-1 rounded-lg sm:rounded-xl border border-slate-750 text-slate-300 shrink-0">
          <button
            type="button"
            onClick={() => onZoomChange(Math.max(0.3, zoomLevel - 0.08))}
            className="p-1 hover:text-white rounded"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          
          <button
            type="button"
            onClick={onFitToScreen}
            className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 flex items-center gap-1"
            title="Auto-Fit to Screen Width"
          >
            <Maximize className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">Fit</span>
            <span>{Math.round(zoomLevel * 100)}%</span>
          </button>

          <button
            type="button"
            onClick={() => onZoomChange(Math.min(1.4, zoomLevel + 0.08))}
            className="p-1 hover:text-white rounded"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Side: Download PDF & Print */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={handlePrint}
            title="Print Resume"
            className="p-2 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition hidden sm:flex"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Print</span>
          </button>

          {/* Big Download PDF Button */}
          <button
            type="button"
            disabled={isDownloadingPdf}
            onClick={onDownloadPdf}
            className="px-3.5 sm:px-5 py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-300 hover:to-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shadow-lg shadow-cyan-500/25 transition disabled:opacity-75 cursor-pointer shrink-0"
          >
            {isDownloadingPdf ? (
              <>
                <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                <span className="hidden sm:inline">{downloadProgressText || 'Exporting...'}</span>
                <span className="sm:hidden">Saving...</span>
              </>
            ) : (
              <>
                <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                <span>PDF</span>
                <span className="hidden sm:inline">Download</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
