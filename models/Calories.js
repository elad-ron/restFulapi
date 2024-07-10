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

const mongoose = require('mongoose');
const express = require('express');

const  caloriesSchema = new mongoose.Schema({
    // Define the 'id' as a default generated value.
    id: {
        type: Number,
        default: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1 // Generates a random number for 'id'
    },
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    category: String,
    amount: Number
})

// Create a Mongoose model based on the schema, named 'Calories'
const Calories = mongoose.model('Calories', caloriesSchema);
module.exports = Calories;