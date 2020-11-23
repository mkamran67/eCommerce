import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

router.get('/', async (req, res) => {
  // empty obj gives us all of the data
  const products = await Product.find({});
  res.json(products);
});
