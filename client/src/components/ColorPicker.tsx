import React from 'react';
import { COLOR_PRESETS, ResumeStyle } from '../types/resume';
import { Check, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ColorPickerProps {
  style: ResumeStyle;
  onChange: (newStyle: Partial<ResumeStyle>) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ style, onChange }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`border rounded-xl p-4 shadow-xl backdrop-blur-md transition-colors ${
        isDark
          ? 'bg-slate-900/95 border-slate-750 text-slate-100 shadow-cyan-950/20'
          : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-cyan-500" />
          <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Color & Tone Palette
          </span>
        </div>

        {/* Monochrome / Color Toggle */}
        <button
          type="button"
          onClick={() => onChange({ isMonochrome: !style.isMonochrome })}
          className={`text-xs px-2.5 py-1 rounded-lg font-medium transition flex items-center gap-1.5 border ${
            style.isMonochrome
              ? isDark
                ? 'bg-white text-slate-900 border-white font-bold'
                : 'bg-slate-900 text-white border-slate-900 font-bold'
              : isDark
              ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              : 'bg-slate-100 text-slate-700 border-slate-300 hover:text-slate-900'
          }`}
        >
          <span className={`w-2.5 h-2.5 rounded-full border ${isDark ? 'bg-slate-900 border-white' : 'bg-white border-slate-900'}`} />
          {style.isMonochrome ? 'Monochrome (No Colors)' : 'Color Mode Active'}
        </button>
      </div>

      {/* Preset Swatches */}
      <div className="space-y-2">
        <div className="grid grid-cols-5 gap-2">
          {COLOR_PRESETS.map((preset) => {
            const isSelected = !style.isMonochrome && style.accentColor.toLowerCase() === preset.hex.toLowerCase();
            return (
              <button
                key={preset.name}
                type="button"
                title={preset.name}
                onClick={() => onChange({ accentColor: preset.hex, isMonochrome: false })}
                className={`group relative flex flex-col items-center gap-1 p-1.5 rounded-lg border transition ${
                  isDark ? 'border-slate-800 hover:border-slate-600' : 'border-slate-200 hover:border-slate-300'
                }`}
                style={{
                  backgroundColor: isSelected
                    ? isDark
                      ? 'rgba(255,255,255,0.08)'
                      : 'rgba(6,182,212,0.12)'
                    : 'transparent',
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                  style={{ backgroundColor: preset.hex }}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                </div>
                <span className={`text-[10px] truncate max-w-full font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {preset.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Hex Color input */}
        <div className={`flex items-center gap-2 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <label className={`text-[11px] font-medium whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Custom Hex:
          </label>
          <div className="flex items-center gap-2 flex-1">
            <input
              type="color"
              value={style.accentColor || '#0284c7'}
              onChange={(e) => onChange({ accentColor: e.target.value, isMonochrome: false })}
              className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
            />
            <input
              type="text"
              value={style.accentColor || '#0284c7'}
              onChange={(e) => onChange({ accentColor: e.target.value, isMonochrome: false })}
              className={`border text-xs px-2 py-1 rounded font-mono w-24 focus:outline-none focus:border-cyan-500 ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-slate-200'
                  : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
              placeholder="#0284c7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

