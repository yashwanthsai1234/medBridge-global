import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import productRoutes from './routes/products';
import supplierRoutes from './routes/suppliers';
import authRoutes from './routes/auth';
import contactRoutes from './routes/contact';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve static files from public/
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

export default app;