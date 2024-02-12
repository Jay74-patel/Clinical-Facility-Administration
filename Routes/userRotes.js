const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// POST /users
router.post('/', userController.createUser);

// GET /users/:userId
router.get('/userid/:id', userController.getUserById);

module.exports = router;
