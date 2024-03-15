require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This will help us pass data from page to page

// Adding the STATIC FILES
app.use(express.static('public'));

// Adding Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render('index');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});