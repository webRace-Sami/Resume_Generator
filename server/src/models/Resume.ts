import mongoose, { Document, Schema } from 'mongoose';

export interface IResume extends Document {
  title: string;
  templateId: string;
  style: {
    accentColor: string;
    isMonochrome: boolean;
    fontFamily: string;
    fontSize: 'compact' | 'normal' | 'large';
    spacing: 'tight' | 'normal' | 'relaxed';
    showPhoto: boolean;
  };
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
    photoUrl?: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    jobTitle: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    description: string[];
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    location?: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    details?: string;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  projects: Array<{
    id: string;
    title: string;
    role?: string;
    technologies: string[];
    link?: string;
    description: string[];
  }>;
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
  }>;
  languages: Array<{
    language: string;
    proficiency: string;
  }>;
  customSections: Array<{
    id: string;
    heading: string;
    items: Array<{
      title: string;
      subtitle?: string;
      date?: string;
      description?: string;
    }>;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema = new Schema<IResume>(
  {
    title: { type: String, required: true, default: 'My Professional Resume' },
    templateId: { type: String, required: true, default: 'modern-clean' },
    style: {
      accentColor: { type: String, default: '#0284c7' },
      isMonochrome: { type: Boolean, default: false },
      fontFamily: { type: String, default: 'Inter' },
      fontSize: { type: String, default: 'normal' },
      spacing: { type: String, default: 'normal' },
      showPhoto: { type: Boolean, default: true },
    },
    personalInfo: {
      fullName: { type: String, default: '' },
      jobTitle: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      location: { type: String, default: '' },
      website: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      github: { type: String, default: '' },
      photoUrl: { type: String, default: '' },
      summary: { type: String, default: '' },
    },
    experience: [
      {
        id: String,
        jobTitle: String,
        company: String,
        location: String,
        startDate: String,
        endDate: String,
        isCurrent: Boolean,
        description: [String],
      },
    ],
    education: [
      {
        id: String,
        degree: String,
        institution: String,
        location: String,
        startDate: String,
        endDate: String,
        gpa: String,
        details: String,
      },
    ],
    skills: [
      {
        category: String,
        items: [String],
      },
    ],
    projects: [
      {
        id: String,
        title: String,
        role: String,
        technologies: [String],
        link: String,
        description: [String],
      },
    ],
    certifications: [
      {
        id: String,
        name: String,
        issuer: String,
        date: String,
        credentialUrl: String,
      },
    ],
    languages: [
      {
        language: String,
        proficiency: String,
      },
    ],
    customSections: [
      {
        id: String,
        heading: String,
        items: [
          {
            title: String,
            subtitle: String,
            date: String,
            description: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const ResumeModel = mongoose.models.Resume || mongoose.model<IResume>('Resume', ResumeSchema);
