const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number },
  role: { type: String, enum: ['user', 'doctor', 'admin'], default: 'user' },
  isVerified: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
