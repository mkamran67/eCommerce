import express from 'express';
import {
  getProductById,
  getProducts,
} from '../controllers/productContoller.js';

const router = express.Router();

// @desc    Get all Products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts);

// @desc    Get Product by ID
// @route   GET /api/products/:id
// @access  Public
router.route('/:id').get(getProductById);

export default router;
