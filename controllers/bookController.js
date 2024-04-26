const getBooks = (req, res) => {
  res.status(200).json({ message: "Books retrieved successfully!" });
};
const createBook = (req, res) => {
  res.status(201).json({ message: "Book created successfully!" });
};
const updateBook = (req, res) => {
  res.status(200).json({
    message: "Book updated successfully!",
  });
};
const deleteBook = (req, res) => {
  res.status(200).json({
    message: "Book deleted successfully!",
  });
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
