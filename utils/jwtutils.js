const jwt = require('jsonwebtoken');
const User = require('../Models/userSchema');

exports.genrateToken = (id) => {

    const token = jwt.sign({ _id: id }, process.env.JWT_SECRET, { expiresIn: '1D' })
    return token;
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}