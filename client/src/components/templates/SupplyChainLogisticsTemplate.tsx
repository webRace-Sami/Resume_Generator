import React from 'react';
import { ResumeData } from '../../types/resume';
import { getFontSizeClasses, getSpacingClasses, getEffectiveColor, getFontFamilyClass } from './templateUtils';
import { Mail, Phone, MapPin, Globe, Truck, Package, Award, BarChart3, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';

export const SupplyChainLogisticsTemplate: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personalInfo, experience, education, skills, projects, certifications, languages, customSections, style } = resume;
  const color = getEffectiveColor(style, '#0f766e'); // Deep Teal/Industrial slate
  const size = getFontSizeClasses(style.fontSize);
  const space = getSpacingClasses(style.spacing);
  const font = getFontFamilyClass(style.fontFamily);

  return (
    <div className={`w-full bg-white text-slate-800 ${font} ${space.padding} flex flex-col justify-start`}>
      {/* Heavy-Duty Header Banner */}
      <div
        className="p-4 sm:p-5 rounded-xl text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 shadow-sm"
        style={{
          background: style.isMonochrome
            ? '#1e293b'
            : `linear-gradient(135deg, ${color}, #0f172a)`,
        }}
      >
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-teal-200 font-semibold uppercase tracking-wider mb-1">
            <Truck className="w-3.5 h-3.5" />
            <span>Supply Chain & Global Logistics Operations</span>
          </div>

          <h1 className={`${size.name} font-extrabold tracking-tight text-white`}>
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          <p className={`${size.title} font-medium text-slate-200 mt-0.5`}>
            {personalInfo.jobTitle || 'Supply Chain & Logistics Operations Manager'}
          </p>

          <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-x-3.5 gap-y-1 mt-2.5 text-slate-300 ${size.small}`}>
            {personalInfo.email && (
              <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-teal-300" /> {personalInfo.email}</span>
            )}
            {personalInfo.phone && (
              <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-teal-300" /> {personalInfo.phone}</span>
            )}
            {personalInfo.location && (
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-teal-300" /> {personalInfo.location}</span>
            )}
            {personalInfo.linkedin && (
              <span className="flex items-center gap-1"><LinkedinIcon className="w-3 h-3 text-teal-300" /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
            )}
            {personalInfo.website && (
              <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-teal-300" /> {personalInfo.website.replace(/^https?:\/\//, '')}</span>
            )}
          </div>
        </div>

        {style.showPhoto && personalInfo.photoUrl && (
          <img
            src={personalInfo.photoUrl}
            alt={personalInfo.fullName}
            className="w-20 h-20 rounded-xl object-cover border-2 border-white/40 shadow-md shrink-0"
          />
        )}
      </div>

      {/* Main Grid: 2-Column Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
        {/* Left Column (4 cols): SCM Skills, Certifications, Tools */}
        <div className="md:col-span-4 space-y-4 border-r border-slate-100 pr-0 md:pr-3">
          {/* Core Competencies */}
          {skills && skills.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2 flex items-center gap-1"
                style={{ borderColor: color }}
              >
                <Package className="w-3.5 h-3.5" style={{ color }} /> Logistics & SCM Tools
              </h2>
              <div className="space-y-2.5">
                {skills.map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-800 block mb-1">{cat.category}</span>
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

          {/* Certifications (APICS, CSCP, Six Sigma) */}
          {certifications && certifications.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2 flex items-center gap-1"
                style={{ borderColor: color }}
              >
                <Award className="w-3.5 h-3.5" style={{ color }} /> SCM Certifications
              </h2>
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert.id} className="text-xs bg-slate-50 p-2 rounded border border-slate-200">
                    <div className="font-bold text-slate-900">{cert.name}</div>
                    <div className="text-[10px] text-slate-500">{cert.issuer} {cert.date ? `• ${cert.date}` : ''}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2" style={{ borderColor: color }}>
                Languages
              </h2>
              <div className="space-y-1">
                {languages.map((l, idx) => (
                  <div key={idx} className="text-xs flex justify-between">
                    <span className="font-semibold text-slate-800">{l.language}</span>
                    <span className="text-slate-500 text-[11px]">{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2" style={{ borderColor: color }}>
                Education
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600 font-medium" style={{ color }}>{edu.institution}</div>
                    <div className="text-[10px] text-slate-500">{edu.startDate} – {edu.endDate} {edu.gpa ? `• GPA: ${edu.gpa}` : ''}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (8 cols): Executive Summary, Experience, Projects */}
        <div className="md:col-span-8 space-y-4">
          {/* Executive Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2 flex items-center gap-1.5`}
                style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
              >
                <BarChart3 className="w-3.5 h-3.5" style={{ color }} />
                <span>Executive Operations Summary</span>
              </h2>
              <p className={`text-slate-700 leading-relaxed ${size.body}`}>
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* Supply Chain & Logistics Work Experience */}
          {experience && experience.length > 0 && (
            <div>
              <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2.5 flex items-center gap-1.5`}
                style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
              >
                <Truck className="w-3.5 h-3.5" style={{ color }} />
                <span>Supply Chain & Operations Experience</span>
              </h2>
              <div className={space.itemGap}>
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 pl-3 py-0.5" style={{ borderColor: color }}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                      <h3 className={`${size.subheading} font-bold text-slate-900`}>{exp.jobTitle}</h3>
                      <span className={`${size.small} font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded shrink-0`}>
                        {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-teal-800 mb-1" style={{ color }}>
                      {exp.company} {exp.location ? `• ${exp.location}` : ''}
                    </div>
                    {exp.description && exp.description.length > 0 && (
                      <ul className={`list-disc list-inside text-slate-700 space-y-1 ${size.body}`}>
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

          {/* Procurement / Logistics Optimization Projects */}
          {projects && projects.length > 0 && (
            <div>
              <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2`}
                style={{ borderColor: style.isMonochrome ? '#cbd5e1' : `${color}40` }}
              >
                <span>Logistics & Cost Optimization Projects</span>
              </h2>
              <div className={space.itemGap}>
                {projects.map((proj) => (
                  <div key={proj.id} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-baseline">
                      <span className={`${size.subheading} font-bold text-slate-900`}>{proj.title}</span>
                      {proj.role && <span className="text-xs text-slate-500 font-medium">{proj.role}</span>}
                    </div>
                    {proj.technologies && proj.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 my-1">
                        {proj.technologies.map((t, idx) => (
                          <span key={idx} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.2 rounded text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {proj.description && (
                      <ul className={`list-disc list-inside text-slate-700 mt-1 space-y-0.5 ${size.body}`}>
                        {proj.description.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Custom Sections */}
          {customSections && customSections.map((sec) => (
            <div key={sec.id}>
              <h2 className={`${size.heading} font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2`} style={{ borderColor: color }}>
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
    </div>
  );
};
