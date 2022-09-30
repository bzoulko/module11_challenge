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
  
  const { title, text } = req.body;
  const note = req.body;

  if (title && text) {
    readAndAppend(note, './db/notes.json');
    res.json(`Note added`);
  } else {
    res.json({
      message: 'Object is valid, not logging. Check front end implementation',
      error: note.errors,
    });
  }
});

module.exports = notes
