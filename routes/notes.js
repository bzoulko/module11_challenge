/*
    Created:    09/29/2022 
    Programmer: Brian Zoulko
    Notes:      Devopled JAVASCRIPT modular routine for client side.

    Modification
    ============
    09/29/2022 Brian Zoulko    Initial creation of js module.
*/

const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, writeToFile, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving NOTES.
notes.get('/', (req, res) => {  
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
});

// POST Route for saving a NOTE.
notes.post('/', (req, res) => {
  
  const { title, text } = req.body;
  const note = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/notes.json');
    res.json(`Note added`);
  } else {
    res.json({
      message: 'Object is valid, not logging. Check front end implementation',
      error: note.errors,
    });
  }
});

// GET Route for a specific id
notes.get('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  const note = req.body;

  readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});

// DELETE Route for a specific note
notes.delete('/:note_id', (req, res) => {
  const noteId = req.params.note_id;

  readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {

      const note = JSON.stringify(json);

      // Make a new array of all notes except the one with the ID to be removed.
      const result = json.filter((note) => note.id !== noteId);
      
      // Save that new list of notes.
      writeToFile('./db/notes.json', result);

      // Respond to the DELETE request
      res.json(`Note ${noteId} has been deleted 🗑️`);
    });
});


module.exports = notes
