import React, { useState } from 'react';
import { ResumeData, FontFamilyOption, FontSizeOption, SpacingOption } from '../types/resume';
import { ColorPicker } from './ColorPicker';
import { processImageFile, ACCEPTED_IMAGE_EXTENSIONS } from '../services/imageUtils';
import { useTheme } from '../context/ThemeContext';
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
  Upload,
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
  onUpdatePhoto?: (photoUrl: string) => void;
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
  onUpdatePhoto,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [isPhotoUploading, setIsPhotoUploading] = useState(false);

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

  const handleQuickPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdatePhoto) {
      try {
        setIsPhotoUploading(true);
        const processed = await processImageFile(file);
        onUpdatePhoto(processed);
        onChangeStyle({ showPhoto: true });
      } catch (err) {
        console.error('Photo upload failed:', err);
      } finally {
        setIsPhotoUploading(false);
        e.target.value = '';
      }
    }
  };

  return (
    <div className="sticky top-2 sm:top-4 z-40 w-full max-w-5xl mx-auto px-2 sm:px-4 no-print">
      <div
        className={`border rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-1.5 sm:gap-2.5 overflow-x-auto scrollbar-none transition-colors ${
          isDark
            ? 'bg-slate-900/95 border-slate-750/90 text-white shadow-cyan-950/20'
            : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300'
        }`}
      >
        {/* Left: Edit Data & Styling */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Big Edit Data Button */}
          <button
            type="button"
            onClick={onOpenEditModal}
            className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition group shrink-0 cursor-pointer"
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
                  ? isDark
                    ? 'bg-slate-800 text-cyan-400 border-cyan-500/50'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-400'
                  : isDark
                  ? 'bg-slate-850 hover:bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
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
                  ? isDark
                    ? 'bg-slate-800 text-cyan-400 border-cyan-500/50'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-400'
                  : isDark
                  ? 'bg-slate-850 hover:bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Font</span>
            </button>

            {/* Typography Popover */}
            {showTypography && (
              <div
                className={`absolute left-0 top-full mt-2 w-72 border rounded-xl p-4 shadow-xl z-50 space-y-3.5 transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-750 text-slate-100'
                    : 'bg-white border-slate-200 text-slate-800 shadow-slate-300'
                }`}
              >
                <div>
                  <label
                    className={`block text-[11px] font-bold uppercase tracking-wider mb-1.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Font Family
                  </label>
                  <select
                    value={resume.style.fontFamily}
                    onChange={(e) => onChangeStyle({ fontFamily: e.target.value as FontFamilyOption })}
                    className={`w-full border rounded-lg px-2.5 py-1.5 text-xs ${
                      isDark
                        ? 'bg-slate-800 border-slate-700 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
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
                    <label
                      className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Text Size
                    </label>
                    <select
                      value={resume.style.fontSize}
                      onChange={(e) => onChangeStyle({ fontSize: e.target.value as FontSizeOption })}
                      className={`w-full border rounded-lg px-2 py-1 text-xs ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="compact">Compact (1 Page)</option>
                      <option value="normal">Standard</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Spacing
                    </label>
                    <select
                      value={resume.style.spacing}
                      onChange={(e) => onChangeStyle({ spacing: e.target.value as SpacingOption })}
                      className={`w-full border rounded-lg px-2 py-1 text-xs ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="tight">Tight</option>
                      <option value="normal">Normal</option>
                      <option value="relaxed">Relaxed</option>
                    </select>
                  </div>
                </div>

                <div
                  className={`pt-2 border-t flex items-center justify-between ${
                    isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="text-xs">Show Profile Photo</span>
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

          {/* Photo quick upload & toggle */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => onChangeStyle({ showPhoto: !resume.style.showPhoto })}
              title={resume.style.showPhoto ? 'Hide Profile Photo' : 'Show Profile Photo'}
              className={`p-2 rounded-lg sm:rounded-xl border text-xs flex items-center transition ${
                resume.style.showPhoto
                  ? isDark
                    ? 'bg-slate-800 text-cyan-400 border-slate-700'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-300'
                  : isDark
                  ? 'bg-slate-850 text-slate-500 border-slate-800 hover:text-slate-300'
                  : 'bg-slate-100 text-slate-400 border-slate-200 hover:text-slate-700'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
            </button>

            {onUpdatePhoto && (
              <label
                className={`p-2 rounded-lg sm:rounded-xl border text-xs flex items-center cursor-pointer transition ${
                  isDark
                    ? 'border-slate-800 bg-slate-850 hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-400'
                    : 'border-slate-200 bg-slate-100 hover:bg-slate-200 hover:border-slate-300 text-slate-600 hover:text-cyan-600'
                }`}
                title="Upload/Replace Photo (JPG, JPEG, PNG, WEBP, SVG, etc.)"
              >
                {isPhotoUploading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-500" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                <input
                  type="file"
                  accept={ACCEPTED_IMAGE_EXTENSIONS}
                  onChange={handleQuickPhotoUpload}
                  className="hidden"
                  disabled={isPhotoUploading}
                />
              </label>
            )}
          </div>
        </div>

        {/* Center: Zoom & Auto-Fit Controls */}
        <div
          className={`flex items-center gap-1 px-1.5 sm:px-2 py-1 rounded-lg sm:rounded-xl border shrink-0 ${
            isDark
              ? 'bg-slate-850 border-slate-750 text-slate-300'
              : 'bg-slate-100 border-slate-250 text-slate-700'
          }`}
        >
          <button
            type="button"
            onClick={() => onZoomChange(Math.max(0.3, zoomLevel - 0.08))}
            className={`p-1 rounded ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onFitToScreen}
            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400 border-slate-700'
                : 'bg-white hover:bg-slate-50 text-cyan-700 border-slate-200 shadow-xs'
            }`}
            title="Auto-Fit to Screen Width"
          >
            <Maximize className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">Fit</span>
            <span>{Math.round(zoomLevel * 100)}%</span>
          </button>

          <button
            type="button"
            onClick={() => onZoomChange(Math.min(1.4, zoomLevel + 0.08))}
            className={`p-1 rounded ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
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
            className={`p-2 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition hidden sm:flex ${
              isDark
                ? 'bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Print</span>
          </button>

          {/* Big Download PDF Button */}
          <button
            type="button"
            disabled={isDownloadingPdf}
            onClick={onDownloadPdf}
            className="px-3.5 sm:px-5 py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shadow-lg shadow-cyan-500/25 transition disabled:opacity-75 cursor-pointer shrink-0"
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

