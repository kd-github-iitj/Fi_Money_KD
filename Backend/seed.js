require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Product = require('./models/Product');

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Clear existing data
  await User.deleteMany();
  await Product.deleteMany();

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = new User({ username: 'admin', password: adminPassword, role: 'admin' });
  await admin.save();

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 10);
  const user = new User({ username: 'user', password: userPassword, role: 'user' });
  await user.save();

  // Create sample products
  const products = [
    { name: 'Laptop', type: 'Electronics', sku: 'SKU001', image_url: '', description: 'A powerful laptop', quantity: 10, price: 1200 },
    { name: 'Phone', type: 'Electronics', sku: 'SKU002', image_url: '', description: 'A smart phone', quantity: 25, price: 800 },
    { name: 'Desk Chair', type: 'Furniture', sku: 'SKU003', image_url: '', description: 'Comfortable chair', quantity: 15, price: 150 },
  ];
  await Product.insertMany(products);

  console.log('Database seeded!');
  mongoose.disconnect();
};

seed(); 