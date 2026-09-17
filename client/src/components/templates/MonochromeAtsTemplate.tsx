import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses } from './templateUtils';

export const MonochromeAtsTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);

  return (
    <div className={`w-full bg-white text-black font-["Inter",Arial,sans-serif] ${space.padding} flex flex-col justify-start`}>
      {/* ATS Standard Header */}
      <div className={`border-b-2 border-black pb-2 ${space.marginB} ${style.showPhoto && personalInfo.photoUrl ? 'flex items-center justify-between gap-4 text-left' : 'text-center'}`}>
        <div className={style.showPhoto && personalInfo.photoUrl ? 'flex-1' : ''}>
          <h1 className={`${size.name} font-bold text-black uppercase tracking-tight`}>
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          {personalInfo.jobTitle && (
            <p className={`${size.title} font-semibold text-black mt-0.5`}>
              {personalInfo.jobTitle}
            </p>
          )}

          <div className={`flex flex-wrap ${style.showPhoto && personalInfo.photoUrl ? 'justify-start' : 'justify-center'} items-center gap-x-2 gap-y-0.5 mt-1.5 text-black ${size.small}`}>
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.location && (personalInfo.phone || personalInfo.email) && <span>|</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.phone && personalInfo.email && <span>|</span>}
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.linkedin && (
              <>
                <span>|</span>
                <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
              </>
            )}
            {personalInfo.website && (
              <>
                <span>|</span>
                <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
              </>
            )}
          </div>
        </div>

        {style.showPhoto && personalInfo.photoUrl && (
          <img
            src={personalInfo.photoUrl}
            alt={personalInfo.fullName || 'Portrait'}
            className="w-18 h-18 rounded-md object-cover border border-black grayscale shrink-0"
          />
        )}
      </div>

      {/* Main Content */}
      <div className={space.sectionGap}>
        {/* Professional Summary */}
        {personalInfo.summary && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5`}>
              Professional Summary
            </h2>
            <p className={`text-black leading-relaxed ${size.body}`}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Work Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2`}>
              Work Experience
            </h2>
            <div className={space.itemGap}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className={size.subheading}>{exp.jobTitle}</span>
                    <span className={size.small}>
                      {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-black italic mb-1">
                    <span className={size.body}>{exp.company}</span>
                    {exp.location && <span className={size.small}>{exp.location}</span>}
                  </div>
                  {exp.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-black">
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
            <h2 className={`${size.heading} font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2`}>
              Education
            </h2>
            <div className={space.itemGap}>
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className={size.subheading}>{edu.institution}</span>
                    <span className={size.small}>{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-black">
                    <span className={`${size.body} italic`}>{edu.degree}</span>
                    {edu.location && <span className={size.small}>{edu.location}</span>}
                  </div>
                  {edu.gpa && <p className={`${size.small} text-black mt-0.5`}>GPA: {edu.gpa}</p>}
                  {edu.details && <p className={`${size.body} text-black mt-0.5`}>{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5`}>
              Technical Skills & Competencies
            </h2>
            <div className="space-y-1 text-black">
              {skills.map((grp, idx) => (
                <div key={idx} className={size.body}>
                  <span className="font-bold">{grp.category}: </span>
                  <span>{grp.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2 className={`${size.heading} font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2`}>
              Key Projects
            </h2>
            <div className={space.itemGap}>
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className={size.subheading}>
                      {proj.title} {proj.role && <span className="font-normal italic">({proj.role})</span>}
                    </span>
                    {proj.link && <span className={size.small}>{proj.link.replace(/^https?:\/\//, '')}</span>}
                  </div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <p className={`${size.small} italic text-black mb-0.5`}>
                      Technologies: {proj.technologies.join(', ')}
                    </p>
                  )}
                  {proj.description && (
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-black">
                      {proj.description.map((b, i) => (
                        <li key={i} className={size.body}>{b}</li>
                      ))}
                    </ul>
                  )}
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
                <h3 className={`${size.subheading} font-bold uppercase border-b border-black pb-0.5 mb-1`}>
                  Certifications
                </h3>
                <div className="space-y-0.5 text-black">
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
                <h3 className={`${size.subheading} font-bold uppercase border-b border-black pb-0.5 mb-1`}>
                  Languages
                </h3>
                <div className="space-y-0.5 text-black">
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
            <h2 className={`${size.heading} font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2`}>
              {sec.heading}
            </h2>
            <div className={space.itemGap}>
              {sec.items.map((it, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className={size.subheading}>{it.title}</span>
                    {it.date && <span className={size.small}>{it.date}</span>}
                  </div>
                  {it.subtitle && <p className={`${size.body} italic text-black`}>{it.subtitle}</p>}
                  {it.description && <p className={`${size.body} text-black mt-0.5`}>{it.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
