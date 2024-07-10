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

const express = require('express');
const router = express.Router();
const Users = require('../models/Users'); // Importing Users model

// GET /users/:id
router.get('/:id', async (req, res) => {
    try {
        // Find a user by ID from the database
        const user = await Users.findOne({ id: req.params.id }).select('id first_name last_name birthday');

        // If user not found, return 404 Not Found status and error message
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            });
        }

        // If user found, return 200 OK status and user data in JSON format
        res.status(200).json({
            status: 'success',
            data: { user }
        });
    } catch (err) {
        // Handle any errors that occur during the process and return 500 Internal Server Error status
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
});

module.exports = router; // Exporting the router module

