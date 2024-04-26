const mongoose = require("mongoose");
const SchemaObject = {
  userName: String,
  email: String,
  password: String,
};

const UserSchema = new mongoose.Schema(SchemaObject);
const model = mongoose.model("User", UserSchema);

module.exports = model;
