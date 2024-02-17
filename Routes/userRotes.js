const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// POST /users
router.post('/', userController.createUser);

// GET /users/:userId
router.get('/', userController.getUserById);

router.get('/all', userController.getUsers);

router.put('/:id', userController.updateUserById)

router.put('/', userController.updateUserById)



module.exports = router;
