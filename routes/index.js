/*
    Created:    09/29/2022 
    Programmer: Brian Zoulko
    Notes:      Devopled JAVASCRIPT modular routine for client side.

    Modification
    ============
    09/29/2022 Brian Zoulko    Initial creation of js module.
*/

const express = require('express');

// Import modular routers for routes.
const notes = require('./notes');
const app = express();

app.use('/notes', notes);

module.exports = app;
