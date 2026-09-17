import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor, getFontFamilyClass } from './templateUtils';
import { Mail, Phone, MapPin, Globe, ShieldCheck, Scale, Award, FileSpreadsheet, CheckCheck } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';

export const AuditorComplianceTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#1e3a8a'); // Deep Corporate Navy
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);
  const font = getFontFamilyClass(style.fontFamily);

  return (
    <div className={`w-full bg-white text-slate-900 ${font} ${space.padding} flex flex-col justify-start`}>
      {/* Formal Top Header with Executive Double Border */}
      <div className="pb-3 border-b-2 border-slate-800 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1">
            <Scale className="w-3.5 h-3.5" style={{ color }} />
            <span>Audit • Risk Advisory • SOX & Regulatory Compliance</span>
          </div>

          <h1 className={`${size.name} font-bold tracking-tight text-slate-900 uppercase font-serif`}>
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          <p className={`${size.title} font-semibold text-slate-700 italic mt-0.5`} style={{ color }}>
            {personalInfo.jobTitle || 'Senior Internal Auditor & Risk Advisory Lead'}
          </p>

          {/* Contact Bar */}
          <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-x-3.5 gap-y-1 mt-2 text-slate-600 ${size.small}`}>
            {personalInfo.location && (
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" style={{ color }} /> {personalInfo.location}</span>
            )}
            {personalInfo.phone && (
              <span className="flex items-center gap-1"><Phone className="w-3 h-3" style={{ color }} /> {personalInfo.phone}</span>
            )}
            {personalInfo.email && (
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" style={{ color }} /> {personalInfo.email}</span>
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
            className="w-20 h-20 rounded-lg object-cover border-2 shadow-sm shrink-0"
            style={{ borderColor: color }}
          />
        )}
      </div>

      {/* Main Body */}
      <div className={`mt-3.5 ${space.sectionGap}`}>
        {/* Executive Profile & Audit Philosophy */}
        {personalInfo.summary && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5 flex items-center gap-1.5`}
              style={{ borderColor: color }}
            >
              <ShieldCheck className="w-4 h-4" style={{ color }} />
              <span>Professional Summary & Audit Expertise</span>
            </h2>
            <p className={`text-slate-800 text-justify leading-relaxed ${size.body}`}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Professional Audit & Compliance Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-2 flex items-center gap-1.5`}
              style={{ borderColor: color }}
            >
              <Scale className="w-4 h-4" style={{ color }} />
              <span>Audit Engagements & Work History</span>
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id} className="pb-1.5 border-b border-slate-100 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className={`${size.subheading} font-bold text-slate-900`}>{exp.jobTitle}</span>
                      <span className="text-slate-700 font-semibold text-xs ml-1.5" style={{ color }}>| {exp.company}</span>
                      {exp.location && <span className="text-slate-500 text-xs ml-1">({exp.location})</span>}
                    </div>
                    <span className={`${size.small} text-slate-600 font-bold shrink-0`}>
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className={`list-disc list-inside text-slate-800 mt-1 space-y-0.5 ${size.body}`}>
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

        {/* Audit Methodology, Compliance & Tools Grid */}
        {skills && skills.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5 flex items-center gap-1.5`}
              style={{ borderColor: color }}
            >
              <FileSpreadsheet className="w-4 h-4" style={{ color }} />
              <span>Audit Competencies, Standards & Tools</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {skills.map((cat, idx) => (
                <div key={idx} className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-xs font-bold text-slate-900 block mb-0.5" style={{ color }}>{cat.category}:</span>
                  <div className="text-[11px] text-slate-700">
                    {cat.items.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Audits & Compliance Reviews */}
        {projects && projects.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5`}
              style={{ borderColor: color }}
            >
              <span>Key Audit Projects & Risk Assessments</span>
            </h2>
            <div className={space.itemGap}>
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.subheading} font-bold text-slate-900`}>{proj.title}</span>
                    {proj.role && <span className="text-xs text-slate-600 italic">Role: {proj.role}</span>}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="text-[10px] text-slate-500 font-medium my-0.5">
                      Frameworks/Tools: {proj.technologies.join(', ')}
                    </div>
                  )}
                  {proj.description && (
                    <ul className={`list-disc list-inside text-slate-800 space-y-0.5 ${size.body}`}>
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

        {/* Bottom Split: Education & Professional Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-slate-200">
          {/* Certifications (CPA, CIA, CISA, ACCA) */}
          {certifications && certifications.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5 flex items-center gap-1"
                style={{ borderColor: color }}
              >
                <Award className="w-3.5 h-3.5" style={{ color }} /> Certifications & Credentials
              </h3>
              <ul className={`space-y-1 ${size.small}`}>
                {certifications.map((cert) => (
                  <li key={cert.id} className="text-slate-800">
                    <span className="font-bold text-slate-900">{cert.name}</span>
                    {cert.issuer && <span className="text-slate-600"> — {cert.issuer}</span>}
                    {cert.date && <span className="text-slate-400 text-[10px] ml-1">({cert.date})</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5"
                style={{ borderColor: color }}
              >
                Education
              </h3>
              <ul className={`space-y-1 ${size.small}`}>
                {education.map((edu) => (
                  <li key={edu.id}>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600">{edu.institution} {edu.endDate ? `(${edu.endDate})` : ''} {edu.gpa ? `• GPA: ${edu.gpa}` : ''}</div>
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
