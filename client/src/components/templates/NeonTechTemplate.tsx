import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getFontSizeClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Terminal, FolderGit2, Award, Languages, Cpu } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const NeonTechTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const cyan = getEffectiveColor(style, '#06b6d4');
  const violet = style.isMonochrome ? '#475569' : '#8b5cf6';
  const fontClass = getFontFamilyClass(style.fontFamily);
  const size = getFontSizeClasses(style.fontSize);

  const headerBg = style.isMonochrome
    ? '#0f172a'
    : 'linear-gradient(135deg, #090d16 0%, #0f172a 60%, #1e1b4b 100%)';

  const tagBg = style.isMonochrome ? '#f1f5f9' : '#ecfeff';
  const tagText = style.isMonochrome ? '#0f172a' : '#0e7490';

  return (
    <div className={`w-full min-h-[297mm] bg-white text-slate-800 ${fontClass} flex flex-col justify-between`}>
      <div>
        {/* Dark High-Contrast Cyber Neon Header */}
        <div
          className="p-8 text-white relative overflow-hidden shadow-lg"
          style={{ background: headerBg }}
        >
          {/* Cyber Neon Glows */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
            {style.showPhoto && personalInfo.photoUrl && (
              <div className="shrink-0 relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-xl">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            )}

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  [SYSTEM // ENGINEER]
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                {personalInfo.fullName || 'Your Full Name'}
              </h1>

              <div className="inline-block px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold tracking-wide">
                &gt; {personalInfo.jobTitle || 'Your Title'}
              </div>

              {/* Contact details in tech tags */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-slate-300 font-mono">
                {personalInfo.email && (
                  <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-2.5 py-1 rounded-md">
                    <Mail className="w-3 h-3 text-cyan-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-2.5 py-1 rounded-md">
                    <Phone className="w-3 h-3 text-cyan-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-2.5 py-1 rounded-md">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-2.5 py-1 rounded-md">
                    <LinkedinIcon className="w-3 h-3 text-cyan-400" />
                    <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.github && (
                  <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-2.5 py-1 rounded-md">
                    <GithubIcon className="w-3 h-3 text-cyan-400" />
                    <span>{personalInfo.github.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-7 space-y-6">
          {/* Summary Box */}
          {personalInfo.summary && (
            <div className="p-4 rounded-xl border border-cyan-100 bg-cyan-50/30 space-y-1">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-900 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-600" />
                <span>Executive Summary & Objectives</span>
              </h2>
              <p className={`text-slate-700 leading-relaxed ${size.body}`}>
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left 7 Cols: Experience & Projects */}
            <div className="md:col-span-7 space-y-5">
              {/* Experience */}
              {experience && experience.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3.5 pb-1 border-b-2" style={{ borderColor: cyan }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: cyan }}>
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono">
                      // Experience Timeline
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {experience.map((exp) => (
                      <div
                        key={exp.id}
                        className="pl-3.5 border-l-2 space-y-1 relative"
                        style={{ borderColor: cyan }}
                      >
                        <div
                          className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ring-2 ring-white"
                          style={{ backgroundColor: cyan }}
                        />
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h3 className="font-bold text-slate-900 text-xs">{exp.jobTitle}</h3>
                          <span
                            className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: tagBg, color: tagText }}
                          >
                            {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                          <span style={{ color: cyan }}>{exp.company}</span>
                          {exp.location && <span className="text-slate-500 font-normal font-mono">• {exp.location}</span>}
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
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: cyan }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: cyan }}>
                      <FolderGit2 className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono">
                      // Built Projects & Systems
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {projects.map((proj) => (
                      <div key={proj.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 text-xs">{proj.title}</h3>
                          {proj.role && <span className="text-[10px] text-slate-500 font-mono">{proj.role}</span>}
                        </div>
                        {proj.link && (
                          <p className="text-[10px] font-mono font-medium truncate" style={{ color: cyan }}>
                            {proj.link}
                          </p>
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
                                className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-200"
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
            </div>

            {/* Right 5 Cols: Skills, Education, Certs */}
            <div className="md:col-span-5 space-y-5">
              {/* Skills */}
              {skills && skills.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: cyan }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: cyan }}>
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono">
                      // Tech Stack
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {skills.map((grp, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-1">
                        <p className="text-[11px] font-bold font-mono text-slate-900 uppercase tracking-wider">
                          &gt; {grp.category}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {grp.items.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border"
                              style={{
                                backgroundColor: tagBg,
                                color: tagText,
                                borderColor: `${cyan}40`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {education && education.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: cyan }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: cyan }}>
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono">
                      // Education
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {education.map((edu) => (
                      <div key={edu.id} className="p-2.5 rounded-xl border border-slate-150 bg-slate-50/50 space-y-0.5">
                        <h3 className="font-bold text-slate-900 text-xs leading-snug">{edu.degree}</h3>
                        <p className="text-[11px] font-semibold" style={{ color: cyan }}>{edu.institution}</p>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                          <span>{edu.startDate} – {edu.endDate}</span>
                          {edu.gpa && <span className="font-bold text-cyan-700">GPA: {edu.gpa}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications && certifications.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b-2" style={{ borderColor: cyan }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: cyan }}>
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono">
                      // Certifications
                    </h2>
                  </div>
                  <div className="space-y-1.5">
                    {certifications.map((c) => (
                      <div key={c.id} className="p-2 rounded-lg bg-slate-50 border border-slate-150 text-[11px] flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-900">{c.name}</p>
                          <p className="text-[10px] text-slate-500 font-mono">{c.issuer}</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-cyan-800 border border-cyan-200">
                          {c.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {languages && languages.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b-2" style={{ borderColor: cyan }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: cyan }}>
                      <Languages className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono">
                      // Languages
                    </h2>
                  </div>
                  <div className="space-y-1">
                    {languages.map((l, i) => (
                      <div key={i} className="flex justify-between text-[11px] p-1.5 bg-slate-50 rounded border border-slate-100 font-mono">
                        <span className="font-bold text-slate-800">{l.language}</span>
                        <span className="text-cyan-700 text-[10px] font-semibold">{l.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cyber neon gradient bar */}
      <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600" />
    </div>
  );
};
