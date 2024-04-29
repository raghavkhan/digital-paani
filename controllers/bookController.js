const mongoose = require("mongoose");
const Book = require("../model/Book");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createBook = async (req, res) => {
  req.body.user = req.user.userId;
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};
const getBooks = async (req, res) => {
  let query = {};
  if (req.query.author) {
    query.author = req.query.author;
  }
  if (req.query.publicationYear) {
    query.publicationYear = req.query.publicationYear;
  }
  const books = await Book.find(query);
  if (!books) {
    throw new CustomError.NotFoundError("No book found");
  }
  res.status(StatusCodes.OK).json({ books });
};

const updateBook = async (req, res) => {
  const { id: bookId } = req.params;
  const books = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!books) {
    throw new CustomError.NotFoundError("No book found");
  }
  res.status(StatusCodes.OK).json({ books });
};
const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;
  const books = await Book.findOneAndDelete({ _id: bookId });
  if (!books) {
    throw new CustomError.NotFoundError("No book found");
  }
  res.status(StatusCodes.OK).json({ msg: "Success! book removed" });
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
