/*
    Created:    09/28/2022 
    Programmer: Brian Zoulko
    Notes:      Devopled JAVASCRIPT module using Express.js for back end processing.

    Modification
    ============
    09/28/2022 Brian Zoulko    Initial creation of js module.
*/

// Define express connection for server/back end process.
const express = require('express');
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

// Added 09/28/22 BZ - Parsing for JSON and urlencoded form data.
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3000/images/cat.jpg
app.use(express.static('public'));


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// GET Route for Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT} for NOTES...`)
);













// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// // Added these lines to fix the error in: (index.js:32)
// // GET request for notes
// app.get('/api/notes', (req, res) => {
//   return(res.status(200).json(notes));
// });

// // POST request to add a review
// // NOTE: Data persistence isn't set up yet, so this will only exist in memory until we implement it
// app.post('/api/notes', (req, res) => {
  
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a note`);

//   // Destructuring assignment for the items in req.body
//   const { title, text } = req.body;

//   // If all the required properties are present
//   if (title && text) {
//     // Variable for the object we will save
//     const newNote = {
//       title,
//       text,
//     };

//     const response = {
//       status: 'success',
//       body: newNote,
//     };

//     console.log(response);
//     res.status(201).json(response);
    
//     // Read and reWrite file.

//   } else {
//     res.status(500).json('Error in posting note');
//   }

// });


// app.listen(PORT, () =>
//   console.log(`Serving static asset routes on port ${PORT}!`)
// );
