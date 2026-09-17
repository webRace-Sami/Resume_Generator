import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor, getFontFamilyClass } from './templateUtils';
import { Mail, Phone, MapPin, Globe, GraduationCap, Briefcase, Sparkles, FolderGit2, Award, Languages as LangIcon } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const FreshGraduateStudentTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#0284c7');
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);
  const font = getFontFamilyClass(style.fontFamily);

  return (
    <div className={`w-full bg-white text-slate-800 ${font} ${space.padding} flex flex-col justify-start`}>
      {/* Top Banner Header */}
      <div className="pb-4 border-b-2 border-slate-100 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-1.5"
            style={{
              backgroundColor: style.isMonochrome ? '#f1f5f9' : `${color}15`,
              color: color,
            }}
          >
            <GraduationCap className="w-3 h-3" />
            <span>Recent Graduate & Career Candidate</span>
          </div>

          <h1 className={`${size.name} font-extrabold tracking-tight text-slate-900`}>
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          <p className={`${size.title} font-semibold mt-0.5`} style={{ color }}>
            {personalInfo.jobTitle || 'Aspiring Software Engineer & Computer Science Graduate'}
          </p>

          {/* Contact Bar */}
          <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-x-3.5 gap-y-1.5 mt-2.5 text-slate-600 ${size.small}`}>
            {personalInfo.email && (
              <span className="inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.email}</span>
            )}
            {personalInfo.phone && (
              <span className="inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.phone}</span>
            )}
            {personalInfo.location && (
              <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.location}</span>
            )}
            {personalInfo.linkedin && (
              <span className="inline-flex items-center gap-1"><LinkedinIcon className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
            )}
            {personalInfo.github && (
              <span className="inline-flex items-center gap-1"><GithubIcon className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.github.replace(/^https?:\/\//, '')}</span>
            )}
            {personalInfo.website && (
              <span className="inline-flex items-center gap-1"><Globe className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.website.replace(/^https?:\/\//, '')}</span>
            )}
          </div>
        </div>

        {/* Profile Photo */}
        {style.showPhoto && personalInfo.photoUrl && (
          <img
            src={personalInfo.photoUrl}
            alt={personalInfo.fullName}
            className="w-22 h-22 rounded-2xl object-cover shadow-sm border-2 shrink-0"
            style={{ borderColor: color }}
          />
        )}
      </div>

      {/* Main Content Layout */}
      <div className={`mt-4 ${space.sectionGap}`}>
        {/* Career Objective / Professional Summary */}
        {personalInfo.summary && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2 flex items-center gap-1.5`}
              style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color }} />
              <span>Career Objective & Profile</span>
            </h2>
            <p className={`text-slate-700 leading-relaxed ${size.body}`}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* EDUCATION (Top Priority for Fresh Students) */}
        {education && education.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2.5 flex items-center gap-1.5`}
              style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
            >
              <GraduationCap className="w-4 h-4" style={{ color }} />
              <span>Education & Academic Background</span>
            </h2>
            <div className={space.itemGap}>
              {education.map((edu) => (
                <div key={edu.id} className="bg-slate-50/70 p-2.5 rounded-xl border border-slate-150">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>{edu.degree}</h3>
                    <span className={`${size.small} font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0`}>
                      {edu.startDate} {edu.startDate && edu.endDate ? '–' : ''} {edu.endDate}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 text-slate-600 text-xs mt-0.5">
                    <span className="font-semibold" style={{ color }}>{edu.institution}</span>
                    {edu.location && <span>• {edu.location}</span>}
                    {edu.gpa && <span className="font-bold text-slate-800 bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded text-[10px]">GPA: {edu.gpa}</span>}
                  </div>
                  {edu.details && (
                    <p className={`text-slate-600 mt-1.5 ${size.body}`}>{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KEY ACADEMIC & CAPSTONE PROJECTS */}
        {projects && projects.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2 flex items-center gap-1.5`}
              style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
            >
              <FolderGit2 className="w-3.5 h-3.5" style={{ color }} />
              <span>Academic & Practical Projects</span>
            </h2>
            <div className={space.itemGap}>
              {projects.map((proj) => (
                <div key={proj.id} className="border-l-2 pl-3 py-0.5" style={{ borderColor: color }}>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>
                      {proj.title}
                      {proj.role && <span className="font-normal text-slate-600 text-xs ml-1.5">({proj.role})</span>}
                    </h3>
                    {proj.link && (
                      <span className={`${size.small} text-cyan-600 font-medium`}>{proj.link.replace(/^https?:\/\//, '')}</span>
                    )}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 my-1">
                      {proj.technologies.map((tech, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {proj.description && proj.description.length > 0 && (
                    <ul className={`list-disc list-inside text-slate-700 mt-1 space-y-0.5 ${size.body}`}>
                      {proj.description.map((desc, idx) => (
                        <li key={idx} className="leading-snug">{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERNSHIPS & WORK EXPERIENCE */}
        {experience && experience.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2 flex items-center gap-1.5`}
              style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
            >
              <Briefcase className="w-3.5 h-3.5" style={{ color }} />
              <span>Internships & Experience</span>
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className={`${size.subheading} font-bold text-slate-900`}>{exp.jobTitle}</span>
                      <span className="text-slate-600 font-medium text-xs ml-1.5" style={{ color }}>@ {exp.company}</span>
                    </div>
                    <span className={`${size.small} text-slate-500 font-medium`}>
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className={`list-disc list-inside text-slate-700 mt-1 space-y-0.5 ${size.body}`}>
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="leading-snug">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS & STACK */}
        {skills && skills.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2 flex items-center gap-1.5`}
              style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color }} />
              <span>Technical & Professional Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skills.map((cat, idx) => (
                <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <span className="text-xs font-bold text-slate-900 block mb-1" style={{ color }}>{cat.category}:</span>
                  <div className="flex flex-wrap gap-1">
                    {cat.items.map((item, itemIdx) => (
                      <span key={itemIdx} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATIONS & LANGUAGES */}
        {((certifications && certifications.length > 0) || (languages && languages.length > 0)) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {certifications && certifications.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5 flex items-center gap-1"
                  style={{ borderColor: color }}
                >
                  <Award className="w-3.5 h-3.5" style={{ color }} /> Certifications & Awards
                </h3>
                <ul className={`space-y-1 ${size.small}`}>
                  {certifications.map((cert) => (
                    <li key={cert.id} className="text-slate-700">
                      <span className="font-semibold text-slate-900">{cert.name}</span>
                      {cert.issuer && <span className="text-slate-500"> ({cert.issuer})</span>}
                      {cert.date && <span className="text-slate-400 text-[10px] ml-1">[{cert.date}]</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {languages && languages.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-0.5 mb-1.5 flex items-center gap-1"
                  style={{ borderColor: color }}
                >
                  <LangIcon className="w-3.5 h-3.5" style={{ color }} /> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-800">
                      <strong className="text-slate-900">{lang.language}:</strong> <span className="text-slate-600 text-[11px]">{lang.proficiency}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Custom Sections */}
        {customSections && customSections.map((sec) => (
          <div key={sec.id}>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2`}
              style={{ borderColor: color }}
            >
              {sec.heading}
            </h2>
            <div className={space.itemGap}>
              {sec.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-slate-900 text-xs">{item.title}</span>
                    {item.date && <span className="text-[10px] text-slate-500">{item.date}</span>}
                  </div>
                  {item.subtitle && <p className="text-slate-600 text-xs italic">{item.subtitle}</p>}
                  {item.description && <p className={`text-slate-700 mt-0.5 ${size.body}`}>{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
