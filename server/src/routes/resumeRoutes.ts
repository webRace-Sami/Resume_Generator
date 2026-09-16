import { Router, Request, Response } from 'express';
import { ResumeModel } from '../models/Resume.js';
import { sampleResumes } from '../data/sampleResumes.js';

const router = Router();

// In-memory cache store for zero-delay operations and fallback if MongoDB is offline
let memoryResumes = [...sampleResumes.map((r, i) => ({ ...r, _id: `mem-${i + 1}`, createdAt: new Date(), updatedAt: new Date() }))];

// GET /api/resumes - Get all resumes
router.get('/', async (req: Request, res: Response) => {
  try {
    if (ResumeModel.db?.readyState === 1) {
      const dbResumes = await ResumeModel.find().sort({ updatedAt: -1 });
      if (dbResumes.length > 0) {
        return res.json({ success: true, data: dbResumes });
      }
    }
    return res.json({ success: true, data: memoryResumes });
  } catch (err) {
    return res.json({ success: true, data: memoryResumes });
  }
});

// GET /api/resumes/samples - Get pre-made professional resume presets
router.get('/samples', (_req: Request, res: Response) => {
  res.json({ success: true, data: sampleResumes });
});

// GET /api/resumes/:id - Get single resume
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (ResumeModel.db?.readyState === 1) {
      const doc = await ResumeModel.findById(id);
      if (doc) return res.json({ success: true, data: doc });
    }
    const found = memoryResumes.find((r: any) => r._id === id || r.id === id);
    if (found) return res.json({ success: true, data: found });

    return res.status(404).json({ success: false, message: 'Resume not found' });
  } catch (err) {
    const found = memoryResumes.find((r: any) => r._id === req.params.id);
    if (found) return res.json({ success: true, data: found });
    return res.status(404).json({ success: false, message: 'Resume not found' });
  }
});

// POST /api/resumes - Create new resume
router.post('/', async (req: Request, res: Response) => {
  try {
    const resumeData = req.body;
    let savedDoc: any = null;

    if (ResumeModel.db?.readyState === 1) {
      savedDoc = await ResumeModel.create(resumeData);
    } else {
      const newId = `resume-${Date.now()}`;
      savedDoc = {
        ...resumeData,
        _id: newId,
        id: newId,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      memoryResumes.unshift(savedDoc);
    }

    return res.status(201).json({ success: true, data: savedDoc });
  } catch (err: any) {
    console.error('Error saving resume:', err);
    return res.status(500).json({ success: false, message: err.message || 'Failed to save resume' });
  }
});

// PUT /api/resumes/:id - Update existing resume
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    let updatedDoc: any = null;

    if (ResumeModel.db?.readyState === 1) {
      updatedDoc = await ResumeModel.findByIdAndUpdate(id, updateData, { new: true });
    }

    const memIndex = memoryResumes.findIndex((r: any) => r._id === id || r.id === id);
    if (memIndex !== -1) {
      memoryResumes[memIndex] = { ...memoryResumes[memIndex], ...updateData, updatedAt: new Date() };
      updatedDoc = memoryResumes[memIndex];
    } else if (!updatedDoc) {
      const newDoc = { ...updateData, _id: id, updatedAt: new Date() };
      memoryResumes.unshift(newDoc);
      updatedDoc = newDoc;
    }

    return res.json({ success: true, data: updatedDoc });
  } catch (err: any) {
    console.error('Error updating resume:', err);
    return res.status(500).json({ success: false, message: err.message || 'Failed to update resume' });
  }
});

// DELETE /api/resumes/:id - Delete a resume
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (ResumeModel.db?.readyState === 1) {
      await ResumeModel.findByIdAndDelete(id);
    }
    memoryResumes = memoryResumes.filter((r: any) => r._id !== id && r.id !== id);
    return res.json({ success: true, message: 'Resume deleted successfully' });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: 'Failed to delete resume' });
  }
});

export default router;
