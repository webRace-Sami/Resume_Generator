import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getFontSizeClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Award, BookOpen, User } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const CreativeSidebarTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#7c3aed');
  const fontClass = getFontFamilyClass(style.fontFamily);
  const size = getFontSizeClasses(style.fontSize);

  return (
    <div className={`w-full min-h-[297mm] bg-white text-slate-800 ${fontClass} flex flex-row items-stretch`}>
      {/* Left Sidebar (35% width) */}
      <div
        className="w-[35%] p-6 text-white flex flex-col justify-between"
        style={{ backgroundColor: style.isMonochrome ? '#1e293b' : color }}
      >
        <div className="space-y-5">
          {/* Photo & Name in Sidebar */}
          <div className="text-center">
            {style.showPhoto && personalInfo.photoUrl ? (
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.fullName}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white/30 shadow-md mb-3"
              />
            ) : (
              <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-3">
                <User className="w-10 h-10 text-white/70" />
              </div>
            )}
            <h1 className="text-xl font-bold tracking-tight text-white leading-tight">
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <p className="text-xs text-white/80 font-medium mt-1">
              {personalInfo.jobTitle || 'Your Title'}
            </p>
          </div>

          {/* Contact Details */}
          <div className="pt-2 border-t border-white/20 space-y-2 text-[11px] text-white/90">
            <h3 className="font-bold uppercase tracking-wider text-xs text-white/70 mb-2">Contact</h3>
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span className="truncate">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span className="truncate">{personalInfo.website.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span className="truncate">{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span className="truncate">{personalInfo.github.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
          </div>

          {/* Skills in Sidebar */}
          {skills && skills.length > 0 && (
            <div className="pt-2 border-t border-white/20 space-y-2">
              <h3 className="font-bold uppercase tracking-wider text-xs text-white/70">Expertise</h3>
              {skills.map((grp, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[11px] font-semibold text-white/95">{grp.category}</p>
                  <div className="flex flex-wrap gap-1">
                    {grp.items.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-white/15 px-1.5 py-0.5 rounded text-white font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education in Sidebar */}
          {education && education.length > 0 && (
            <div className="pt-2 border-t border-white/20 space-y-2">
              <h3 className="font-bold uppercase tracking-wider text-xs text-white/70 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Education
              </h3>
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px] text-white/90">
                  <p className="font-bold text-white leading-tight">{edu.degree}</p>
                  <p className="text-white/80">{edu.institution}</p>
                  <p className="text-[10px] text-white/60">{edu.startDate} – {edu.endDate}</p>
                  {edu.gpa && <p className="text-[10px] text-white/80">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <div className="pt-2 border-t border-white/20 space-y-1 text-[11px]">
              <h3 className="font-bold uppercase tracking-wider text-xs text-white/70">Languages</h3>
              {languages.map((l, i) => (
                <div key={i} className="flex justify-between text-white/90">
                  <span>{l.language}</span>
                  <span className="text-white/70">{l.proficiency}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Main Content (65% width) */}
      <div className="w-[65%] p-7 space-y-5 bg-white">
        {/* Summary */}
        {personalInfo.summary && (
          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest pb-1 border-b mb-2 flex items-center gap-1.5"
              style={{ color, borderColor: `${color}30` }}
            >
              Profile Overview
            </h2>
            <p className={`text-slate-600 leading-relaxed ${size.body}`}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest pb-1 border-b mb-3"
              style={{ color, borderColor: `${color}30` }}
            >
              Work Experience
            </h2>
            <div className="space-y-3.5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">{exp.jobTitle}</h3>
                    <span className="text-[11px] font-medium text-slate-500">
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-xs font-semibold mb-1" style={{ color }}>
                    {exp.company} {exp.location && <span className="font-normal text-slate-400">| {exp.location}</span>}
                  </div>
                  {exp.description && (
                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 text-xs">
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

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest pb-1 border-b mb-3"
              style={{ color, borderColor: `${color}30` }}
            >
              Key Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-slate-900">
                      {proj.title} {proj.role && <span className="font-normal text-slate-500">({proj.role})</span>}
                    </h3>
                    {proj.link && (
                      <span className="text-[10px] text-sky-600 hover:underline">
                        {proj.link.replace(/^https?:\/\//, '')}
                      </span>
                    )}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <p className="text-[10px] text-slate-500 font-mono mb-0.5">
                      {proj.technologies.join(' • ')}
                    </p>
                  )}
                  {proj.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-600 text-xs">
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

        {/* Certifications & Custom Sections */}
        {certifications && certifications.length > 0 && (
          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest pb-1 border-b mb-2 flex items-center gap-1.5"
              style={{ color, borderColor: `${color}30` }}
            >
              <Award className="w-3.5 h-3.5" /> Certifications & Awards
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              {certifications.map((c) => (
                <div key={c.id}>
                  <span className="font-semibold text-slate-900">{c.name}</span> – {c.issuer} {c.date ? `(${c.date})` : ''}
                </div>
              ))}
            </div>
          </div>
        )}

        {customSections && customSections.map((sec) => (
          <div key={sec.id}>
            <h2
              className="text-xs font-bold uppercase tracking-widest pb-1 border-b mb-2"
              style={{ color, borderColor: `${color}30` }}
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
                  {it.subtitle && <p className="text-slate-600 italic">{it.subtitle}</p>}
                  {it.description && <p className="text-slate-600 mt-0.5">{it.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
