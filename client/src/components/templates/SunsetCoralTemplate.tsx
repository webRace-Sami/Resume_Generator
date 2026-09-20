import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getFontSizeClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Sparkles, FolderGit2, Award, Languages, Flame } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const SunsetCoralTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const coral = getEffectiveColor(style, '#e11d48');
  const amber = style.isMonochrome ? '#475569' : '#d97706';
  const fontClass = getFontFamilyClass(style.fontFamily);
  const size = getFontSizeClasses(style.fontSize);

  const headerGradient = style.isMonochrome
    ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
    : `linear-gradient(135deg, ${coral} 0%, #f43f5e 40%, ${amber} 100%)`;

  const badgeBg = style.isMonochrome ? '#f1f5f9' : '#fff1f2';
  const badgeText = style.isMonochrome ? '#0f172a' : '#be123c';

  return (
    <div className={`w-full min-h-[297mm] bg-white text-slate-800 ${fontClass} flex flex-col justify-between`}>
      <div>
        {/* Top Warm Sunset Gradient Banner */}
        <div
          className="p-8 text-white relative overflow-hidden shadow-md"
          style={{ background: headerGradient }}
        >
          {/* Subtle Warm Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-rose-900/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
            {style.showPhoto && personalInfo.photoUrl && (
              <div className="shrink-0 relative">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.fullName}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white/50 shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-slate-950" />
                </div>
              </div>
            )}

            <div className="flex-1 text-center sm:text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                {personalInfo.fullName || 'Your Full Name'}
              </h1>
              <div className="inline-block px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-amber-200 font-bold text-xs uppercase tracking-wider border border-white/20">
                {personalInfo.jobTitle || 'Your Title'}
              </div>

              {/* Contact Details */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-white/95 font-medium">
                {personalInfo.email && (
                  <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <Mail className="w-3 h-3 text-amber-300" />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <Phone className="w-3 h-3 text-amber-300" />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <MapPin className="w-3 h-3 text-amber-300" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <Globe className="w-3 h-3 text-amber-300" />
                    <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <LinkedinIcon className="w-3 h-3 text-amber-300" />
                    <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.github && (
                  <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <GithubIcon className="w-3 h-3 text-amber-300" />
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
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/40 space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>Executive Profile</span>
              </h2>
              <p className={`text-slate-700 leading-relaxed ${size.body}`}>
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left 7 Columns: Experience & Projects */}
            <div className="md:col-span-7 space-y-5">
              {/* Experience */}
              {experience && experience.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3.5 pb-1 border-b-2" style={{ borderColor: coral }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: coral }}>
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Work Experience
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {experience.map((exp) => (
                      <div
                        key={exp.id}
                        className="pl-3.5 border-l-2 space-y-1 relative"
                        style={{ borderColor: coral }}
                      >
                        <div
                          className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ring-2 ring-white"
                          style={{ backgroundColor: coral }}
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
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                          <span style={{ color: coral }}>{exp.company}</span>
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
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: coral }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: coral }}>
                      <FolderGit2 className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Key Projects & Portfolio
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {projects.map((proj) => (
                      <div key={proj.id} className="p-3 rounded-xl border border-rose-100 bg-rose-50/20 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 text-xs">{proj.title}</h3>
                          {proj.role && <span className="text-[10px] text-slate-500">{proj.role}</span>}
                        </div>
                        {proj.link && (
                          <p className="text-[10px] font-medium" style={{ color: coral }}>{proj.link}</p>
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
                                className="text-[9px] font-semibold px-2 py-0.5 rounded bg-white text-rose-800 border border-rose-200"
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

            {/* Right 5 Columns: Skills, Education, Certs */}
            <div className="md:col-span-5 space-y-5">
              {/* Skills */}
              {skills && skills.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: coral }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: coral }}>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Core Skills
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {skills.map((grp, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl border border-rose-100 bg-rose-50/30 space-y-1">
                        <p className="text-[11px] font-bold text-rose-950 uppercase tracking-wider">
                          {grp.category}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {grp.items.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white text-rose-900 border border-rose-200 shadow-2xs"
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
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: coral }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: coral }}>
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Education
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {education.map((edu) => (
                      <div key={edu.id} className="p-2.5 rounded-xl border border-slate-150 bg-slate-50/50 space-y-0.5">
                        <h3 className="font-bold text-slate-900 text-xs leading-snug">{edu.degree}</h3>
                        <p className="text-[11px] font-semibold" style={{ color: coral }}>{edu.institution}</p>
                        <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                          <span>{edu.startDate} – {edu.endDate}</span>
                          {edu.gpa && <span className="font-bold text-amber-700">GPA: {edu.gpa}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications && certifications.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b-2" style={{ borderColor: coral }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: coral }}>
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Certifications
                    </h2>
                  </div>
                  <div className="space-y-1.5">
                    {certifications.map((c) => (
                      <div key={c.id} className="p-2 rounded-lg bg-rose-50/30 border border-rose-150 text-[11px] flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-900">{c.name}</p>
                          <p className="text-[10px] text-slate-500">{c.issuer}</p>
                        </div>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-rose-800 border border-rose-200">
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
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b-2" style={{ borderColor: coral }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: coral }}>
                      <Languages className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Languages
                    </h2>
                  </div>
                  <div className="space-y-1">
                    {languages.map((l, i) => (
                      <div key={i} className="flex justify-between text-[11px] p-1.5 bg-slate-50 rounded border border-slate-100">
                        <span className="font-bold text-slate-800">{l.language}</span>
                        <span className="text-rose-700 text-[10px] font-semibold">{l.proficiency}</span>
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
      <div className="h-2 w-full" style={{ background: headerGradient }} />
    </div>
  );
};
