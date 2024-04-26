const express = require("express");
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);
router.put("/", updateBook);
router.delete("/", deleteBook);

module.exports = router;
