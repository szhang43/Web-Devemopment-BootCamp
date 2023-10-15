const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json'); // Import data from data.json

app.use(express.static('public'));
app.set('public', path.join(__dirname, '/public'));

// Set the view engine to EJS (Embedded JavaScript)
app.set('view engine', 'ejs');

// Set the views directory to the 'views' folder in the current directory
app.set('views', path.join(__dirname, '/views'));

// Define a route for the home page
app.get('/', (req, res) => {
    // Render the 'home' EJS template
    res.render("home"); 
});

// Define a route for a random number page
app.get('/rand', (req, res) => {
    // Generate a random number between 1 and 10
    const num = Math.floor(Math.random() * 10) + 1;
    // Render the 'random' EJS template and pass the random number as data
    res.render("random", { rand: num });
});

// Define a route for the 'cats' page
app.get('/cats', (req, res) => {
    // Create an array of cat names
    const cats = [
        "Whiskers",
        "Mittens",
        "Luna",
        "Oliver",
        "Chloe",
        "Simba",
        "Lucy",
        "Tiger",
        "Bella",
        "Leo",
        "Misty",
    ];
    // Render the 'cats' EJS template and pass the array of cat names as data
    res.render('cats', { cats });
});

// Define a route for subreddit pages
app.get('/r/:subreddit', (req, res) => {
    // Extract the subreddit parameter from the URL
    const { subreddit } = req.params;
    // Get data related to the specified subreddit from the 'redditData' object
    const data = redditData[subreddit];
    if (data) {
        // Render the 'subreddit' EJS template and pass the data related to the subreddit
        res.render('subreddit', { ...data });
    } else {
        // If subreddit data is not found, render the '404' EJS template
        res.render("404", { subreddit });
    }
});

// Start the Express app and listen on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
