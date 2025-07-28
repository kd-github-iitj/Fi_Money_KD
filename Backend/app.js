require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const analyticsRouter = require('./routes/analytics');
const setupSwagger = require('./docs/swagger');
const cors = require('cors');
app.use(cors());

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes placeholder
app.get('/', (req, res) => {
  res.send('Inventory Management API');
});

app.use('/login', authRouter);
app.use('/products', productRouter);
app.use('/analytics', analyticsRouter);
setupSwagger(app);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 