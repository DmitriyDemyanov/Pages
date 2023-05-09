const ContentModel = require('../models/contentModel');

exports.getBooks = async (req, res) => {
  const books = await ContentModel.fetchBooks();
  res.status(200).json(books);
}

exports.getRandomBook = async (req, res) => {
  const book = await ContentModel.fetchRandomBook();
  res.status(200).json(book);
}

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await ContentModel.fetchBookById(id);
  res.status(200).json(book);
}

exports.getAuthor = async (req, res) => {
  const author = await ContentModel.fetchAuthor();
  res.status(200).json(author);
}

exports.getCorporations = async (req, res) => {
  const corporations = await ContentModel.fetchCorporations();
  res.status(200).json(corporations);
}

exports.getTestimonials = async (req, res) => {
  const testimonials = await ContentModel.fetchTestimonials();
  res.status(200).json(testimonials);
}

exports.getArticlesShort = async (req, res) => {
  const articles = await ContentModel.fetchArticlesShort();
  res.status(200).json(articles);
}
