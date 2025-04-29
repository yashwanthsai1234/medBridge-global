import app from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1);
  }
})();