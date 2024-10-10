CREATE DATABASE librarydb;

USE librarydb;

CREATE TABLE
    books (
        id int NOT NULL AUTO_INCREMENT,
        title VARCHAR(255),
        author VARCHAR(255),
        available CHAR(1),
        category INT,
        PRIMARY KEY (id)
    );

SHOW TABLES;

INSERT INTO
    books (title, author, available, category)
VALUES
    ('Algebra II All-in-One For Dummies', 'Mary Jane Sterling', 'Y', 0);
INSERT INTO
    books (title, author, available, category)
VALUES
    (
        'Calculus II Workbook For Dummies',
        'Mark Zegarelli',
        'N',
        1
    );
INSERT INTO
    books (title, author, available, category)
VALUES
    (
        'Calculus All-in-One For Dummies',
        ' Mark Ryan',
        'Y',
        1
    );
INSERT INTO
    books (title, author, available, category)
VALUES
    ('Statistics All-in-One For Dummies', 'Deborah J. Rumsey', 'Y', 3);
INSERT INTO
    books (title, author, available, category)
VALUES
    ('Geometry: 1001 Practice Problems For Dummies', 'Allen Ma , Amber Kuang', 'Y', 2);
INSERT INTO
    books (title, author, available, category)
VALUES
    ('Algebra I All-in-One For Dummies', 'Mary Jane Sterling', 'N', 0);
INSERT INTO
    books (title, author, available, category)
VALUES
    ('Statistics II For Dummies', 'Deborah J. Rumsey', 'Y', 3);
INSERT INTO
    books (title, author, available, category)
VALUES
    ('Trigonometry For Dummies', 'Mary Jane Sterling', 'Y', 4);
INSERT INTO
    books (title, author, available, category)
VALUES
    ('Trigonometry Workbook For Dummies', 'Mary Jane Sterling', 'N', 4);