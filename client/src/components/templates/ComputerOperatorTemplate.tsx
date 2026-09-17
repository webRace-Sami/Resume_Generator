import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor, getFontFamilyClass } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Monitor, Terminal, HardDrive, Cpu, Award } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';

export const ComputerOperatorTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#0369a1'); // IT Tech Blue
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);
  const font = getFontFamilyClass(style.fontFamily);

  return (
    <div className={`w-full bg-white text-slate-900 ${font} ${space.padding} flex flex-col justify-start`}>
      {/* IT Operator Header */}
      <div className="pb-3 border-b-2 border-slate-200 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-1 text-white"
            style={{ backgroundColor: color }}
          >
            <Monitor className="w-3 h-3" />
            <span>IT Operations • System & Data Operations</span>
          </div>

          <h1 className={`${size.name} font-bold text-slate-900 tracking-tight`}>
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          <p className={`${size.title} font-semibold text-slate-700 mt-0.5`}>
            {personalInfo.jobTitle || 'Computer Operator & IT Data Processing Specialist'}
          </p>

          <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 mt-2 text-slate-600 ${size.small}`}>
            {personalInfo.phone && (
              <span className="flex items-center gap-1"><Phone className="w-3 h-3" style={{ color }} /> {personalInfo.phone}</span>
            )}
            {personalInfo.email && (
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" style={{ color }} /> {personalInfo.email}</span>
            )}
            {personalInfo.location && (
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" style={{ color }} /> {personalInfo.location}</span>
            )}
            {personalInfo.linkedin && (
              <span className="flex items-center gap-1"><LinkedinIcon className="w-3 h-3" style={{ color }} /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
            )}
            {personalInfo.website && (
              <span className="flex items-center gap-1"><Globe className="w-3 h-3" style={{ color }} /> {personalInfo.website.replace(/^https?:\/\//, '')}</span>
            )}
          </div>
        </div>

        {style.showPhoto && personalInfo.photoUrl && (
          <img
            src={personalInfo.photoUrl}
            alt={personalInfo.fullName}
            className="w-20 h-20 rounded-xl object-cover border-2 shadow-sm shrink-0"
            style={{ borderColor: color }}
          />
        )}
      </div>

      {/* Main Content Layout */}
      <div className={`mt-3.5 ${space.sectionGap}`}>
        {/* Professional Summary */}
        {personalInfo.summary && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5 flex items-center gap-1.5`}
              style={{ borderColor: color }}
            >
              <Cpu className="w-3.5 h-3.5" style={{ color }} />
              <span>Professional Summary</span>
            </h2>
            <p className={`text-slate-700 leading-relaxed ${size.body}`}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Technical Competencies & System Tools (Categorized Grid) */}
        {skills && skills.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-2 flex items-center gap-1.5`}
              style={{ borderColor: color }}
            >
              <Terminal className="w-3.5 h-3.5" style={{ color }} />
              <span>Technical Skills & Hardware / OS Tools</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {skills.map((cat, idx) => (
                <div key={idx} className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-xs font-bold text-slate-900 block mb-1 font-mono" style={{ color }}>{cat.category}:</span>
                  <div className="flex flex-wrap gap-1">
                    {cat.items.map((item, i) => (
                      <span key={i} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-800 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-2 flex items-center gap-1.5`}
              style={{ borderColor: color }}
            >
              <HardDrive className="w-3.5 h-3.5" style={{ color }} />
              <span>Computer & IT Operations Work History</span>
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-2 pl-3 py-0.5" style={{ borderColor: color }}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className={`${size.subheading} font-bold text-slate-900`}>{exp.jobTitle}</span>
                      <span className="text-slate-600 font-semibold text-xs ml-1.5" style={{ color }}>@ {exp.company}</span>
                    </div>
                    <span className={`${size.small} font-mono font-medium text-slate-500`}>
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className={`list-disc list-inside text-slate-700 mt-1 space-y-0.5 ${size.body}`}>
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="leading-snug">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key IT Projects & Systems Implemented */}
        {projects && projects.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5`} style={{ borderColor: color }}>
              <span>Key Technical Projects & Implementations</span>
            </h2>
            <div className={space.itemGap}>
              {projects.map((proj) => (
                <div key={proj.id} className="bg-slate-50 p-2.5 rounded border border-slate-200">
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.subheading} font-bold text-slate-900`}>{proj.title}</span>
                    {proj.role && <span className="text-xs text-slate-600">({proj.role})</span>}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 my-1">
                      {proj.technologies.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.2 rounded font-mono text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {proj.description && (
                    <ul className={`list-disc list-inside text-slate-700 space-y-0.5 ${size.body}`}>
                      {proj.description.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5" style={{ borderColor: color }}>
                Education
              </h3>
              <ul className={`space-y-1 ${size.small}`}>
                {education.map((edu) => (
                  <li key={edu.id}>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600">{edu.institution} {edu.endDate ? `• ${edu.endDate}` : ''}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* IT Certifications (CompTIA, Microsoft, CCNA, ITIL) */}
          {certifications && certifications.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5 flex items-center gap-1"
                style={{ borderColor: color }}
              >
                <Award className="w-3.5 h-3.5" style={{ color }} /> Certifications & Licenses
              </h3>
              <ul className={`space-y-1 ${size.small}`}>
                {certifications.map((cert) => (
                  <li key={cert.id} className="text-slate-800">
                    <span className="font-bold text-slate-900">{cert.name}</span>
                    {cert.issuer && <span className="text-slate-500"> ({cert.issuer})</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Languages & Custom Sections */}
        {languages && languages.length > 0 && (
          <div className="pt-1">
            <span className="text-xs font-bold text-slate-900 mr-2">Languages:</span>
            {languages.map((l, idx) => (
              <span key={idx} className="text-xs text-slate-700 mr-3">
                {l.language} ({l.proficiency})
              </span>
            ))}
          </div>
        )}

        {customSections && customSections.map((sec) => (
          <div key={sec.id}>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5`} style={{ borderColor: color }}>
              {sec.heading}
            </h2>
            <div className={space.itemGap}>
              {sec.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-slate-900 text-xs">{item.title}</span>
                    {item.date && <span className="text-[10px] text-slate-500">{item.date}</span>}
                  </div>
                  {item.subtitle && <p className="text-slate-600 text-xs italic">{item.subtitle}</p>}
                  {item.description && <p className={`text-slate-700 mt-0.5 ${size.body}`}>{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
