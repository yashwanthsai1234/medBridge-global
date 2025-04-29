import mongoose, { Document, Schema } from 'mongoose';

export interface ISupplier extends Document {
  name: string;
  type: string;
  categories: string[];
  description: string;
  logoUrl?: string;
  website?: string;
  contact?: { email: string; phone: string; address: string };
  createdAt: Date;
  updatedAt: Date;
}

const SupplierSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  categories: { type: [String], required: true },
  description: { type: String, required: true },
  logoUrl: { type: String },
  website: { type: String },
  contact: { email: String, phone: String, address: String },
}, { timestamps: true });

export default mongoose.model<ISupplier>('Supplier', SupplierSchema);