const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    profession: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true },
    password: { type: String, required: true, minlength: 8 },
  },
  { timestamps: true }
);

let Users = mongoose.model("users", userSchema);

module.exports = Users;
