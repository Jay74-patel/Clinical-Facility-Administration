const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRotes');
const authRoures = require('./Routes/authRoutes')
require('./Models/database');
require('dotenv').config();


const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());


// Routes
app.use('/users', userRoutes);
app.use('/auth', authRoures)
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
