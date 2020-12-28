/**
 * add "type" : "module" in package.json
 * incoming files* NOT modules must have a .js
 */

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config({ path: '../.env' });

connectDB();

const app = express();

// Allows for the acceptance of JSON data in the body.
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running.');
});

// Product Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Sending Client ID when user is Paying
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//
app.use(notFound);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in Developement mode.`);
});
