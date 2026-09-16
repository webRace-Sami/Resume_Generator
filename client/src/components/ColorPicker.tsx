import React from 'react';
import { COLOR_PRESETS, ResumeStyle } from '../types/resume';
import { Check, Palette } from 'lucide-react';

interface ColorPickerProps {
  style: ResumeStyle;
  onChange: (newStyle: Partial<ResumeStyle>) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ style, onChange }) => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Color & Tone Palette</span>
        </div>

        {/* Monochrome / Color Toggle */}
        <button
          type="button"
          onClick={() => onChange({ isMonochrome: !style.isMonochrome })}
          className={`text-xs px-2.5 py-1 rounded-lg font-medium transition flex items-center gap-1.5 border ${
            style.isMonochrome
              ? 'bg-white text-slate-900 border-white font-bold'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white" />
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
                className="group relative flex flex-col items-center gap-1 p-1.5 rounded-lg border border-slate-800 hover:border-slate-600 transition"
                style={{
                  backgroundColor: isSelected ? 'rgba(255,255,255,0.06)' : 'transparent',
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                  style={{ backgroundColor: preset.hex }}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                </div>
                <span className="text-[10px] text-slate-400 truncate max-w-full font-medium">
                  {preset.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Hex Color input */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
          <label className="text-[11px] text-slate-400 font-medium whitespace-nowrap">Custom Hex:</label>
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
              className="bg-slate-800 border border-slate-700 text-xs px-2 py-1 rounded text-slate-200 font-mono w-24 focus:outline-none focus:border-cyan-500"
              placeholder="#0284c7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
