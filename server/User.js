const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, lowercase: true },
  username: { type: String, lowercase: true },
  password: String,
});

module.exports = mongoose.model("User", userSchema);
