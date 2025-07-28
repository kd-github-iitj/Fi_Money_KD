const Product = require('../models/Product');
const { validationResult } = require('express-validator');

exports.addProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ id: product._id, message: 'Product added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.updateProductQuantity = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const product = await Product.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Quantity updated', product });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const products = await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();
    res.json({
      page,
      limit,
      total,
      products
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}; 