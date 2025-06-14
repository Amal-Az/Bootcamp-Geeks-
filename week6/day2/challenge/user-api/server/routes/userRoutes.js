const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/users', controller.getAll);
router.get('/users/:id', controller.getOne);
router.put('/users/:id', controller.update);

module.exports = router;
