import { ResumeStyle } from '../../types/resume';

export const getFontFamilyClass = (font: string) => {
  switch (font) {
    case 'Outfit':
      return 'font-["Outfit",sans-serif]';
    case 'Playfair Display':
      return 'font-["Playfair_Display",serif]';
    case 'Merriweather':
      return 'font-["Merriweather",serif]';
    case 'Roboto':
      return 'font-["Roboto",sans-serif]';
    case 'JetBrains Mono':
      return 'font-["JetBrains_Mono",monospace]';
    case 'Plus Jakarta Sans':
      return 'font-["Plus_Jakarta_Sans",sans-serif]';
    case 'Inter':
    default:
      return 'font-["Inter",sans-serif]';
  }
};

export const getSpacingClasses = (spacing: string) => {
  switch (spacing) {
    case 'tight':
      return {
        sectionGap: 'space-y-3',
        itemGap: 'space-y-1.5',
        padding: 'p-6',
        marginB: 'mb-2',
      };
    case 'relaxed':
      return {
        sectionGap: 'space-y-6',
        itemGap: 'space-y-3',
        padding: 'p-10',
        marginB: 'mb-4',
      };
    case 'normal':
    default:
      return {
        sectionGap: 'space-y-4',
        itemGap: 'space-y-2',
        padding: 'p-8',
        marginB: 'mb-3',
      };
  }
};

export const getFontSizeClasses = (fontSize: string) => {
  switch (fontSize) {
    case 'compact':
      return {
        name: 'text-2xl',
        title: 'text-sm',
        heading: 'text-sm',
        subheading: 'text-xs',
        body: 'text-xs',
        small: 'text-[10px]',
      };
    case 'large':
      return {
        name: 'text-4xl',
        title: 'text-lg',
        heading: 'text-lg',
        subheading: 'text-base',
        body: 'text-sm',
        small: 'text-xs',
      };
    case 'normal':
    default:
      return {
        name: 'text-3xl',
        title: 'text-base',
        heading: 'text-base',
        subheading: 'text-sm',
        body: 'text-xs leading-relaxed',
        small: 'text-[11px]',
      };
  }
};

export const getEffectiveColor = (style: ResumeStyle, fallback: string = '#0284c7') => {
  if (style.isMonochrome) {
    return '#111827'; // Dark charcoal / black
  }
  return style.accentColor || fallback;
};
