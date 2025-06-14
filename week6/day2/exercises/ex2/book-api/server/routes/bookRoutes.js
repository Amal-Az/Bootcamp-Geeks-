const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAll);
router.get('/:bookId', bookController.getOne);
router.post('/', bookController.create);

module.exports = router;
