const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up Express App and PORT
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static content from public folder
app.use(express.static('public'));

// Parse application
app.use(bodyParser.json());

// Base route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server to begin listening
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

