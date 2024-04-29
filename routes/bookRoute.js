const express = require("express");
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const { authenticateUser, authorizePermissions } = require("../middleware/authentication");
const router = express.Router();

router.get("/", getBooks);
router.post("/",[authenticateUser,authorizePermissions("admin")], createBook);
router.patch("/:id",[authenticateUser,authorizePermissions("admin")], updateBook);
router.delete("/:id",[authenticateUser,authorizePermissions("admin")], deleteBook);

module.exports = router;
