/*
    Created:    09/29/2022 
    Programmer: Brian Zoulko
    Notes:      Devopled JAVASCRIPT modular routine for client side.

    Modification
    ============
    09/29/2022 Brian Zoulko    Initial creation of js module.
*/

const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving NOTES.
notes.get('/', (req, res) => {  
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
});

// POST Route for saving a NOTE.
notes.post('/', (req, res) => {
  
  const { isValid, errors } = req.body;
  const note = req.body;

  if (!isValid) {
    console.log(note);
    readAndAppend(note, './db/notes.json');
    res.json(`Notes added`);
  } else {
    res.json({
      message: 'Object is valid, not logging. Check front end implementation',
      error: note.errors,
    });
  }
});

module.exports = notes
