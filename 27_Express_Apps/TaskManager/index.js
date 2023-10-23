const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid'); // Used for generating unique IDs

// Configure middleware for parsing requests and serving static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data in requests
app.use(express.static('public')); // Serve static files from the 'public' directory

// Set up paths for your application's views and templates
app.set('public', path.join(__dirname, '/public')); // Configure the 'public' directory
app.set('views', path.join(__dirname, '/views')); // Configure the 'views' directory
app.set('view engine', 'ejs'); // Set the view engine to EJS

app.get('/todos', (req, res) => {
    res.render('todos/index')
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})