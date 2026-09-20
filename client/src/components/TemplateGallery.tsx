import React, { useState } from 'react';
import { TEMPLATES, TemplateDefinition } from '../types/resume';
import { Filter, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TemplateGalleryProps {
  selectedTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
  accentColor: string;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  selectedTemplateId,
  onSelectTemplate,
  accentColor,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Colorful & Vibrant',
    'Students & Entry',
    'Operations',
    'Finance & Audit',
    'Admin & Office',
    'Modern',
    'Executive',
    'Tech',
    'Academic',
    'Creative',
    'ATS Minimal',
  ];

  const filteredTemplates = activeCategory === 'All'
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full space-y-3.5">
      {/* Category filter pills - touch scrollable on mobile */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
        <Filter className={`w-3.5 h-3.5 shrink-0 ml-1 hidden sm:block ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition whitespace-nowrap border shrink-0 flex items-center gap-1 ${
              activeCategory === cat
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20'
                : isDark
                ? 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white hover:border-slate-600'
                : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300 shadow-sm'
            }`}
          >
            {cat === 'Colorful & Vibrant' && <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
        {filteredTemplates.map((template: TemplateDefinition) => {
          const isSelected = selectedTemplateId === template.id;

          return (
            <div
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className={`group relative rounded-xl border p-2.5 sm:p-3.5 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/10 -translate-y-0.5 ' + (isDark ? 'bg-slate-800/95' : 'bg-cyan-50/70 border-cyan-500')
                  : isDark
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border truncate ${
                  isDark
                    ? 'bg-slate-800 text-slate-300 border-slate-700'
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {template.category}
                </span>

                <span
                  className="text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded-full text-white truncate max-w-[90px] sm:max-w-none shadow-xs"
                  style={{
                    backgroundColor: isSelected ? accentColor : isDark ? '#334155' : '#64748b',
                  }}
                >
                  {template.badgeText}
                </span>
              </div>

              {/* Template Mockup Thumbnail */}
              <div className="relative w-full h-24 sm:h-32 rounded-lg bg-white overflow-hidden shadow-inner p-2 sm:p-2.5 border border-slate-200 flex flex-col justify-between group-hover:shadow-md transition">
                {/* Header Mock */}
                <div className="space-y-1">
                  <div
                    className={`h-2 sm:h-3 rounded w-full bg-gradient-to-r ${template.previewGradient}`}
                  />
                  <div className="h-1 rounded w-1/3 bg-slate-300" />
                </div>

                {/* Lines Mock */}
                <div className="space-y-1 my-1 sm:my-2">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
                    <div className="h-1 rounded w-3/4 bg-slate-200" />
                  </div>
                  <div className="h-1 rounded w-full bg-slate-100" />
                  <div className="h-1 rounded w-5/6 bg-slate-100" />
                </div>

                {/* Footer Mock */}
                <div className="flex gap-1">
                  <div className="h-1 rounded-full w-1/4 bg-slate-300" />
                  <div className="h-1 rounded-full w-1/4 bg-slate-200" />
                  <div className="h-1 rounded-full w-1/4 bg-slate-200" />
                </div>

                {/* Selected Overlay Checkmark */}
                {isSelected && (
                  <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/40">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="mt-2">
                <h4 className={`text-[11px] sm:text-xs font-bold flex items-center gap-1 group-hover:text-cyan-500 transition truncate ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {template.name}
                </h4>
                <p className={`text-[10px] sm:text-[11px] line-clamp-1 mt-0.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {template.tagline}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

