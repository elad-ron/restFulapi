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
const Calories = require('../models/Calories'); // Importing Calories model

// POST /addcalories
router.post('/', async (req, res) => {
    try {
        // Destructure request body to extract necessary fields
        const { user_id, year, month, day, description, category, amount } = req.body;

        // Create a new instance of Calories model with extracted fields
        const newCalorie = new Calories({
            user_id,
            year,
            month,
            day,
            description,
            category,
            amount
        });

        // Save the new calorie entry to the database
        const savedCalorie = await newCalorie.save();

        // Respond with 201 Created status and JSON data of the saved calorie entry
        res.status(201).json({
            status: 'success',
            data: { calorie: savedCalorie }
        });
    } catch (err) {
        // Handle any errors that occur during the process
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
});

module.exports = router; // Exporting the router module
