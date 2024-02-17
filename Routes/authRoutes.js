const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

router.post('/register', authController.Register);
router.post('/login', authController.Login)
router.get('/verify/:token', authController.verifyAccount)

module.exports = router;