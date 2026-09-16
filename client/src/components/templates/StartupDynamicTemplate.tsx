import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { Zap, Rocket, Sparkles, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const StartupDynamicTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#e11d48');
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-white text-slate-800 font-["Plus_Jakarta_Sans",sans-serif] ${space.padding} flex flex-col justify-start`}>
      {/* Dynamic Header */}
      <div className={`rounded-xl p-5 mb-5 border-2`} style={{ borderColor: style.isMonochrome ? '#e2e8f0' : `${color}25`, backgroundColor: style.isMonochrome ? '#f8fafc' : `${color}06` }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 border" style={{ backgroundColor: style.isMonochrome ? '#ffffff' : `${color}15`, borderColor: style.isMonochrome ? '#cbd5e1' : `${color}30`, color }}>
              <Zap className="w-3 h-3" /> Growth & Impact
            </div>
            <h1 className={`${size.name} font-extrabold tracking-tight text-slate-900`}>
              {personalInfo.fullName || 'Candidate Name'}
            </h1>
            <p className={`${size.title} font-bold mt-0.5`} style={{ color }}>
              {personalInfo.jobTitle || 'Product Growth Lead'}
            </p>

            <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-slate-600 ${size.small}`}>
              {personalInfo.email && (
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {personalInfo.email}</span>
              )}
              {personalInfo.phone && (
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {personalInfo.phone}</span>
              )}
              {personalInfo.location && (
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {personalInfo.location}</span>
              )}
              {personalInfo.website && (
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {personalInfo.website.replace(/^https?:\/\//, '')}</span>
              )}
              {personalInfo.linkedin && (
                <span className="flex items-center gap-1"><LinkedinIcon className="w-3 h-3" /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
              )}
              {personalInfo.github && (
                <span className="flex items-center gap-1"><GithubIcon className="w-3 h-3" /> {personalInfo.github.replace(/^https?:\/\//, '')}</span>
              )}
            </div>
          </div>

          {style.showPhoto && personalInfo.photoUrl && (
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.fullName}
              className="w-20 h-20 rounded-xl object-cover shadow-sm border-2"
              style={{ borderColor: color }}
            />
          )}
        </div>

        {personalInfo.summary && (
          <p className={`mt-3 text-slate-700 leading-relaxed ${size.body}`}>
            {personalInfo.summary}
          </p>
        )}
      </div>

      {/* Main Grid */}
      <div className={space.sectionGap}>
        {/* Experience with Timeline styling */}
        {experience && experience.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-extrabold uppercase tracking-wider mb-3 flex items-center gap-2`}
              style={{ color }}
            >
              <Rocket className="w-4 h-4" /> Track Record & Experience
            </h2>
            <div className="relative border-l-2 ml-2 pl-4 space-y-3.5" style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}>
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div
                    className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">{exp.jobTitle}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border" style={{ backgroundColor: style.isMonochrome ? '#f1f5f9' : `${color}10`, borderColor: style.isMonochrome ? '#cbd5e1' : `${color}30`, color }}>
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mb-1">
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </div>
                  {exp.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-600 text-xs">
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

        {/* Skills Tag Cloud */}
        {skills && skills.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-extrabold uppercase tracking-wider mb-2.5 flex items-center gap-2`}
              style={{ color }}
            >
              <Sparkles className="w-4 h-4" /> Superpowers & Skills
            </h2>
            <div className="space-y-1.5">
              {skills.map((grp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span className="font-bold text-slate-800 min-w-[120px]">{grp.category}:</span>
                  <div className="flex flex-wrap gap-1">
                    {grp.items.map((it, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[11px] font-semibold border shadow-2xs"
                        style={{
                          backgroundColor: style.isMonochrome ? '#f1f5f9' : `${color}08`,
                          borderColor: style.isMonochrome ? '#e2e8f0' : `${color}25`,
                          color: style.isMonochrome ? '#1e293b' : color,
                        }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-extrabold uppercase tracking-wider mb-2.5 flex items-center gap-2`}
              style={{ color }}
            >
              <Zap className="w-4 h-4" /> High-Impact Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {projects.map((proj) => (
                <div key={proj.id} className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 text-xs">
                      {proj.title} {proj.role && <span className="font-normal text-slate-500">({proj.role})</span>}
                    </h3>
                    {proj.link && <span className="text-[10px] text-sky-600">{proj.link.replace(/^https?:\/\//, '')}</span>}
                  </div>
                  {proj.technologies && (
                    <p className="text-[10px] font-mono text-slate-500 my-0.5">{proj.technologies.join(' • ')}</p>
                  )}
                  {proj.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-600 text-xs mt-1">
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

        {/* Education & Certifications */}
        <div className="grid grid-cols-2 gap-4">
          {education && education.length > 0 && (
            <div>
              <h3 className="font-bold text-xs uppercase mb-1.5" style={{ color }}>Education</h3>
              <div className="space-y-1.5 text-xs">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-bold text-slate-900">{edu.degree}</p>
                    <p className="text-slate-600">{edu.institution} ({edu.startDate} – {edu.endDate})</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications && certifications.length > 0 && (
            <div>
              <h3 className="font-bold text-xs uppercase mb-1.5" style={{ color }}>Certifications</h3>
              <div className="space-y-1 text-xs">
                {certifications.map((c) => (
                  <div key={c.id}>
                    <p className="font-bold text-slate-900">{c.name}</p>
                    <p className="text-slate-500 text-[11px]">{c.issuer} ({c.date})</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Languages & Custom Sections */}
        {((languages && languages.length > 0) || (customSections && customSections.length > 0)) && (
          <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
            {languages && languages.length > 0 && (
              <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-700 text-[11px] mb-1">Languages</h3>
                <p className="text-slate-600">{languages.map(l => `${l.language} (${l.proficiency})`).join(' • ')}</p>
              </div>
            )}
            {customSections && customSections.map((sec) => (
              <div key={sec.id}>
                <h2 className={`${size.heading} font-extrabold uppercase tracking-wider mb-2`} style={{ color }}>
                  {sec.heading}
                </h2>
                <div className="space-y-2">
                  {sec.items.map((it, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{it.title}</span>
                        {it.date && <span className="font-normal text-slate-500">{it.date}</span>}
                      </div>
                      {it.subtitle && <p className="text-slate-600 italic">{it.subtitle}</p>}
                      {it.description && <p className="text-slate-600 mt-0.5">{it.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
