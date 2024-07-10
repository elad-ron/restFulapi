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

// GET the home page
router.get('/', (req, res, next) => {
  res.status(200).set("Content-Type", "text/html"); // Setting response status and content type
  res.render('index', { title: "Homepage" }); // Rendering 'index' view with title 'Homepage'
})

module.exports = router; // Exporting the router module
