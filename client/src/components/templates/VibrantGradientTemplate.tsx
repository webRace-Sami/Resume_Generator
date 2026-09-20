import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Sparkles, FolderGit2, Award, Languages } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const VibrantGradientTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const accent = getEffectiveColor(style, '#6366f1');
  const fontClass = getFontFamilyClass(style.fontFamily);
  const size = getFontSizeClasses(style.fontSize);
  const spacing = getSpacingClasses(style.spacing);

  // Dynamic gradient based on color mode
  const gradientHeaderBg = style.isMonochrome
    ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
    : `linear-gradient(135deg, ${accent} 0%, #ec4899 50%, #f59e0b 100%)`;

  const badgeBg = style.isMonochrome ? '#f1f5f9' : `${accent}15`;
  const badgeText = style.isMonochrome ? '#1e293b' : accent;


  return (
    <div className={`w-full min-h-[297mm] bg-white text-slate-800 ${fontClass} flex flex-col justify-between`}>
      <div>
        {/* Top Vibrant Multi-Color Gradient Banner */}
        <div
          className="p-8 text-white relative overflow-hidden shadow-md"
          style={{ background: gradientHeaderBg }}
        >
          {/* Subtle decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/10 blur-lg pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
            {/* Photo with double glowing border */}
            {style.showPhoto && personalInfo.photoUrl && (
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-white/40 shadow-xl backdrop-blur-sm">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover rounded-xl shadow-inner"
                  />
                </div>
              </div>
            )}

            {/* Name & Title */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
                {personalInfo.fullName || 'Your Full Name'}
              </h1>
              <div className="inline-block px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-white/95 font-semibold text-xs border border-white/20">
                {personalInfo.jobTitle || 'Professional Title'}
              </div>

              {/* Contact Chips */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-white/90">
                {personalInfo.email && (
                  <div className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <Mail className="w-3 h-3 text-white" />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <Phone className="w-3 h-3 text-white" />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <MapPin className="w-3 h-3 text-white" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <Globe className="w-3 h-3 text-white" />
                    <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <LinkedinIcon className="w-3 h-3 text-white" />
                    <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                {personalInfo.github && (
                  <div className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <GithubIcon className="w-3 h-3 text-white" />
                    <span>{personalInfo.github.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className={`p-8 ${spacing.sectionGap}`}>
          {/* Summary */}
          {personalInfo.summary && (
            <div className="p-4 rounded-xl border border-slate-100 shadow-xs" style={{ backgroundColor: `${accent}08` }}>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                style={{ color: badgeText }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Profile</span>
              </h2>
              <p className={`text-slate-700 leading-relaxed ${size.body}`}>
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* 2-Column Split: Left (Experience) & Right (Skills/Education/Projects) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              {/* Work Experience */}
              {experience && experience.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: accent }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: accent }}>
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
                        style={{ borderColor: accent }}
                      >
                        <div
                          className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ring-2 ring-white"
                          style={{ backgroundColor: accent }}
                        />
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h3 className="font-bold text-slate-900 text-xs">{exp.jobTitle}</h3>
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: badgeBg, color: badgeText }}
                          >
                            {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                          <span className="font-bold" style={{ color: accent }}>{exp.company}</span>
                          {exp.location && <span>• {exp.location}</span>}
                        </div>
                        <ul className="list-disc list-outside ml-3.5 space-y-1 text-slate-700 pt-1">
                          {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className={`${size.body} leading-relaxed pl-0.5`}>
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
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: accent }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: accent }}>
                      <FolderGit2 className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Key Projects & Initiatives
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-3 rounded-xl border border-slate-150 bg-slate-50/50 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 text-xs">{proj.title}</h3>
                          {proj.role && (
                            <span className="text-[10px] text-slate-500 font-medium">{proj.role}</span>
                          )}
                        </div>
                        {proj.link && (
                          <p className="text-[10px] font-medium truncate" style={{ color: accent }}>
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
                                className="text-[9px] font-semibold px-2 py-0.5 rounded-md"
                                style={{ backgroundColor: badgeBg, color: badgeText }}
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

            {/* Right Column (5 cols) */}
            <div className="md:col-span-5 space-y-5">
              {/* Skills */}
              {skills && skills.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: accent }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: accent }}>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Skills & Stack
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {skills.map((grp, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl border border-slate-100 bg-white shadow-xs space-y-1">
                        <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                          {grp.category}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {grp.items.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-bold px-2 py-0.5 rounded-md border"
                              style={{
                                backgroundColor: badgeBg,
                                color: badgeText,
                                borderColor: `${accent}30`,
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
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b-2" style={{ borderColor: accent }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: accent }}>
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Education
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {education.map((edu) => (
                      <div key={edu.id} className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-0.5">
                        <h3 className="font-bold text-slate-900 text-xs leading-snug">{edu.degree}</h3>
                        <p className="text-[11px] font-semibold" style={{ color: accent }}>{edu.institution}</p>
                        <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                          <span>{edu.startDate} – {edu.endDate}</span>
                          {edu.gpa && <span className="font-bold text-slate-700">GPA: {edu.gpa}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications && certifications.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b-2" style={{ borderColor: accent }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: accent }}>
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Certifications
                    </h2>
                  </div>
                  <div className="space-y-1.5">
                    {certifications.map((c) => (
                      <div key={c.id} className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-slate-50 border border-slate-150">
                        <div>
                          <p className="font-bold text-slate-900">{c.name}</p>
                          <p className="text-[10px] text-slate-500">{c.issuer}</p>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border">
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
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b-2" style={{ borderColor: accent }}>
                    <div className="p-1 rounded-md text-white" style={{ backgroundColor: accent }}>
                      <Languages className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      Languages
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {languages.map((l, i) => (
                      <div key={i} className="p-2 rounded-lg border border-slate-100 bg-white">
                        <p className="text-[11px] font-bold text-slate-900">{l.language}</p>
                        <p className="text-[10px] text-slate-500">{l.proficiency}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Gradient Accent Line */}
      <div className="h-1.5 w-full" style={{ background: gradientHeaderBg }} />
    </div>
  );
};
