const booksData = require("./data/books.json");
const Book = require("./model/Book");
const insertBooks = async () => {
  try {
    for (const bookData of booksData) {
      const { author, title, year: publicationYear } = bookData;

      const newBook = new Book({
        author,
        title,
        publicationYear,
      });

      await newBook.save();
    }

    console.log("Books inserted successfully");
  } catch (error) {
    console.error("Error inserting books:", error);
  }
};

insertBooks();
