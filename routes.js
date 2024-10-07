const dao = require('./DAO');

const BASEURI = '/api/library';

const libraryServices = (app) => {
  app.get(BASEURI + '/books', (req, res) => {
    console.log('GET: books');
    dao.getBooks((result) => {
      const books = result.map((v) => Object.assign({}, v));
      return res.send(books);
    });
  });
  app.get(BASEURI + '/books/available', (req, res) => {
    console.log('GET: books available');
    dao.getAvailableBooks((result) => {
      const books = result.map((v) => Object.assign({}, v));
      return res.send(books);
    });
  });
  app.get(BASEURI + '/books/:id', (req, res) => {
    const bookId = +req.params.id;
    console.log('GET: book ' + bookId);
    dao.getBook(bookId, (result) => {
      const book = result.map((v) => Object.assign({}, v));
      return res.send(book[0]);
    });
  });
  app.get(BASEURI + '/search', (req, res) => {
    const category = req.query.category;
    console.log('GET: books by ' + category);
    dao.getBooksByCategory(category, (result) => {
      const books = result.map((v) => Object.assign({}, v));
      return res.send(books);
    });
  });
  app.post(BASEURI + '/books', (req, res) => {
    const newBook = req.body;
    console.log('POST: book', newBook);
    dao.insertBook(newBook, (result) => {
      return res.send(result);
    });
  });
  app.delete(BASEURI + '/books/:id', (req, res) => {
    const bookId = +req.params.id;
    console.log('DELETE: book', bookId);
    dao.deleteBook(bookId, (result) => {
      return res.send(result);
    });
  });
  app.put(BASEURI + '/books/:id', (req, res) => {
    const bookId = +req.params.id;
    const newBook = req.body;
    console.log('PUT: book', bookId);
    dao.updateBook(bookId, newBook, (result) => {
      return res.send(result);
    });
  });
};

module.exports.libraryServices = libraryServices;
