const path = require('../utils/path');
const loadFile = require('../utils/loadFile');

module.exports = class ContentModel {
  static savedBooks   = null;
  static savedContent = null;

  static contentPath = path.getPathName('data', 'siteContent.json');
  static booksPath   = path.getPathName('data', 'books.json');

  static async fetchAllContent() {
    if (!this.savedContent) {
      this.savedContent = await loadFile(this.contentPath);
    }
    return this.savedContent;
  }

  static async fetchAllBooks() {
    if (!this.savedBooks) {
      this.savedBooks = await loadFile(this.booksPath);
    }
    return this.savedBooks;
  }

  static async fetchBooks() {
    return await this.fetchAllBooks();
  }

  static async fetchRandomBook() {
    const books = await this.fetchAllBooks();
    const index = Math.floor(Math.random() * books.length);
    return books[index];
  }

  static async fetchBookById(id) {
    const books = await this.fetchAllBooks();
    return books.find(book => book.id === Number(id));
  }

  static async fetchAuthor() {
    const content = await this.fetchAllContent();
    return content.author;
  }

  static async fetchCorporations () {
    const content = await this.fetchAllContent();
    return content.corporations;
  }

  static async fetchTestimonials () {
    const content = await this.fetchAllContent();
    return content.testimonials;
  }
}
