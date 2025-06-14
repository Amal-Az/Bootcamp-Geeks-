const Book = require('../models/bookModel');

exports.getAll = async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
};

exports.getOne = async (req, res) => {
    const book = await Book.getBookById(req.params.bookId);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

exports.create = async (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = await Book.createBook(title, author, publishedYear);
    res.status(201).json(newBook);
};
