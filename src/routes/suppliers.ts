// src/routes/suppliers.ts
import { Router, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Supplier from '../models/Supplier';

const router = Router();

// GET /api/suppliers
router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  })
);

// GET /api/suppliers/:id
router.get(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      res.status(404).json({ success: false, message: 'Supplier not found' });
      return;
    }
    res.json(supplier);
  })
);

export default router;
