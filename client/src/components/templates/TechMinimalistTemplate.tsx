import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { Terminal, Code, Cpu, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';

export const TechMinimalistTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#059669');
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-slate-50 text-slate-900 font-["JetBrains_Mono",monospace] ${space.padding} flex flex-col justify-start`}>
      {/* Tech Header */}
      <div className={`bg-white rounded-lg border p-4 shadow-sm ${space.marginB}`} style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="w-5 h-5" style={{ color }} />
              <h1 className={`${size.name} font-bold tracking-tight text-slate-900`}>
                {personalInfo.fullName || 'user@terminal:~$'}
              </h1>
            </div>
            <p className={`${size.title} font-medium flex items-center gap-2`} style={{ color }}>
              <span className="text-slate-400">&gt;</span> {personalInfo.jobTitle || 'Software Architect'}
            </p>

            <div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2.5 text-slate-600 ${size.small}`}>
              {personalInfo.email && (
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  <Mail className="w-3 h-3" /> {personalInfo.email}
                </span>
              )}
              {personalInfo.phone && (
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  <Phone className="w-3 h-3" /> {personalInfo.phone}
                </span>
              )}
              {personalInfo.location && (
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  <MapPin className="w-3 h-3" /> {personalInfo.location}
                </span>
              )}
              {personalInfo.github && (
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-800 font-semibold">
                  <GithubIcon className="w-3 h-3" /> {personalInfo.github.replace(/^https?:\/\//, '')}
                </span>
              )}
              {personalInfo.website && (
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  <Globe className="w-3 h-3" /> {personalInfo.website.replace(/^https?:\/\//, '')}
                </span>
              )}
            </div>
          </div>

          {style.showPhoto && personalInfo.photoUrl && (
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.fullName}
              className="w-20 h-20 rounded-md object-cover border-2 shadow-sm"
              style={{ borderColor: color }}
            />
          )}
        </div>

        {personalInfo.summary && (
          <div className="mt-3 pt-2.5 border-t border-slate-100 font-sans text-slate-700 leading-relaxed text-xs">
            {personalInfo.summary}
          </div>
        )}
      </div>

      {/* Skills Bar Box */}
      {skills && skills.length > 0 && (
        <div className={`bg-white rounded-lg border p-3.5 shadow-sm ${space.marginB}`} style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}30` }}>
          <div className="flex items-center gap-1.5 mb-2 font-bold text-xs uppercase tracking-wider" style={{ color }}>
            <Cpu className="w-4 h-4" />
            <span>Tech Stack & Competencies</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {skills.map((grp, idx) => (
              <div key={idx} className="bg-slate-50 p-2 rounded border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1 text-[11px]">{grp.category}:</span>
                <div className="flex flex-wrap gap-1">
                  {grp.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 rounded text-[10px] font-medium border"
                      style={{
                        backgroundColor: style.isMonochrome ? '#f1f5f9' : `${color}10`,
                        borderColor: style.isMonochrome ? '#cbd5e1' : `${color}30`,
                        color: style.isMonochrome ? '#0f172a' : color,
                      }}
                    >
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
      <div className={space.sectionGap}>
        {experience && experience.length > 0 && (
          <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}20` }}>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider mb-3 flex items-center gap-2`} style={{ color }}>
              <Code className="w-4 h-4" />
              <span>// Professional Experience</span>
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-2 pl-3 pb-2 last:pb-0" style={{ borderColor: style.isMonochrome ? '#94a3b8' : color }}>
                  <div className="flex justify-between items-baseline">
                    <h3 className={`${size.subheading} font-bold text-slate-900 font-sans`}>{exp.jobTitle}</h3>
                    <span className={`${size.small} font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 border border-slate-200`}>
                      {exp.startDate} ~ {exp.isCurrent ? 'HEAD' : exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mb-1.5 text-xs text-slate-700">
                    <span className="font-semibold text-sky-700">{exp.company}</span>
                    {exp.location && <span className="text-slate-400">{exp.location}</span>}
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 font-sans text-xs">
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

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}20` }}>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider mb-3 flex items-center gap-2`} style={{ color }}>
              <ExternalLink className="w-4 h-4" />
              <span>// Featured Repositories & Systems</span>
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-slate-50 p-2.5 rounded border border-slate-200">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 text-xs font-sans">
                      {proj.title} {proj.role && <span className="text-slate-500 font-normal">({proj.role})</span>}
                    </h3>
                    {proj.link && (
                      <a href={proj.link} className="text-[10px] text-sky-600 hover:underline flex items-center gap-0.5">
                        {proj.link.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 my-1">
                      {proj.technologies.map((t, i) => (
                        <span key={i} className="text-[9px] bg-slate-200 text-slate-700 px-1 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                  {proj.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 font-sans text-xs">
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

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-2 gap-3">
          {education && education.length > 0 && (
            <div className="bg-white rounded-lg border p-3.5 shadow-sm" style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}20` }}>
              <h3 className="font-bold text-xs uppercase mb-2" style={{ color }}>// Education</h3>
              <div className="space-y-1.5 font-sans">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-bold text-slate-900 text-xs">{edu.degree}</p>
                    <p className="text-slate-600 text-[11px]">{edu.institution} ({edu.startDate} - {edu.endDate})</p>
                    {edu.gpa && <p className="text-[10px] text-slate-500">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications && certifications.length > 0 && (
            <div className="bg-white rounded-lg border p-3.5 shadow-sm" style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}20` }}>
              <h3 className="font-bold text-xs uppercase mb-2" style={{ color }}>// Certifications</h3>
              <div className="space-y-1.5 font-sans">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <p className="font-bold text-slate-900 text-xs">{cert.name}</p>
                    <p className="text-slate-600 text-[11px]">{cert.issuer} {cert.date ? `[${cert.date}]` : ''}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Custom Sections & Languages */}
        {((languages && languages.length > 0) || (customSections && customSections.length > 0)) && (
          <div className="bg-white rounded-lg border p-3.5 shadow-sm space-y-2 font-sans text-xs" style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}20` }}>
            {languages && languages.length > 0 && (
              <div>
                <span className="font-bold uppercase text-[11px] block mb-1" style={{ color }}>// Languages</span>
                <p className="text-slate-700">{languages.map(l => `${l.language} (${l.proficiency})`).join(', ')}</p>
              </div>
            )}
            {customSections && customSections.map(sec => (
              <div key={sec.id} className="pt-2 border-t border-slate-100">
                <span className="font-bold uppercase text-[11px] block mb-1" style={{ color }}>// {sec.heading}</span>
                {sec.items.map((it, idx) => (
                  <div key={idx} className="mb-1">
                    <p className="font-bold text-slate-900">{it.title}</p>
                    {it.description && <p className="text-slate-600 text-[11px]">{it.description}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
