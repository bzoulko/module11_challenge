/*
    Created:    09/28/2022 
    Programmer: Brian Zoulko
    Notes:      Devopled JAVASCRIPT module using Express.js for back end processing.

    Modification
    ============
    09/28/2022 Brian Zoulko    Initial creation of js module.
*/

// Define variables for back end connection to front end.
const express = require('express');
const server = express();
const PORT = 3001;

// Allow reference from the public path.
server.use(express.static('public'));

// When requests come in, reply with a response.
server.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

// Start listening for requests.
server.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
