/**
 * add "type" : "module" in package.json
 * incoming files* NOT modules must have a .js
 */

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config({ path: '../.env' });

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running.');
});

// Product Routes
app.use('/api/products', productRoutes);

//
app.use(notFound);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in Developement mode.`);
});
