import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontFamilyClass, getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';

export const ModernCleanTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#0284c7');
  const fontClass = getFontFamilyClass(style.fontFamily);
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-white text-slate-800 ${fontClass} ${space.padding} flex flex-col justify-start`}>
      {/* Header */}
      <div className={`border-b-2 pb-5 ${space.marginB}`} style={{ borderColor: color }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className={`${size.name} font-extrabold tracking-tight text-slate-900 mb-1`}>
              {personalInfo.fullName || 'Your Full Name'}
            </h1>
            <p className={`${size.title} font-semibold`} style={{ color }}>
              {personalInfo.jobTitle || 'Your Professional Title'}
            </p>

            {/* Contact info row */}
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-slate-600 ${size.small}`}>
              {personalInfo.email && (
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.email}
                </span>
              )}
              {personalInfo.phone && (
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.phone}
                </span>
              )}
              {personalInfo.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.location}
                </span>
              )}
              {personalInfo.website && (
                <span className="inline-flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.website.replace(/^https?:\/\//, '')}
                </span>
              )}
              {personalInfo.linkedin && (
                <span className="inline-flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}
                </span>
              )}
              {personalInfo.github && (
                <span className="inline-flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5" style={{ color }} /> {personalInfo.github.replace(/^https?:\/\//, '')}
                </span>
              )}
            </div>
          </div>

          {style.showPhoto && personalInfo.photoUrl && (
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.fullName}
              className="w-24 h-24 rounded-lg object-cover shadow-sm border-2"
              style={{ borderColor: color }}
            />
          )}
        </div>

        {/* Summary */}
        {personalInfo.summary && (
          <p className={`mt-3.5 text-slate-600 leading-relaxed ${size.body}`}>
            {personalInfo.summary}
          </p>
        )}
      </div>

      {/* Main Body */}
      <div className={space.sectionGap}>
        {/* Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2`}
              style={{ color }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              Professional Experience
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id} className="text-slate-800">
                  <div className="flex justify-between items-baseline">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>{exp.jobTitle}</h3>
                    <span className={`${size.small} font-medium text-slate-500`}>
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className={`${size.body} font-medium text-slate-700`}>{exp.company}</span>
                    {exp.location && <span className={`${size.small} text-slate-400`}>{exp.location}</span>}
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-600">
                      {exp.description.map((bullet, i) => (
                        <li key={i} className={size.body}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2`}
              style={{ color }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              Education
            </h2>
            <div className={space.itemGap}>
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>{edu.degree}</h3>
                    <span className={`${size.small} font-medium text-slate-500`}>
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.body} font-medium text-slate-700`}>{edu.institution}</span>
                    {edu.location && <span className={`${size.small} text-slate-400`}>{edu.location}</span>}
                  </div>
                  {edu.gpa && <p className={`${size.small} text-slate-500 mt-0.5`}>GPA: {edu.gpa}</p>}
                  {edu.details && <p className={`${size.body} text-slate-600 mt-0.5`}>{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2`}
              style={{ color }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              Skills & Expertise
            </h2>
            <div className="space-y-1.5">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className={`${size.body} font-semibold text-slate-800 min-w-[140px]`}>
                    {skillGroup.category}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`${size.small} px-2 py-0.5 rounded font-medium border`}
                        style={{
                          backgroundColor: style.isMonochrome ? '#f3f4f6' : `${color}12`,
                          borderColor: style.isMonochrome ? '#e5e7eb' : `${color}30`,
                          color: style.isMonochrome ? '#1f2937' : color,
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

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2`}
              style={{ color }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              Key Projects
            </h2>
            <div className={space.itemGap}>
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>
                      {proj.title} {proj.role && <span className="font-normal text-slate-600">({proj.role})</span>}
                    </h3>
                    {proj.link && (
                      <a href={proj.link} className={`${size.small} text-sky-600 hover:underline`}>
                        {proj.link.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <p className={`${size.small} font-mono text-slate-500 mb-1`}>
                      Technologies: {proj.technologies.join(', ')}
                    </p>
                  )}
                  {proj.description && proj.description.length > 0 && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-600">
                      {proj.description.map((bullet, i) => (
                        <li key={i} className={size.body}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications & Languages Grid */}
        <div className="grid grid-cols-2 gap-4">
          {certifications && certifications.length > 0 && (
            <div>
              <h2
                className={`${size.heading} font-bold uppercase tracking-wider mb-2 flex items-center gap-2`}
                style={{ color }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                Certifications
              </h2>
              <div className="space-y-1">
                {certifications.map((cert) => (
                  <div key={cert.id} className={size.body}>
                    <p className="font-semibold text-slate-900">{cert.name}</p>
                    <p className={`${size.small} text-slate-500`}>
                      {cert.issuer} {cert.date ? `(${cert.date})` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {languages && languages.length > 0 && (
            <div>
              <h2
                className={`${size.heading} font-bold uppercase tracking-wider mb-2 flex items-center gap-2`}
                style={{ color }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                Languages
              </h2>
              <div className="space-y-1">
                {languages.map((lang, idx) => (
                  <div key={idx} className={`flex justify-between ${size.body}`}>
                    <span className="font-medium text-slate-800">{lang.language}</span>
                    <span className={`${size.small} text-slate-500`}>{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Custom Sections */}
        {customSections && customSections.map((sec) => (
          <div key={sec.id}>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2`}
              style={{ color }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              {sec.heading}
            </h2>
            <div className={space.itemGap}>
              {sec.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <h3 className={`${size.subheading} font-bold text-slate-900`}>{item.title}</h3>
                    {item.date && <span className={`${size.small} text-slate-500`}>{item.date}</span>}
                  </div>
                  {item.subtitle && <p className={`${size.body} font-medium text-slate-700`}>{item.subtitle}</p>}
                  {item.description && <p className={`${size.body} text-slate-600 mt-0.5`}>{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
