const mongoose = require("mongoose");

const SchemaObject = {
  title: String,
  author: String,
  publicationYear: Number,
};

const BookSchema = new mongoose.Schema(SchemaObject, { timestamps: true });

const model = mongoose.model("Book", BookSchema);

module.exports = model;
