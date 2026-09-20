import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getFontSizeClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Sparkles, FolderGit2, Award, Languages, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const EmeraldMintTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const emerald = getEffectiveColor(style, '#059669');
  const fontClass = getFontFamilyClass(style.fontFamily);
  const size = getFontSizeClasses(style.fontSize);

  const headerBg = style.isMonochrome
    ? '#f8fafc'
    : 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #e0f2fe 100%)';
  const badgeBg = style.isMonochrome ? '#e2e8f0' : '#d1fae5';
  const badgeText = style.isMonochrome ? '#0f172a' : '#065f46';

  return (
    <div className={`w-full min-h-[297mm] bg-white text-slate-800 ${fontClass} flex flex-col justify-between`}>
      <div>
        {/* Top Header Card with Botanical / Mint Palette */}
        <div
          className="p-7 border-b-2 relative overflow-hidden"
          style={{ background: headerBg, borderColor: emerald }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10">
            {style.showPhoto && personalInfo.photoUrl && (
              <div className="shrink-0 relative">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.fullName}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-lg border-4 border-white"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full text-white flex items-center justify-center shadow"
                  style={{ backgroundColor: emerald }}
                >
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            )}

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                  {personalInfo.fullName || 'Your Full Name'}
                </h1>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider self-center sm:self-auto shadow-xs"
                  style={{ backgroundColor: emerald, color: '#ffffff' }}
                >
                  {personalInfo.jobTitle || 'Your Title'}
                </span>
              </div>

              {/* Contact Pills */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-slate-700 font-medium">
                {personalInfo.email && (
                  <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-lg shadow-xs">
                    <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-lg shadow-xs">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-lg shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-lg shadow-xs">
                    <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-lg shadow-xs">
                    <LinkedinIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.github && (
                  <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-lg shadow-xs">
                    <GithubIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{personalInfo.github.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-7 space-y-6">
          {/* Summary */}
          {personalInfo.summary && (
            <div className="p-4 rounded-xl border-l-4 bg-emerald-50/40 border-emerald-500 space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Executive Summary</span>
              </h2>
              <p className={`text-slate-700 leading-relaxed ${size.body}`}>
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* 2-Column Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Column (8 cols) */}
            <div className="md:col-span-8 space-y-5">
              {/* Experience */}
              {experience && experience.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3.5 pb-1 border-b" style={{ borderColor: `${emerald}30` }}>
                    <span
                      className="px-2.5 py-1 rounded-lg text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs"
                      style={{ backgroundColor: emerald }}
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Work Experience</span>
                    </span>
                  </div>

                  <div className="space-y-4">
                    {experience.map((exp) => (
                      <div
                        key={exp.id}
                        className="pl-3.5 border-l-2 space-y-1 relative"
                        style={{ borderColor: emerald }}
                      >
                        <div
                          className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ring-2 ring-white"
                          style={{ backgroundColor: emerald }}
                        />
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h3 className="font-bold text-slate-900 text-xs">{exp.jobTitle}</h3>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: badgeBg, color: badgeText }}
                          >
                            {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold">
                          <span style={{ color: emerald }}>{exp.company}</span>
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

              {/* Key Projects */}
              {projects && projects.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b" style={{ borderColor: `${emerald}30` }}>
                    <span
                      className="px-2.5 py-1 rounded-lg text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs"
                      style={{ backgroundColor: emerald }}
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>Projects & Deliverables</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    {projects.map((proj) => (
                      <div key={proj.id} className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/30 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 text-xs">{proj.title}</h3>
                          {proj.role && <span className="text-[10px] text-slate-500">{proj.role}</span>}
                        </div>
                        {proj.link && (
                          <p className="text-[10px] font-medium" style={{ color: emerald }}>{proj.link}</p>
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
                                className="text-[9px] font-semibold px-2 py-0.5 rounded bg-white text-emerald-800 border border-emerald-200"
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

            {/* Sidebar Column (4 cols) */}
            <div className="md:col-span-4 space-y-5">
              {/* Skills */}
              {skills && skills.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b" style={{ borderColor: `${emerald}30` }}>
                    <span
                      className="px-2.5 py-1 rounded-lg text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs"
                      style={{ backgroundColor: emerald }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Skills</span>
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {skills.map((grp, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl border border-emerald-100 bg-emerald-50/40 space-y-1">
                        <p className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider">
                          {grp.category}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {grp.items.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white text-emerald-900 border border-emerald-200 shadow-2xs"
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
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b" style={{ borderColor: `${emerald}30` }}>
                    <span
                      className="px-2.5 py-1 rounded-lg text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs"
                      style={{ backgroundColor: emerald }}
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Education</span>
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {education.map((edu) => (
                      <div key={edu.id} className="p-2.5 rounded-xl border border-slate-150 bg-slate-50/50 space-y-0.5">
                        <h3 className="font-bold text-slate-900 text-xs leading-snug">{edu.degree}</h3>
                        <p className="text-[11px] font-semibold" style={{ color: emerald }}>{edu.institution}</p>
                        <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                          <span>{edu.startDate} – {edu.endDate}</span>
                          {edu.gpa && <span className="font-bold text-emerald-700">GPA: {edu.gpa}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications && certifications.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b" style={{ borderColor: `${emerald}30` }}>
                    <span
                      className="px-2.5 py-1 rounded-lg text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs"
                      style={{ backgroundColor: emerald }}
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Certifications</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {certifications.map((c) => (
                      <div key={c.id} className="p-2 rounded-lg bg-emerald-50/40 border border-emerald-150 text-[11px] flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-900">{c.name}</p>
                          <p className="text-[10px] text-slate-500">{c.issuer}</p>
                        </div>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-emerald-800 border border-emerald-200">
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
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b" style={{ borderColor: `${emerald}30` }}>
                    <span
                      className="px-2.5 py-1 rounded-lg text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs"
                      style={{ backgroundColor: emerald }}
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span>Languages</span>
                    </span>
                  </div>
                  <div className="space-y-1">
                    {languages.map((l, i) => (
                      <div key={i} className="flex justify-between text-[11px] p-1.5 bg-slate-50 rounded border border-slate-100">
                        <span className="font-bold text-slate-800">{l.language}</span>
                        <span className="text-emerald-700 text-[10px] font-semibold">{l.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer stripe */}
      <div className="h-2 w-full" style={{ backgroundColor: emerald }} />
    </div>
  );
};
