import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';

export const CorporateExecutiveTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#334155');
  const fontClass = getFontFamilyClass(style.fontFamily);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-white text-slate-800 ${fontClass} ${space.padding} flex flex-col justify-start`}>
      {/* Executive Top Banner Header */}
      <div className="bg-slate-900 text-white p-6 rounded-lg mb-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">
              {personalInfo.fullName || 'Executive Candidate'}
            </h1>
            <p className="text-sm font-semibold tracking-wider text-sky-400 mt-1 uppercase">
              {personalInfo.jobTitle || 'Chief Executive Officer'}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-300">
              {personalInfo.email && (
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.email}</span>
              )}
              {personalInfo.phone && (
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.phone}</span>
              )}
              {personalInfo.location && (
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.location}</span>
              )}
              {personalInfo.linkedin && (
                <span className="flex items-center gap-1"><LinkedinIcon className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
              )}
            </div>
          </div>

          {style.showPhoto && personalInfo.photoUrl && (
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.fullName}
              className="w-20 h-20 rounded-full object-cover border-2 border-sky-400 shadow-md"
            />
          )}
        </div>
      </div>

      {/* Executive Summary Callout */}
      {personalInfo.summary && (
        <div
          className="border-l-4 p-3.5 bg-slate-50 rounded-r-md mb-4 text-xs text-slate-700 leading-relaxed italic"
          style={{ borderColor: color }}
        >
          {personalInfo.summary}
        </div>
      )}

      {/* 2-Column Balanced Layout */}
      <div className="grid grid-cols-12 gap-5">
        {/* Left Column (4 cols) - Core Competencies, Education, Languages */}
        <div className="col-span-4 space-y-4">
          {/* Key Competencies */}
          {skills && skills.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider pb-1 border-b-2 mb-2 flex items-center gap-1.5"
                style={{ color, borderColor: color }}
              >
                <Award className="w-3.5 h-3.5" /> Core Competencies
              </h2>
              <div className="space-y-2">
                {skills.map((grp, idx) => (
                  <div key={idx}>
                    <p className="text-[11px] font-bold text-slate-900 mb-1">{grp.category}</p>
                    <ul className="space-y-0.5 text-xs text-slate-700">
                      {grp.items.map((it, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider pb-1 border-b-2 mb-2 flex items-center gap-1.5"
                style={{ color, borderColor: color }}
              >
                <GraduationCap className="w-3.5 h-3.5" /> Education
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <p className="font-bold text-slate-900 leading-snug">{edu.degree}</p>
                    <p className="text-slate-700 font-medium">{edu.institution}</p>
                    <p className="text-[10px] text-slate-500">{edu.startDate} – {edu.endDate}</p>
                    {edu.gpa && <p className="text-[10px] text-slate-600">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider pb-1 border-b-2 mb-2"
                style={{ color, borderColor: color }}
              >
                Certifications
              </h2>
              <div className="space-y-1.5 text-xs">
                {certifications.map((c) => (
                  <div key={c.id}>
                    <p className="font-bold text-slate-900">{c.name}</p>
                    <p className="text-[10px] text-slate-500">{c.issuer} ({c.date})</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider pb-1 border-b-2 mb-2"
                style={{ color, borderColor: color }}
              >
                Languages
              </h2>
              <div className="space-y-1 text-xs">
                {languages.map((l, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="font-semibold text-slate-800">{l.language}</span>
                    <span className="text-slate-500 text-[11px]">{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (8 cols) - Executive Experience & Initiatives */}
        <div className="col-span-8 space-y-4">
          {experience && experience.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider pb-1 border-b-2 mb-2.5 flex items-center gap-1.5"
                style={{ color, borderColor: color }}
              >
                <Briefcase className="w-3.5 h-3.5" /> Executive Experience
              </h2>
              <div className={space.itemGap}>
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs font-bold text-slate-900 uppercase">{exp.jobTitle}</h3>
                      <span className="text-[10px] font-semibold text-slate-500">
                        {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">
                      {exp.company} {exp.location && <span className="font-normal text-slate-400">| {exp.location}</span>}
                    </div>
                    {exp.description && (
                      <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 text-xs">
                        {exp.description.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Strategic Initiatives / Projects */}
          {projects && projects.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider pb-1 border-b-2 mb-2"
                style={{ color, borderColor: color }}
              >
                Strategic Programs & Projects
              </h2>
              <div className="space-y-2">
                {projects.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <h3 className="font-bold text-slate-900">
                      {proj.title} {proj.role && <span className="font-normal text-slate-600">({proj.role})</span>}
                    </h3>
                    {proj.description && (
                      <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-600 text-xs mt-0.5">
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

          {/* Custom Sections */}
          {customSections && customSections.map((sec) => (
            <div key={sec.id}>
              <h2
                className="text-xs font-bold uppercase tracking-wider pb-1 border-b-2 mb-2"
                style={{ color, borderColor: color }}
              >
                {sec.heading}
              </h2>
              <div className="space-y-2 text-xs">
                {sec.items.map((it, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{it.title}</span>
                      {it.date && <span className="font-normal text-slate-500">{it.date}</span>}
                    </div>
                    {it.subtitle && <p className="text-slate-700 italic">{it.subtitle}</p>}
                    {it.description && <p className="text-slate-600 mt-0.5">{it.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
