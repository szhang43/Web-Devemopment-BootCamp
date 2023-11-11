const express = require('express');
const app = express();
const path = require('path');
/* ------------------- Mongoose Connection ---------------*/
const mongoose = require("mongoose"); 
mongoose.connect("mongodb://127.0.0.1:27017/shopApp")
    .then(() => {
        console.log("Mongo Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...", error);
    })
/* ----------------------------------------------------------*/

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Listening on Port 3000...");
});

app.get('/dogs', (req, res) => {
    res.send("Woof!");
})