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

// Define an array of the category options
const categoryOptions = ['breakfast', 'lunch', 'dinner', 'other'];

// GET /report
router.get('/', async (req, res) => {
    // Destructure the query parameters to extract user_id, year, and month
    const { user_id, year, month } = req.query;

    try {
        // Create an empty object to store the formatted report
        const formattedReport = {};

        // Initialize each category in the formatted report as an empty array
        categoryOptions.forEach(category => {
            formattedReport[category] = [];
        });

        // Find calorie entries for the user for the specified year and month
        const report = await Calories.find({ user_id: Number(user_id), year: Number(year), month: Number(month) })
            .select('category day description amount');

        // Log the found records for debugging
        console.log('Found records:', report);

        // Iterate over the user report and push the calorie entries to the corresponding category in the formatted report
        report.forEach(entry => {
            formattedReport[entry.category].push({
                day: entry.day,
                description: entry.description,
                amount: entry.amount
            });
        });

        // Send a 200 (OK) response with the formatted report in JSON format
        res.status(200).json(formattedReport);
    } catch (err) {
        // If an error occurs, log the error and send a 500 (Internal Server Error) response with the error message
        console.error('Error generating report:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; // Exporting the router module
