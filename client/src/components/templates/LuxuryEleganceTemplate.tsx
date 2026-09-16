import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';

export const LuxuryEleganceTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#b45309');
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  // Initials for monogram
  const initials = personalInfo.fullName
    ? personalInfo.fullName
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'CV';

  return (
    <div className={`w-full bg-[#fcfbf9] text-stone-800 font-["Playfair_Display",Georgia,serif] ${space.padding} border-8 border-double border-stone-200 flex flex-col justify-start`}>
      {/* Monogram Top Header */}
      <div className="text-center pb-5 border-b border-stone-300 relative">
        <div
          className="w-14 h-14 mx-auto rounded-full flex items-center justify-center font-bold text-lg text-white mb-2 shadow-sm"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>

        <h1 className={`${size.name} font-normal tracking-wide text-stone-900 uppercase font-serif`}>
          {personalInfo.fullName || 'Candidate Name'}
        </h1>
        <p className={`${size.title} italic font-sans font-medium text-stone-600 mt-1`} style={{ color }}>
          {personalInfo.jobTitle || 'Senior Consultant'}
        </p>

        <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2.5 text-stone-600 font-sans ${size.small}`}>
          {personalInfo.email && (
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {personalInfo.location}</span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1"><LinkedinIcon className="w-3 h-3" /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
          )}
          {personalInfo.website && (
            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {personalInfo.website.replace(/^https?:\/\//, '')}</span>
          )}
        </div>

        {personalInfo.summary && (
          <p className={`mt-3 max-w-2xl mx-auto font-sans text-stone-700 leading-relaxed italic ${size.body}`}>
            "{personalInfo.summary}"
          </p>
        )}
      </div>

      {/* Body Sections */}
      <div className={`font-sans ${space.sectionGap} mt-4`}>
        {/* Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2
              className="text-center font-serif text-sm uppercase tracking-widest font-bold pb-1 border-b border-stone-300 mb-3"
              style={{ color }}
            >
              — Professional Career —
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id} className="pb-2 border-b border-stone-100 last:border-b-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-stone-900 text-sm">{exp.jobTitle}</h3>
                    <span className="text-[11px] font-medium text-stone-500">
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-xs font-serif italic text-stone-700 mb-1">
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </div>
                  {exp.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-stone-700 text-xs">
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

        {/* Education & Skills Double Column */}
        <div className="grid grid-cols-2 gap-5">
          {education && education.length > 0 && (
            <div>
              <h2
                className="text-center font-serif text-xs uppercase tracking-widest font-bold pb-1 border-b border-stone-300 mb-2"
                style={{ color }}
              >
                — Education —
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <p className="font-bold text-stone-900">{edu.degree}</p>
                    <p className="italic text-stone-700">{edu.institution}</p>
                    <p className="text-[10px] text-stone-500">{edu.startDate} – {edu.endDate} {edu.gpa ? `| GPA: ${edu.gpa}` : ''}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {skills && skills.length > 0 && (
            <div>
              <h2
                className="text-center font-serif text-xs uppercase tracking-widest font-bold pb-1 border-b border-stone-300 mb-2"
                style={{ color }}
              >
                — Expertise —
              </h2>
              <div className="space-y-1.5 text-xs">
                {skills.map((grp, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-stone-900">{grp.category}: </span>
                    <span className="text-stone-700">{grp.items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2
              className="text-center font-serif text-xs uppercase tracking-widest font-bold pb-1 border-b border-stone-300 mb-2"
              style={{ color }}
            >
              — Key Engagements & Projects —
            </h2>
            <div className="space-y-2 text-xs">
              {projects.map((p) => (
                <div key={p.id}>
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>{p.title} {p.role && <span className="font-normal italic">({p.role})</span>}</span>
                    {p.link && <span className="text-[10px] text-stone-500">{p.link.replace(/^https?:\/\//, '')}</span>}
                  </div>
                  {p.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-stone-700 text-xs mt-0.5">
                      {p.description.map((b, i) => (
                        <li key={i}>{b}</li>
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
          <div className="grid grid-cols-2 gap-5 pt-2 border-t border-stone-200">
            {certifications && certifications.length > 0 && (
              <div>
                <h3 className="font-serif text-xs uppercase font-bold text-stone-900 mb-1" style={{ color }}>
                  Certifications
                </h3>
                <div className="space-y-0.5 text-xs">
                  {certifications.map((c) => (
                    <p key={c.id} className="text-stone-700">{c.name} — {c.issuer}</p>
                  ))}
                </div>
              </div>
            )}
            {languages && languages.length > 0 && (
              <div>
                <h3 className="font-serif text-xs uppercase font-bold text-stone-900 mb-1" style={{ color }}>
                  Languages
                </h3>
                <div className="space-y-0.5 text-xs">
                  {languages.map((l, i) => (
                    <p key={i} className="text-stone-700">{l.language} ({l.proficiency})</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Custom Sections */}
        {customSections && customSections.map((sec) => (
          <div key={sec.id}>
            <h2
              className="text-center font-serif text-xs uppercase tracking-widest font-bold pb-1 border-b border-stone-300 mb-2"
              style={{ color }}
            >
              — {sec.heading} —
            </h2>
            <div className="space-y-2 text-xs">
              {sec.items.map((it, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>{it.title}</span>
                    {it.date && <span className="font-normal text-stone-500">{it.date}</span>}
                  </div>
                  {it.subtitle && <p className="italic text-stone-700">{it.subtitle}</p>}
                  {it.description && <p className="text-stone-600 mt-0.5">{it.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
