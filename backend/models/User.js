const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);
