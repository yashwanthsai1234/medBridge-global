// src/routes/products.ts
import { Router, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/Product';

const router = Router();

// GET /api/products
router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter);
    res.json(products);
  })
);

// GET /api/products/search
router.get(
  '/search',
  asyncHandler(async (req: Request, res: Response) => {
    const q = String(req.query.q || '');
    if (!q) {
      res.status(400).json({ success: false, message: 'Search query is required' });
      return;
    }
    const products = await Product.find({
      $or: [
        { name:        { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { category:    { $regex: q, $options: 'i' } },
      ],
    });
    res.json(products);
  })
);

// GET /api/products/:id
router.get(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ success: false, message: 'Product not found' });
      return;
    }
    res.json(product);
  })
);

export default router;
