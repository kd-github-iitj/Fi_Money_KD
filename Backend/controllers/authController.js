const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials : User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials : Password does not match' });

    const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(409).json({ message: 'User already exists' });
    const hashed = await require('bcrypt').hash(password, 10);
    const user = new User({ username, password: hashed });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}; 