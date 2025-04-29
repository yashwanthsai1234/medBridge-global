import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  category: string;
  description: string;
  price: number;
  comparisonPrice?: number;
  supplierId: mongoose.Types.ObjectId;
  imageUrl?: string;
  inStock: boolean;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  comparisonPrice: { type: Number, min: 0 },
  supplierId: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
  imageUrl: { type: String },
  inStock: { type: Boolean, default: true },
  rating: { type: Number, min: 0, max: 5 },
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema);