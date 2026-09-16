import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { BookOpen, GraduationCap, Award, FileText, FlaskConical } from 'lucide-react';

export const AcademicCvTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#1d4ed8');
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-white text-slate-800 font-["Merriweather",Georgia,serif] ${space.padding} flex flex-col justify-start`}>
      {/* Header */}
      <div className={`border-b-2 pb-4 ${space.marginB}`} style={{ borderColor: color }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className={`${size.name} font-bold text-slate-900 font-sans tracking-tight`}>
              {personalInfo.fullName || 'Candidate Name, Ph.D.'}
            </h1>
            <p className={`${size.title} font-semibold mt-0.5`} style={{ color }}>
              {personalInfo.jobTitle || 'Associate Professor & Researcher'}
            </p>

            <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-slate-600 font-sans ${size.small}`}>
              {personalInfo.location && <span>{personalInfo.location}</span>}
              {personalInfo.email && <span>• {personalInfo.email}</span>}
              {personalInfo.phone && <span>• {personalInfo.phone}</span>}
              {personalInfo.website && <span>• {personalInfo.website.replace(/^https?:\/\//, '')}</span>}
              {personalInfo.linkedin && <span>• {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>}
            </div>
          </div>

          {style.showPhoto && personalInfo.photoUrl && (
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.fullName}
              className="w-20 h-24 object-cover border-2 shadow-sm"
              style={{ borderColor: color }}
            />
          )}
        </div>

        {personalInfo.summary && (
          <p className={`mt-3 text-slate-700 leading-relaxed font-sans ${size.body}`}>
            {personalInfo.summary}
          </p>
        )}
      </div>

      {/* Sections */}
      <div className={space.sectionGap}>
        {/* Education (Forefront for Academic CV) */}
        {education && education.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-sans font-bold uppercase tracking-wider pb-1 border-b mb-2 flex items-center gap-1.5`}
              style={{ color, borderColor: `${color}40` }}
            >
              <GraduationCap className="w-4 h-4" /> Higher Education & Degrees
            </h2>
            <div className={space.itemGap}>
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline font-sans">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>{edu.degree}</h3>
                    <span className={`${size.small} text-slate-500 font-medium`}>{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-slate-700">
                    <span className={`${size.body} font-medium`}>{edu.institution} {edu.location && `(${edu.location})`}</span>
                    {edu.gpa && <span className={`${size.small} text-slate-500`}>GPA: {edu.gpa}</span>}
                  </div>
                  {edu.details && <p className={`${size.body} text-slate-600 font-sans mt-0.5`}>{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Academic Appointments & Research Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-sans font-bold uppercase tracking-wider pb-1 border-b mb-2.5 flex items-center gap-1.5`}
              style={{ color, borderColor: `${color}40` }}
            >
              <FlaskConical className="w-4 h-4" /> Academic & Clinical Appointments
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline font-sans">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>{exp.jobTitle}</h3>
                    <span className={`${size.small} text-slate-500`}>{exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}</span>
                  </div>
                  <div className="text-slate-700 font-medium text-xs mb-1">
                    {exp.company} {exp.location && `| ${exp.location}`}
                  </div>
                  {exp.description && (
                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 font-sans text-xs">
                      {exp.description.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Funded Grants & Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-sans font-bold uppercase tracking-wider pb-1 border-b mb-2 flex items-center gap-1.5`}
              style={{ color, borderColor: `${color}40` }}
            >
              <FileText className="w-4 h-4" /> Research Grants & Investigations
            </h2>
            <div className={space.itemGap}>
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between font-sans">
                    <h3 className="font-bold text-slate-900 text-xs">
                      {proj.title} {proj.role && <span className="font-normal italic">({proj.role})</span>}
                    </h3>
                    {proj.link && <span className="text-[10px] text-sky-600">{proj.link.replace(/^https?:\/\//, '')}</span>}
                  </div>
                  {proj.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 font-sans text-xs mt-0.5">
                      {proj.description.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Publications / Teaching / Conferences */}
        {customSections && customSections.map((sec) => (
          <div key={sec.id}>
            <h2
              className={`${size.heading} font-sans font-bold uppercase tracking-wider pb-1 border-b mb-2 flex items-center gap-1.5`}
              style={{ color, borderColor: `${color}40` }}
            >
              <BookOpen className="w-4 h-4" /> {sec.heading}
            </h2>
            <div className={space.itemGap}>
              {sec.items.map((it, idx) => (
                <div key={idx} className="font-sans text-xs">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{it.title}</span>
                    {it.date && <span className="font-normal text-slate-500">{it.date}</span>}
                  </div>
                  {it.subtitle && <p className="italic text-slate-700">{it.subtitle}</p>}
                  {it.description && <p className="text-slate-600 mt-0.5">{it.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Clinical / Research Skills & Certifications */}
        <div className="grid grid-cols-2 gap-4 font-sans text-xs">
          {skills && skills.length > 0 && (
            <div>
              <h3 className="font-bold uppercase tracking-wider pb-1 border-b mb-1.5" style={{ color }}>
                Clinical & Research Competencies
              </h3>
              <div className="space-y-1">
                {skills.map((grp, idx) => (
                  <div key={idx}>
                    <span className="font-semibold text-slate-900">{grp.category}: </span>
                    <span className="text-slate-700">{grp.items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications && certifications.length > 0 && (
            <div>
              <h3 className="font-bold uppercase tracking-wider pb-1 border-b mb-1.5 flex items-center gap-1" style={{ color }}>
                <Award className="w-3.5 h-3.5" /> Board Certifications & Licensure
              </h3>
              <div className="space-y-1">
                {certifications.map((c) => (
                  <div key={c.id}>
                    <p className="font-semibold text-slate-900">{c.name}</p>
                    <p className="text-[11px] text-slate-600">{c.issuer} ({c.date})</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
