const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Invalid product ID" });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid product ID" });
  }
});

// READ ALL with filters
router.get('/', async (req, res) => {
  try {
    const { category, minPrice, maxPrice, sortBy, page = 1, limit = 10 } = req.query;
    const query = {};

    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    let mongooseQuery = Product.find(query);

    if (sortBy === 'price_asc') mongooseQuery = mongooseQuery.sort({ price: 1 });
    if (sortBy === 'price_desc') mongooseQuery = mongooseQuery.sort({ price: -1 });
    if (sortBy === 'createdAt_desc') mongooseQuery = mongooseQuery.sort({ createdAt: -1 });

    const skip = (Number(page) - 1) * Number(limit);
    mongooseQuery = mongooseQuery.skip(skip).limit(Number(limit));

    const products = await mongooseQuery;
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
