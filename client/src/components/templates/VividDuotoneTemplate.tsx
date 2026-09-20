import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getFontSizeClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Sparkles, FolderGit2, Award, BookOpen, Layers } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const VividDuotoneTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const primaryColor = getEffectiveColor(style, '#8b5cf6');
  const secondaryColor = style.isMonochrome ? '#334155' : '#06b6d4';
  const fontClass = getFontFamilyClass(style.fontFamily);
  const size = getFontSizeClasses(style.fontSize);

  return (
    <div className={`w-full min-h-[297mm] bg-white text-slate-800 ${fontClass} flex flex-row items-stretch`}>
      {/* Vivid Colored Left Column (36%) */}
      <div
        className="w-[36%] p-6 text-white flex flex-col justify-between relative overflow-hidden"
        style={{
          background: style.isMonochrome
            ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
            : `linear-gradient(180deg, ${primaryColor} 0%, #3b82f6 60%, ${secondaryColor} 100%)`,
        }}
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-40 h-40 bg-black/15 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Avatar & Title */}
          <div className="text-center pt-2">
            {style.showPhoto && personalInfo.photoUrl ? (
              <div className="relative inline-block mb-3">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.fullName}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white/40 shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-slate-950" />
                </div>
              </div>
            ) : null}

            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
              {personalInfo.fullName || 'Your Full Name'}
            </h1>
            <p className="text-xs text-cyan-200 font-semibold tracking-wide mt-1 uppercase">
              {personalInfo.jobTitle || 'Your Title'}
            </p>
          </div>

          {/* Contact Details */}
          <div className="pt-2 border-t border-white/20 space-y-2 text-[11px] text-white/90">
            <h3 className="font-bold uppercase tracking-wider text-xs text-cyan-200 flex items-center gap-1.5">
              <span>Contact</span>
            </h3>
            {personalInfo.email && (
              <div className="flex items-center gap-2 bg-black/15 p-1.5 rounded-lg backdrop-blur-xs">
                <Mail className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2 bg-black/15 p-1.5 rounded-lg backdrop-blur-xs">
                <Phone className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2 bg-black/15 p-1.5 rounded-lg backdrop-blur-xs">
                <MapPin className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2 bg-black/15 p-1.5 rounded-lg backdrop-blur-xs">
                <Globe className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
                <span className="truncate">{personalInfo.website.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2 bg-black/15 p-1.5 rounded-lg backdrop-blur-xs">
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
                <span className="truncate">{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-2 bg-black/15 p-1.5 rounded-lg backdrop-blur-xs">
                <GithubIcon className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
                <span className="truncate">{personalInfo.github.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
          </div>

          {/* Skills with colorful chips */}
          {skills && skills.length > 0 && (
            <div className="pt-2 border-t border-white/20 space-y-2.5">
              <h3 className="font-bold uppercase tracking-wider text-xs text-cyan-200 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Skills & Matrix</span>
              </h3>
              {skills.map((grp, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[11px] font-bold text-white/90">{grp.category}</p>
                  <div className="flex flex-wrap gap-1">
                    {grp.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-md text-white font-semibold backdrop-blur-xs border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div className="pt-2 border-t border-white/20 space-y-2">
              <h3 className="font-bold uppercase tracking-wider text-xs text-cyan-200 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h3>
              {education.map((edu) => (
                <div key={edu.id} className="bg-black/15 p-2 rounded-lg backdrop-blur-xs space-y-0.5 text-[11px]">
                  <p className="font-bold text-white leading-tight">{edu.degree}</p>
                  <p className="text-cyan-100 font-semibold">{edu.institution}</p>
                  <p className="text-[10px] text-white/70">{edu.startDate} – {edu.endDate}</p>
                  {edu.gpa && <p className="text-[10px] text-emerald-300 font-bold">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <div className="pt-2 border-t border-white/20 space-y-1.5 text-[11px]">
              <h3 className="font-bold uppercase tracking-wider text-xs text-cyan-200">Languages</h3>
              {languages.map((l, i) => (
                <div key={i} className="flex justify-between text-white/90 bg-black/15 px-2 py-1 rounded">
                  <span className="font-semibold">{l.language}</span>
                  <span className="text-cyan-100 text-[10px]">{l.proficiency}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Column (64%) */}
      <div className="w-[64%] p-7 space-y-5 bg-white">
        {/* Executive Summary */}
        {personalInfo.summary && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 space-y-1">
            <h2
              className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              style={{ color: primaryColor }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Mission & Summary</span>
            </h2>
            <p className={`text-slate-700 leading-relaxed ${size.body}`}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience Section */}
        {experience && experience.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: primaryColor }}>
              <div
                className="w-6 h-6 rounded-lg text-white flex items-center justify-center font-bold text-xs shadow-sm"
                style={{ backgroundColor: primaryColor }}
              >
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                Experience & Track Record
              </h2>
            </div>

            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 space-y-1" style={{ borderColor: primaryColor }}>
                  <div
                    className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ring-2 ring-white"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-bold text-slate-900 text-xs">{exp.jobTitle}</h3>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor,
                      }}
                    >
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                    <span style={{ color: primaryColor }}>{exp.company}</span>
                    {exp.location && <span className="text-slate-500 font-normal">• {exp.location}</span>}
                  </div>
                  <ul className="list-disc list-outside ml-3.5 space-y-1 text-slate-700 pt-1">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className={`${size.body} leading-relaxed`}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: primaryColor }}>
              <div
                className="w-6 h-6 rounded-lg text-white flex items-center justify-center font-bold text-xs shadow-sm"
                style={{ backgroundColor: primaryColor }}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                Featured Projects
              </h2>
            </div>

            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl border border-slate-150 bg-slate-50/70 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-xs">{proj.title}</h3>
                    {proj.role && <span className="text-[10px] text-slate-500">{proj.role}</span>}
                  </div>
                  {proj.link && (
                    <p className="text-[10px] font-medium" style={{ color: primaryColor }}>{proj.link}</p>
                  )}
                  <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-slate-700">
                    {proj.description.map((desc, dIdx) => (
                      <li key={dIdx} className={`${size.body} leading-relaxed`}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2 pb-1 border-b-2" style={{ borderColor: primaryColor }}>
              <div
                className="w-6 h-6 rounded-lg text-white flex items-center justify-center font-bold text-xs shadow-sm"
                style={{ backgroundColor: primaryColor }}
              >
                <Award className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                Certifications & Honors
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certifications.map((c) => (
                <div key={c.id} className="p-2 rounded-lg bg-slate-50 border border-slate-150 text-[11px] flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900">{c.name}</p>
                    <p className="text-[10px] text-slate-500">{c.issuer}</p>
                  </div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-700 border">
                    {c.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
