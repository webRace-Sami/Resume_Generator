import React, { useState } from 'react';
import { ResumeData, ExperienceItem, EducationItem, SkillCategory, ProjectItem, CertificationItem, LanguageItem } from '../types/resume';
import { SAMPLE_PROFILES, EMPTY_RESUME } from '../data/samples';
import {
  X,
  User,
  Briefcase,
  GraduationCap,
  Sparkles,
  FolderGit2,
  Award,
  Globe,
  Plus,
  Trash2,
  Check,
  FileDown,
  Upload,
  RefreshCw,
  Layers,
  Wand2,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resume: ResumeData;
  onSave: (updatedResume: ResumeData) => void;
  onDownloadPdfNow?: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  resume,
  onSave,
  onDownloadPdfNow,
}) => {
  const [formData, setFormData] = useState<ResumeData>(resume);
  const [activeTab, setActiveTab] = useState<string>('personal');
  const [isPhotoUploading, setIsPhotoUploading] = useState(false);

  // Sync state when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setFormData(resume);
    }
  }, [isOpen, resume]);

  if (!isOpen) return null;

  // Handlers for Personal Info
  const handlePersonalChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  // Photo Upload Handler (FileReader base64)
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsPhotoUploading(true);
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64 = uploadEvent.target?.result as string;
        handlePersonalChange('photoUrl', base64);
        setIsPhotoUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handlers for Experience
  const addExperience = () => {
    const newExp: ExperienceItem = {
      id: `exp-${Date.now()}`,
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      description: ['Accomplished key milestones delivering measurable results...'],
    };
    setFormData((prev) => ({
      ...prev,
      experience: [newExp, ...prev.experience],
    }));
  };

  const updateExperience = (id: string, field: keyof ExperienceItem, value: any) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    }));
  };

  const removeExperience = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addExperienceBullet = (expId: string) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === expId ? { ...exp, description: [...exp.description, ''] } : exp
      ),
    }));
  };

  const updateExperienceBullet = (expId: string, bulletIdx: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id === expId) {
          const newDesc = [...exp.description];
          newDesc[bulletIdx] = value;
          return { ...exp, description: newDesc };
        }
        return exp;
      }),
    }));
  };

  const removeExperienceBullet = (expId: string, bulletIdx: number) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id === expId) {
          return { ...exp, description: exp.description.filter((_, i) => i !== bulletIdx) };
        }
        return exp;
      }),
    }));
  };

  // Handlers for Education
  const addEducation = () => {
    const newEdu: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      details: '',
    };
    setFormData((prev) => ({
      ...prev,
      education: [newEdu, ...prev.education],
    }));
  };

  const updateEducation = (id: string, field: keyof EducationItem, value: any) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    }));
  };

  const removeEducation = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  // Handlers for Skills
  const addSkillCategory = () => {
    const newCat: SkillCategory = {
      category: 'New Skill Category',
      items: ['Skill 1', 'Skill 2'],
    };
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, newCat],
    }));
  };

  const updateSkillCategory = (idx: number, category: string) => {
    setFormData((prev) => {
      const copy = [...prev.skills];
      copy[idx] = { ...copy[idx], category };
      return { ...prev, skills: copy };
    });
  };

  const updateSkillItems = (idx: number, itemsString: string) => {
    const items = itemsString.split(',').map((s) => s.trim()).filter(Boolean);
    setFormData((prev) => {
      const copy = [...prev.skills];
      copy[idx] = { ...copy[idx], items };
      return { ...prev, skills: copy };
    });
  };

  const removeSkillCategory = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== idx),
    }));
  };

  // Handlers for Projects
  const addProject = () => {
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: '',
      role: '',
      technologies: [],
      link: '',
      description: ['Key contribution and impact...'],
    };
    setFormData((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects],
    }));
  };

  const updateProject = (id: string, field: keyof ProjectItem, value: any) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }));
  };

  const removeProject = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  // Handlers for Certifications
  const addCertification = () => {
    const newCert: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: '',
      issuer: '',
      date: '',
    };
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, newCert],
    }));
  };

  const updateCertification = (id: string, field: keyof CertificationItem, value: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    }));
  };

  const removeCertification = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }));
  };

  // Handlers for Languages
  const addLanguage = () => {
    const newLang: LanguageItem = { language: '', proficiency: 'Professional Working' };
    setFormData((prev) => ({
      ...prev,
      languages: [...prev.languages, newLang],
    }));
  };

  const updateLanguage = (idx: number, field: keyof LanguageItem, value: string) => {
    setFormData((prev) => {
      const copy = [...prev.languages];
      copy[idx] = { ...copy[idx], [field]: value };
      return { ...prev, languages: copy };
    });
  };

  const removeLanguage = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== idx),
    }));
  };

  // Load preset sample profile
  const handleLoadSample = (sample: ResumeData) => {
    setFormData({
      ...sample,
      title: `${sample.personalInfo.fullName || 'Professional'} Resume`,
    });
  };

  // Final Save & Close
  const handleSaveAndClose = () => {
    onSave(formData);
    onClose();
  };

  // Save & Download
  const handleSaveAndDownload = () => {
    onSave(formData);
    onClose();
    if (onDownloadPdfNow) {
      setTimeout(() => {
        onDownloadPdfNow();
      }, 300);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Layers className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Resume & CV Data Builder
              </h2>
              <p className="text-xs text-slate-400">
                Add your experience, skills, and education to generate in 1-click
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Sample Loader Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 flex items-center gap-1.5 font-medium transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Load Sample Profile</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-64 bg-slate-850 border border-slate-700 rounded-xl shadow-xl p-1.5 hidden group-hover:block z-50">
                <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">Choose Preset</div>
                {SAMPLE_PROFILES.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleLoadSample(sample.data)}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-750 text-xs flex items-center gap-2 text-slate-200 transition"
                  >
                    <span>{sample.icon}</span>
                    <div className="truncate">
                      <p className="font-semibold text-white truncate">{sample.label}</p>
                      <p className="text-[10px] text-slate-400 truncate">{sample.role}</p>
                    </div>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setFormData(EMPTY_RESUME)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-red-950/30 text-xs text-red-400 font-medium border-t border-slate-800 mt-1"
                >
                  Clear to Blank
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 border-b border-slate-800 bg-slate-900/50 overflow-x-auto scrollbar-none py-2">
          {[
            { id: 'personal', label: 'Personal Details', icon: User },
            { id: 'experience', label: 'Work Experience', icon: Briefcase, count: formData.experience.length },
            { id: 'education', label: 'Education', icon: GraduationCap, count: formData.education.length },
            { id: 'skills', label: 'Skills & Stack', icon: Sparkles, count: formData.skills.length },
            { id: 'projects', label: 'Projects', icon: FolderGit2, count: formData.projects.length },
            { id: 'certs', label: 'Certs & Languages', icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {typeof tab.count === 'number' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: PERSONAL INFO */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Resume Document Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. Senior Full Stack Engineer Resume"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.personalInfo.fullName}
                    onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. Alex Rivera"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Professional Job Title *</label>
                  <input
                    type="text"
                    value={formData.personalInfo.jobTitle}
                    onChange={(e) => handlePersonalChange('jobTitle', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. Senior Full-Stack Software Engineer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handlePersonalChange('email', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. alex.rivera@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handlePersonalChange('phone', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. +1 (555) 234-5678"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Location / City & Country</label>
                  <input
                    type="text"
                    value={formData.personalInfo.location}
                    onChange={(e) => handlePersonalChange('location', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. San Francisco, CA"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Portfolio / Website</label>
                  <input
                    type="url"
                    value={formData.personalInfo.website}
                    onChange={(e) => handlePersonalChange('website', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. https://alexrivera.dev"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">LinkedIn Profile</label>
                  <input
                    type="text"
                    value={formData.personalInfo.linkedin}
                    onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. linkedin.com/in/alexrivera-dev"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">GitHub / Code Profile</label>
                  <input
                    type="text"
                    value={formData.personalInfo.github}
                    onChange={(e) => handlePersonalChange('github', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. github.com/alexrivera-eng"
                  />
                </div>

                {/* Photo Upload & Preview */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Profile Photo (Optional)</label>
                  <div className="flex items-center gap-3">
                    {formData.personalInfo.photoUrl ? (
                      <div className="relative">
                        <img
                          src={formData.personalInfo.photoUrl}
                          alt="Avatar"
                          className="w-12 h-12 rounded-xl object-cover border border-cyan-500"
                        />
                        <button
                          type="button"
                          onClick={() => handlePersonalChange('photoUrl', '')}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs flex items-center gap-2 text-slate-300 font-medium">
                        <Upload className="w-4 h-4 text-cyan-400" />
                        <span>{isPhotoUploading ? 'Uploading...' : 'Upload Image'}</span>
                        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                      </label>
                    )}
                    <input
                      type="text"
                      value={formData.personalInfo.photoUrl || ''}
                      onChange={(e) => handlePersonalChange('photoUrl', e.target.value)}
                      placeholder="Or paste photo URL..."
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Summary Text Area */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-300">
                    Professional Summary / Objective
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      handlePersonalChange(
                        'summary',
                        `Dynamic and results-driven ${formData.personalInfo.jobTitle || 'Professional'} with proven track record in architecting scalable solutions, optimizing processes, and collaborating in high-performance environments to exceed organizational targets.`
                      )
                    }
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <Wand2 className="w-3 h-3" /> Generate AI Polish
                  </button>
                </div>
                <textarea
                  rows={4}
                  value={formData.personalInfo.summary}
                  onChange={(e) => handlePersonalChange('summary', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Write a concise 2-4 sentence summary highlighting your top strengths and career accomplishments..."
                />
              </div>
            </div>
          )}

          {/* TAB 2: WORK EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">Add your past and current roles in reverse chronological order</p>
                <button
                  type="button"
                  onClick={addExperience}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <Plus className="w-4 h-4" /> Add Experience
                </button>
              </div>

              {formData.experience.length === 0 ? (
                <div className="text-center py-10 bg-slate-850/50 rounded-2xl border border-dashed border-slate-700 p-6">
                  <Briefcase className="w-10 h-10 text-slate-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-300">No work experience added yet</p>
                  <p className="text-xs text-slate-500 mt-1">Click the button above to add your employment history</p>
                </div>
              ) : (
                formData.experience.map((exp, idx) => (
                  <div key={exp.id} className="bg-slate-850 border border-slate-750 rounded-xl p-4 space-y-3 relative group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        Role #{idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeExperience(exp.id)}
                        className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-950/40 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-0.5">Job Title</label>
                        <input
                          type="text"
                          value={exp.jobTitle}
                          onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                          placeholder="e.g. Lead Software Engineer"
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-0.5">Company Name</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          placeholder="e.g. Google / Microsoft"
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-0.5">Location</label>
                        <input
                          type="text"
                          value={exp.location || ''}
                          onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                          placeholder="e.g. New York, NY"
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] text-slate-400 mb-0.5">Start Date</label>
                          <input
                            type="text"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                            placeholder="e.g. 2021-06"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-slate-400 mb-0.5">
                            End Date {exp.isCurrent ? '(Present)' : ''}
                          </label>
                          <input
                            type="text"
                            disabled={exp.isCurrent}
                            value={exp.isCurrent ? 'Present' : exp.endDate}
                            onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                            placeholder="e.g. 2023-12"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`current-${exp.id}`}
                        checked={exp.isCurrent}
                        onChange={(e) => updateExperience(exp.id, 'isCurrent', e.target.checked)}
                        className="rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0"
                      />
                      <label htmlFor={`current-${exp.id}`} className="text-xs text-slate-300">
                        I currently work here
                      </label>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between items-center">
                        <label className="text-[11px] font-semibold text-slate-300">Bullet Points & Impact</label>
                        <button
                          type="button"
                          onClick={() => addExperienceBullet(exp.id)}
                          className="text-[10px] text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> Add Bullet Point
                        </button>
                      </div>
                      {exp.description.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2">
                          <span className="text-cyan-400 text-xs">•</span>
                          <input
                            type="text"
                            value={bullet}
                            onChange={(e) => updateExperienceBullet(exp.id, bIdx, e.target.value)}
                            placeholder="Described key metric or technical achievement (e.g. Increased conversion by 30%)..."
                            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1 text-xs text-white"
                          />
                          <button
                            type="button"
                            onClick={() => removeExperienceBullet(exp.id, bIdx)}
                            className="text-slate-500 hover:text-red-400 p-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">Add your degrees, colleges, and academic achievements</p>
                <button
                  type="button"
                  onClick={addEducation}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <Plus className="w-4 h-4" /> Add Education
                </button>
              </div>

              {formData.education.map((edu, idx) => (
                <div key={edu.id} className="bg-slate-850 border border-slate-750 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Degree / School #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeEducation(edu.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-0.5">Degree / Certificate</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        placeholder="e.g. B.S. in Computer Science"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-0.5">Institution / University</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                        placeholder="e.g. UC Berkeley"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-0.5">Start Date</label>
                        <input
                          type="text"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                          placeholder="e.g. 2017"
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-0.5">End Date</label>
                        <input
                          type="text"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                          placeholder="e.g. 2021"
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-0.5">GPA / Honors (Optional)</label>
                      <input
                        type="text"
                        value={edu.gpa || ''}
                        onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                        placeholder="e.g. 3.85 / 4.0 (Magna Cum Laude)"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">Organize your skills by categories (comma separated)</p>
                <button
                  type="button"
                  onClick={addSkillCategory}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <Plus className="w-4 h-4" /> Add Category
                </button>
              </div>

              {formData.skills.map((grp, idx) => (
                <div key={idx} className="bg-slate-850 border border-slate-750 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={grp.category}
                      onChange={(e) => updateSkillCategory(idx, e.target.value)}
                      className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1 text-xs font-bold text-cyan-400 w-64"
                      placeholder="Category Name..."
                    />
                    <button
                      type="button"
                      onClick={() => removeSkillCategory(idx)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={grp.items.join(', ')}
                    onChange={(e) => updateSkillItems(idx, e.target.value)}
                    placeholder="Enter skills separated by commas: React, TypeScript, Node.js..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                  />

                  {/* Badges preview */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {grp.items.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] bg-cyan-950/40 text-cyan-300 border border-cyan-800/60 px-2 py-0.5 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">Highlight key applications, repositories, or business initiatives</p>
                <button
                  type="button"
                  onClick={addProject}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <Plus className="w-4 h-4" /> Add Project
                </button>
              </div>

              {formData.projects.map((proj, idx) => (
                <div key={proj.id} className="bg-slate-850 border border-slate-750 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Project #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeProject(proj.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-0.5">Project Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => updateProject(proj.id, 'title', e.target.value)}
                        placeholder="e.g. OmniFlow Automation Platform"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-0.5">Project Link / Repo</label>
                      <input
                        type="text"
                        value={proj.link || ''}
                        onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                        placeholder="e.g. github.com/user/project"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-0.5">Technologies (comma separated)</label>
                    <input
                      type="text"
                      value={proj.technologies.join(', ')}
                      onChange={(e) =>
                        updateProject(
                          proj.id,
                          'technologies',
                          e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                        )
                      }
                      placeholder="React, TypeScript, Node.js..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: CERTS & LANGUAGES */}
          {activeTab === 'certs' && (
            <div className="space-y-6">
              {/* Certifications Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Certifications & Licenses</h3>
                  <button
                    type="button"
                    onClick={addCertification}
                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Certification
                  </button>
                </div>

                {formData.certifications.map((cert) => (
                  <div key={cert.id} className="flex items-center gap-2 bg-slate-850 p-2.5 rounded-xl border border-slate-750">
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                      placeholder="Certificate Name (e.g. AWS Certified Solutions Architect)"
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                      placeholder="Issuer (e.g. AWS)"
                      className="w-32 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={cert.date}
                      onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                      placeholder="Year"
                      className="w-20 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => removeCertification(cert.id)}
                      className="text-slate-500 hover:text-red-400 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Languages Section */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Languages</h3>
                  <button
                    type="button"
                    onClick={addLanguage}
                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Language
                  </button>
                </div>

                {formData.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-850 p-2.5 rounded-xl border border-slate-750">
                    <input
                      type="text"
                      value={lang.language}
                      onChange={(e) => updateLanguage(idx, 'language', e.target.value)}
                      placeholder="Language (e.g. English, Spanish)"
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                    <select
                      value={lang.proficiency}
                      onChange={(e) => updateLanguage(idx, 'proficiency', e.target.value)}
                      className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    >
                      <option value="Native / Bilingual">Native / Bilingual</option>
                      <option value="Fluent / Full Professional">Fluent / Full Professional</option>
                      <option value="Professional Working">Professional Working</option>
                      <option value="Conversational">Conversational</option>
                      <option value="Elementary">Elementary</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => removeLanguage(idx)}
                      className="text-slate-500 hover:text-red-400 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              Cancel
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleSaveAndClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs border border-slate-700 flex items-center gap-2 transition"
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Save & View Resume</span>
            </button>

            <button
              type="button"
              onClick={handleSaveAndDownload}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition"
            >
              <FileDown className="w-4 h-4 stroke-[2.5]" />
              <span>Save & Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
