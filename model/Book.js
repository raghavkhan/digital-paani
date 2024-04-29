const mongoose = require("mongoose");

const SchemaObject = {
  title: {
    type: String,
    required: [true, "Please provide title"],
    minLength: [4,"title must be at least  6 characters long"], 
    maxLength: [50,"title must not exceed 50 characters"],
    trim:true,
    unique:true
  },
  author: {
    type: String,
    required: [true, "Please provide author"],
    minLength: [4,"author name must be at least 4 characters long"],
    maxLength: [50,"author name must not exceed 50 characters"],
    trim:true,
    unique:true
  },
  publicationYear: {
    type: Number,
    required: [true, "Please provide publication year"],
    validate: {
      validator: function(value) {
        return value.toString().length === 4; 
      },
      message: "Publication year must be a 4-digit number"
    }
  },
};

const BookSchema = new mongoose.Schema(SchemaObject, { timestamps: true });

const model = mongoose.model("Book", BookSchema);

module.exports = model;
