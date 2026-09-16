import React from 'react';
import { ResumeData } from '../../types/resume';
import { ModernCleanTemplate } from './ModernCleanTemplate';
import { ClassicIvyTemplate } from './ClassicIvyTemplate';
import { TechMinimalistTemplate } from './TechMinimalistTemplate';
import { CreativeSidebarTemplate } from './CreativeSidebarTemplate';
import { CorporateExecutiveTemplate } from './CorporateExecutiveTemplate';
import { NordicCrispTemplate } from './NordicCrispTemplate';
import { MonochromeAtsTemplate } from './MonochromeAtsTemplate';
import { LuxuryEleganceTemplate } from './LuxuryEleganceTemplate';
import { AcademicCvTemplate } from './AcademicCvTemplate';
import { StartupDynamicTemplate } from './StartupDynamicTemplate';

export const ResumeRenderer: React.FC<{ resume: ResumeData; elementId?: string }> = ({
  resume,
  elementId = 'resume-document-to-export',
}) => {
  const renderTemplate = () => {
    switch (resume.templateId) {
      case 'classic-ivy':
        return <ClassicIvyTemplate resume={resume} />;
      case 'tech-minimalist':
        return <TechMinimalistTemplate resume={resume} />;
      case 'creative-sidebar':
        return <CreativeSidebarTemplate resume={resume} />;
      case 'corporate-executive':
        return <CorporateExecutiveTemplate resume={resume} />;
      case 'nordic-crisp':
        return <NordicCrispTemplate resume={resume} />;
      case 'monochrome-ats':
        return <MonochromeAtsTemplate resume={resume} />;
      case 'luxury-elegance':
        return <LuxuryEleganceTemplate resume={resume} />;
      case 'academic-cv':
        return <AcademicCvTemplate resume={resume} />;
      case 'startup-dynamic':
        return <StartupDynamicTemplate resume={resume} />;
      case 'modern-clean':
      default:
        return <ModernCleanTemplate resume={resume} />;
    }
  };

  return (
    <div id={elementId} className="resume-paper mx-auto overflow-hidden">
      {renderTemplate()}
    </div>
  );
};
