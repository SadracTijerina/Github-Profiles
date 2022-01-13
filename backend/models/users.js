const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  repoCount: { type: Number, required: true },
  followerCount: { type: Number, required: true },
  history: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("User", userSchema);
