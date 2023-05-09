const express = require('express');
const {
  getBooks,
  getRandomBook,
  getBookById,
  getAuthor,
  getCorporations,
  getTestimonials
} = require('../controllers/contentController');

const router = express.Router();

router.get('/books/random', getRandomBook);
router.get('/books/:id', getBookById);
router.get('/books', getBooks);

router.get('/corporations', getCorporations);
router.get('/testimonials', getTestimonials);

router.get('/author', getAuthor);


module.exports = router;
