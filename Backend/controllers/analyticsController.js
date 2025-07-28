const Product = require('../models/Product');

exports.mostAddedProducts = async (req, res) => {
  try {
    const products = await Product.find({}, { name: 1, quantity: 1, _id: 0 })
      .sort({ quantity: -1 })
      .limit(5);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}; 