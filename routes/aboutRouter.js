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
const developers = require('../developers.json'); // Importing developers data from developers.json file

// GET /about   - details about this project developers
router.get('/', (req, res, next) => {
    res.status(200)
        .json(developers); // Sending JSON response with developers data
})

module.exports = router; // Exporting the router module
