import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { ArrowUpRight } from 'lucide-react';

export const NordicCrispTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#0d9488');
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-white text-zinc-900 font-["Outfit",sans-serif] ${space.padding} flex flex-col justify-start`}>
      {/* Header */}
      <div className={`grid grid-cols-12 gap-4 pb-6 border-b border-zinc-200 ${space.marginB}`}>
        <div className="col-span-8">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-1">Curriculum Vitae</span>
          <h1 className={`${size.name} font-light tracking-tight text-zinc-900`}>
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          <p className={`${size.title} font-medium mt-1`} style={{ color }}>
            {personalInfo.jobTitle || 'Professional Discipline'}
          </p>

          {personalInfo.summary && (
            <p className={`mt-3 text-zinc-600 leading-relaxed max-w-xl ${size.body}`}>
              {personalInfo.summary}
            </p>
          )}
        </div>

        <div className="col-span-4 flex flex-col justify-between items-end text-right text-xs text-zinc-600">
          {style.showPhoto && personalInfo.photoUrl ? (
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.fullName}
              className="w-20 h-20 rounded-none object-cover border border-zinc-300 mb-2 grayscale hover:grayscale-0 transition"
            />
          ) : <div />}

          <div className="space-y-1 text-[11px]">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p className="font-semibold">{personalInfo.location}</p>}
            {personalInfo.website && <p className="text-zinc-500">{personalInfo.website.replace(/^https?:\/\//, '')}</p>}
            {personalInfo.linkedin && <p className="text-zinc-500">{personalInfo.linkedin.replace(/^https?:\/\//, '')}</p>}
          </div>
        </div>
      </div>

      {/* Grid Layout Sections */}
      <div className={space.sectionGap}>
        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-zinc-400">Experience</h2>
            </div>
            <div className="col-span-9 space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-semibold text-zinc-900">{exp.jobTitle}</h3>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {exp.startDate} — {exp.isCurrent ? 'Current' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-xs font-medium mb-1.5" style={{ color }}>
                    {exp.company} {exp.location && <span className="text-zinc-400 font-normal">({exp.location})</span>}
                  </div>
                  {exp.description && (
                    <ul className="space-y-1 text-zinc-600 text-xs">
                      {exp.description.map((b, i) => (
                        <li key={i} className="relative pl-3 before:content-['–'] before:absolute before:left-0 before:text-zinc-400">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div className="grid grid-cols-12 gap-4 pt-3 border-t border-zinc-100">
            <div className="col-span-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-zinc-400">Education</h2>
            </div>
            <div className="col-span-9 space-y-2.5">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-900">{edu.degree}</h3>
                    <p className="text-xs text-zinc-600">{edu.institution} {edu.location && `— ${edu.location}`}</p>
                    {edu.details && <p className="text-[11px] text-zinc-500 mt-0.5">{edu.details}</p>}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-zinc-400">{edu.startDate} — {edu.endDate}</span>
                    {edu.gpa && <p className="text-[10px] text-zinc-500">GPA {edu.gpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="grid grid-cols-12 gap-4 pt-3 border-t border-zinc-100">
            <div className="col-span-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-zinc-400">Skills</h2>
            </div>
            <div className="col-span-9 grid grid-cols-2 gap-3">
              {skills.map((grp, idx) => (
                <div key={idx}>
                  <p className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider mb-1">{grp.category}</p>
                  <p className="text-xs text-zinc-600 leading-relaxed">{grp.items.join('  /  ')}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="grid grid-cols-12 gap-4 pt-3 border-t border-zinc-100">
            <div className="col-span-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-zinc-400">Works</h2>
            </div>
            <div className="col-span-9 space-y-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-center gap-1">
                    <h3 className="text-xs font-bold text-zinc-900">{proj.title}</h3>
                    {proj.link && (
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    )}
                  </div>
                  {proj.technologies && (
                    <p className="text-[10px] font-mono text-zinc-500 mb-0.5">{proj.technologies.join(', ')}</p>
                  )}
                  {proj.description && (
                    <ul className="space-y-0.5 text-zinc-600 text-xs">
                      {proj.description.map((b, i) => (
                        <li key={i} className="pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-zinc-400">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications & Languages */}
        {((certifications && certifications.length > 0) || (languages && languages.length > 0)) && (
          <div className="grid grid-cols-12 gap-4 pt-3 border-t border-zinc-100">
            <div className="col-span-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-zinc-400">Credentials</h2>
            </div>
            <div className="col-span-9 grid grid-cols-2 gap-4 text-xs">
              {certifications && certifications.length > 0 && (
                <div>
                  <h4 className="font-bold text-zinc-800 text-[11px] mb-1">Certifications</h4>
                  {certifications.map((c) => (
                    <p key={c.id} className="text-zinc-600 mb-0.5">{c.name} — {c.issuer}</p>
                  ))}
                </div>
              )}
              {languages && languages.length > 0 && (
                <div>
                  <h4 className="font-bold text-zinc-800 text-[11px] mb-1">Languages</h4>
                  {languages.map((l, i) => (
                    <p key={i} className="text-zinc-600 mb-0.5">{l.language} ({l.proficiency})</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Custom Sections */}
        {customSections && customSections.map((sec) => (
          <div key={sec.id} className="grid grid-cols-12 gap-4 pt-3 border-t border-zinc-100">
            <div className="col-span-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-zinc-400">{sec.heading}</h2>
            </div>
            <div className="col-span-9 space-y-2 text-xs">
              {sec.items.map((it, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold text-zinc-900">
                    <span>{it.title}</span>
                    {it.date && <span className="font-normal text-zinc-400">{it.date}</span>}
                  </div>
                  {it.subtitle && <p className="text-zinc-600 italic">{it.subtitle}</p>}
                  {it.description && <p className="text-zinc-600 mt-0.5">{it.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
