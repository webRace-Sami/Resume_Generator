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
import { FreshGraduateStudentTemplate } from './FreshGraduateStudentTemplate';
import { SupplyChainLogisticsTemplate } from './SupplyChainLogisticsTemplate';
import { AuditorComplianceTemplate } from './AuditorComplianceTemplate';
import { ComputerOperatorTemplate } from './ComputerOperatorTemplate';
import { MsOfficeExecutiveTemplate } from './MsOfficeExecutiveTemplate';
import { VibrantGradientTemplate } from './VibrantGradientTemplate';
import { VividDuotoneTemplate } from './VividDuotoneTemplate';
import { EmeraldMintTemplate } from './EmeraldMintTemplate';
import { SunsetCoralTemplate } from './SunsetCoralTemplate';
import { NeonTechTemplate } from './NeonTechTemplate';

export const ResumeRenderer: React.FC<{ resume: ResumeData; elementId?: string }> = ({
  resume,
  elementId = 'resume-document-to-export',
}) => {
  const renderTemplate = () => {
    switch (resume.templateId) {
      case 'vibrant-gradient-header':
        return <VibrantGradientTemplate resume={resume} />;
      case 'vivid-duotone-accent':
        return <VividDuotoneTemplate resume={resume} />;
      case 'emerald-mint-fresh':
        return <EmeraldMintTemplate resume={resume} />;
      case 'sunset-coral-bold':
        return <SunsetCoralTemplate resume={resume} />;
      case 'neon-tech-cyber':
        return <NeonTechTemplate resume={resume} />;
      case 'fresh-graduate-student':
        return <FreshGraduateStudentTemplate resume={resume} />;
      case 'supply-chain-logistics':
        return <SupplyChainLogisticsTemplate resume={resume} />;
      case 'auditor-compliance':
        return <AuditorComplianceTemplate resume={resume} />;
      case 'computer-operator':
        return <ComputerOperatorTemplate resume={resume} />;
      case 'ms-office-executive':
        return <MsOfficeExecutiveTemplate resume={resume} />;
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

