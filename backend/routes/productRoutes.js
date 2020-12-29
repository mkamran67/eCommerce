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

// @desc    Get all Products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

// @desc    Get Product by ID
// @route   GET /api/products/:id
// @access  Public
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct);

export default router;
