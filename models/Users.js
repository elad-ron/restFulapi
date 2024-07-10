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

const usersSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: String,

})

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;