import express from 'express';
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productContoller.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route -> /api/products
router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

// @desc    Get Product by ID Routes
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct);

export default router;
