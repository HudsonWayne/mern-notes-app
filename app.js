require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.json()); // Parse JSON data

// Adding the STATIC FILES
app.use(express.static('public')); // Make the 'public' folder accessible for static files

// Adding Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main'); // Set the default layout file
app.set('view engine', 'ejs'); // Use EJS templating engine

// **Assuming 'index.js' exports a router object:**
const router = require('./server/routes/index'); // Import the router
app.use('/', router); // Use the imported router at the root path

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});