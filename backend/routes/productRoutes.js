import express from 'express';

const router = express.Router();

router.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

router.get('/api/products', (req, res) => {
  res.json(products);
});
