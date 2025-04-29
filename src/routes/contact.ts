// src/routes/contact.ts
import { Router, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Contact from '../models/Contact';

const router = Router();

// POST /api/contact
router.post(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      res.status(400).json({ success: false, message: 'All fields are required' });
      return;
    }

    // Save contact entry
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Your message has been sent' });
  })
);

export default router;
