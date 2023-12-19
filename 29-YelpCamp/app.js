/* Express app packages */
const express = require('express');
const app = express();

/* Mongoose Connection & Model */
const Campground = require("./models/campground");

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/YelpCamp')
    .then(() => {
        console.log("Mongo Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...", error);
    })

/* Path for directories */
const path = require("path"); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* CampApp Routes */
app.get('/', (req, res) => {
    res.render("home");
});

app.get('/makecamp', (req, res) => {
    const camp = new Campground({
        title : "Nature Nova"
    });
})
/* App is listening on PORT 3000 */
app.listen(3000, () => {
    console.log("Listening on PORT 3000")
});