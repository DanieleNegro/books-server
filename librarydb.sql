CREATE DATABASE librarydb;

USE librarydb;

CREATE TABLE
    books (
        id int NOT NULL AUTO_INCREMENT,
        title VARCHAR(255),
        author VARCHAR(255),
        available CHAR(),
        category VARCHAR(255),
        PRIMARY KEY (id)
    );

INSERT INTO
    books (title, author, available, category)
VALUES
    ('Ulysses', 'James Joyce', 'Y', 'Fiction');

INSERT INTO
    books (title, author, available, category)
VALUES
    (
        'A Farewell to Arms',
        'Ernest Hemingway',
        'N',
        'Fiction'
    );

INSERT INTO
    books (title, author, available, category)
VALUES
    (
        'I Know Why the Caged Bird Sings',
        'Maya Angelou',
        'Y',
        'Poetry'
    );

INSERT INTO
    books (title, author, available, category)
VALUES
    ('Moby Dick', 'Herman Melville', 'Y', 'Fiction');