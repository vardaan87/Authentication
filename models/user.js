const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/authapp")
  .then(() => console.log("Connected!"));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
