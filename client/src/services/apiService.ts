import { ResumeData } from '../types/resume';

const LOCAL_STORAGE_KEY = 'resumegenerator_active_resume';
const SAVED_LIST_KEY = 'resumegenerator_saved_list';

// Supports custom deployed backend URL (Render) or local proxy fallback
const API_BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace(/\/+$/, '')
  : '';

export const saveResumeToStorage = (resume: ResumeData): void => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resume));
    
    // Also update saved list
    const existingListStr = localStorage.getItem(SAVED_LIST_KEY);
    let list: ResumeData[] = existingListStr ? JSON.parse(existingListStr) : [];
    const index = list.findIndex(r => (r.id && r.id === resume.id) || (r._id && r._id === resume._id));
    if (index >= 0) {
      list[index] = resume;
    } else {
      list.unshift(resume);
    }
    localStorage.setItem(SAVED_LIST_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }
};

export const loadResumeFromStorage = (): ResumeData | null => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn('LocalStorage load failed:', e);
  }
  return null;
};

export const loadSavedListFromStorage = (): ResumeData[] => {
  try {
    const data = localStorage.getItem(SAVED_LIST_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn('LocalStorage list load failed:', e);
  }
  return [];
};

// Backend REST API Sync
export const syncResumeWithBackend = async (resume: ResumeData): Promise<ResumeData | null> => {
  try {
    const isUpdate = resume._id || resume.id;
    const path = isUpdate ? `/api/resumes/${resume._id || resume.id}` : '/api/resumes';
    const url = `${API_BASE_URL}${path}`;
    const method = isUpdate ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resume),
    });

    if (response.ok) {
      const result = await response.json();
      return result.data;
    }
  } catch (err) {
    // Graceful fallback to client-side storage
    console.log('Backend sync offline, saving locally in browser.');
  }
  return null;
};
