import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor } from './templateUtils';

export const ClassicIvyTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#1f2937');
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-white text-stone-900 font-["Merriweather",Georgia,serif] ${space.padding} flex flex-col justify-start`}>
      {/* Header - Centered Harvard / Ivy League Style */}
      <div className={`text-center border-b pb-3 ${space.marginB}`} style={{ borderColor: style.isMonochrome ? '#1c1917' : color }}>
        {style.showPhoto && personalInfo.photoUrl && (
          <div className="flex justify-center mb-2.5">
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.fullName || 'Portrait'}
              className="w-18 h-18 rounded-full object-cover border-2 shadow-sm"
              style={{ borderColor: color }}
            />
          </div>
        )}
        <h1 className={`${size.name} font-normal tracking-wide text-stone-900 uppercase font-["Playfair_Display",Georgia,serif]`}>
          {personalInfo.fullName || 'Your Full Name'}
        </h1>
        {personalInfo.jobTitle && (
          <p className={`${size.title} italic text-stone-700 mt-0.5`}>
            {personalInfo.jobTitle}
          </p>
        )}

        {/* Contact line */}
        <div className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-2 text-stone-700 ${size.small}`}>
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && (personalInfo.phone || personalInfo.email) && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.email && <span>•</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.linkedin && (
            <>
              <span>•</span>
              <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
            </>
          )}
          {personalInfo.website && (
            <>
              <span>•</span>
              <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
            </>
          )}
        </div>

        {personalInfo.summary && (
          <p className={`mt-2.5 text-stone-700 text-justify ${size.body} italic`}>
            {personalInfo.summary}
          </p>
        )}
      </div>

      {/* Sections */}
      <div className={space.sectionGap}>
        {/* Education First for Ivy Academic / Traditional */}
        {education && education.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider border-b pb-0.5 mb-2 font-["Playfair_Display",Georgia,serif]`}
              style={{ color, borderColor: style.isMonochrome ? '#a8a29e' : `${color}40` }}
            >
              Education
            </h2>
            <div className={space.itemGap}>
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.subheading} font-bold text-stone-900`}>{edu.institution}</span>
                    <span className={`${size.small} font-normal text-stone-600`}>
                      {edu.location ? `${edu.location} | ` : ''}{edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.body} italic text-stone-800`}>{edu.degree}</span>
                    {edu.gpa && <span className={`${size.small} text-stone-600`}>GPA: {edu.gpa}</span>}
                  </div>
                  {edu.details && <p className={`${size.body} text-stone-700 mt-0.5`}>{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider border-b pb-0.5 mb-2 font-["Playfair_Display",Georgia,serif]`}
              style={{ color, borderColor: style.isMonochrome ? '#a8a29e' : `${color}40` }}
            >
              Professional Experience
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.subheading} font-bold text-stone-900`}>{exp.company}</span>
                    <span className={`${size.small} font-normal text-stone-600`}>
                      {exp.location ? `${exp.location} | ` : ''}{exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className={`${size.body} italic font-semibold text-stone-800`}>{exp.jobTitle}</span>
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-stone-700">
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

        {/* Key Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider border-b pb-0.5 mb-2 font-["Playfair_Display",Georgia,serif]`}
              style={{ color, borderColor: style.isMonochrome ? '#a8a29e' : `${color}40` }}
            >
              Selected Projects & Initiatives
            </h2>
            <div className={space.itemGap}>
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.subheading} font-bold text-stone-900`}>
                      {proj.title} {proj.role && <span className="italic font-normal text-stone-700">({proj.role})</span>}
                    </span>
                    {proj.link && (
                      <span className={`${size.small} text-stone-600 underline`}>
                        {proj.link.replace(/^https?:\/\//, '')}
                      </span>
                    )}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <p className={`${size.small} italic text-stone-600 mb-0.5`}>
                      Components: {proj.technologies.join(', ')}
                    </p>
                  )}
                  {proj.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-stone-700">
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

        {/* Skills & Additional Info */}
        {skills && skills.length > 0 && (
          <div>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider border-b pb-0.5 mb-2 font-["Playfair_Display",Georgia,serif]`}
              style={{ color, borderColor: style.isMonochrome ? '#a8a29e' : `${color}40` }}
            >
              Skills & Qualifications
            </h2>
            <div className="space-y-1 text-stone-800">
              {skills.map((grp, idx) => (
                <div key={idx} className={size.body}>
                  <span className="font-bold text-stone-900">{grp.category}: </span>
                  <span>{grp.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications & Languages */}
        {((certifications && certifications.length > 0) || (languages && languages.length > 0)) && (
          <div className="grid grid-cols-2 gap-4">
            {certifications && certifications.length > 0 && (
              <div>
                <h3 className={`${size.subheading} font-bold uppercase border-b pb-0.5 mb-1.5`} style={{ color }}>
                  Certifications
                </h3>
                <div className="space-y-0.5">
                  {certifications.map((c) => (
                    <div key={c.id} className={size.body}>
                      <span className="font-semibold">{c.name}</span> – {c.issuer} {c.date ? `(${c.date})` : ''}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {languages && languages.length > 0 && (
              <div>
                <h3 className={`${size.subheading} font-bold uppercase border-b pb-0.5 mb-1.5`} style={{ color }}>
                  Languages
                </h3>
                <div className="space-y-0.5">
                  {languages.map((l, i) => (
                    <div key={i} className={size.body}>
                      <span className="font-semibold">{l.language}</span> ({l.proficiency})
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Custom Sections */}
        {customSections && customSections.map((sec) => (
          <div key={sec.id}>
            <h2
              className={`${size.heading} font-bold uppercase tracking-wider border-b pb-0.5 mb-2 font-["Playfair_Display",Georgia,serif]`}
              style={{ color, borderColor: style.isMonochrome ? '#a8a29e' : `${color}40` }}
            >
              {sec.heading}
            </h2>
            <div className={space.itemGap}>
              {sec.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <span className={`${size.subheading} font-bold text-stone-900`}>{item.title}</span>
                    {item.date && <span className={`${size.small} text-stone-600`}>{item.date}</span>}
                  </div>
                  {item.subtitle && <p className={`${size.body} italic text-stone-700`}>{item.subtitle}</p>}
                  {item.description && <p className={`${size.body} text-stone-700 mt-0.5`}>{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
