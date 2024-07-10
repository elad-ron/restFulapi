/*
 * Developers:
 * - First Name: Elad
 * - Last Name: Ron
 * - ID: 318432937
 *
 * - First Name: Ami
 * - Last Name: Berebi
 * - ID: 208890293
 */

const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = require('./app'); // Importing Express app instance from app.js

dotenv.config({ path: './config.env' }); // Loading environment variables from config.env file

const url = process.env.DATABASE_URL; // Getting database connection URL from environment variables
const port = process.env.PORT || 3000; // Setting server port from environment variables or defaulting to 3000

// Database connection
mongoose.connect(url)
    .then(() => {
        console.log('Connected to the DB'); // Successful connection message
    })
    .catch((err) => {
        console.error(`Failed to connect to DB: ${err}`); // Error message if connection fails
        process.exit(1);  // Exit process if DB connection fails
    });

// Starting the Express app
app.listen(port, () => {
    console.log('app running on port ' + port); // Server start message
});

