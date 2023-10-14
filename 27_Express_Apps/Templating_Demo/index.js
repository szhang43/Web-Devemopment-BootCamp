const express = require('express');
const app = express();
const path = require('path')
const redditData = require('./data.json');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views')); //Use directory name were index.js is located

app.get('/', (req, res) => {
    res.render("home"); // don't need to add ejs since we set views to ejs files
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1 
    res.render("random", {rand:num});
})

app.get('/cats', (req, res) => {
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
    res.render('cats', {cats});
})
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params; 
    const data = redditData[subreddit];
    // console.log({...data})
    // console.log("________________________");
    // console.log({data})
    if(data){
        res.render('subreddit', {...data});
    } else {
        res.render("404", { subreddit });
    }
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
});