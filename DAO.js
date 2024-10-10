'use strict';

const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root5621',
  database: 'librarydb',
});

const getBooks = (callback) => {
  con.query(
    'SELECT * FROM librarydb.books LIMIT 100',
    (err, result, fields) => {
      if (err) throw err;
      return callback(result);
    }
  );
};

const getBook = (id, callback) => {
  const sqlQuery = `SELECT * FROM librarydb.books WHERE id = ${id}`;
  con.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    return callback(result);
  });
};

const getBooksByCategory = (category, callback) => {
  const sqlQuery = `SELECT * FROM librarydb.books WHERE category = "${category}"`;
  con.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    return callback(result);
  });
};

const getAvailableBooks = (callback) => {
  con.query(
    'SELECT * FROM librarydb.books WHERE available = "Y"',
    (err, result, fields) => {
      if (err) throw err;
      return callback(result);
    }
  );
};

const insertBook = (body, callback) => {
  const sqlQuery = `INSERT INTO librarydb.books (title, author, available, category) VALUES("${body.title}","${body.author}","${body.available}",${body.category})`;
  con.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    return callback(result);
  });
};

const deleteBook = (id, callback) => {
  const sqlQuery = `DELETE FROM librarydb.books WHERE id = ${id}`;
  con.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    return callback(result);
  });
};

const updateBook = (id, body, callback) => {
  const sqlQuery = ` UPDATE librarydb.books SET title = "${body.title}", author = "${body.author}", available = "${body.available}", category = ${body.category} WHERE id = ${id}`;
  con.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    return callback(result);
  });
};

module.exports.getBooks = getBooks;
module.exports.getBook = getBook;
module.exports.getBooksByCategory = getBooksByCategory;
module.exports.getAvailableBooks = getAvailableBooks;
module.exports.insertBook = insertBook;
module.exports.deleteBook = deleteBook;
module.exports.updateBook = updateBook;
