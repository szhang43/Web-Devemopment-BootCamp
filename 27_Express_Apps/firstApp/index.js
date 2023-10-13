import express from "express";
const app = express();


// Used to process requests before reaching the route handlers.
// app.use((request, response) => {
//     console.log("We got a new request!");
//     response.send("We got a request, here is a response...")
// })

// Route for the home page
app.get('/', (req, res) => {
    res.send("Welcome, this is the home page!");
})

// Route for handling requests to '/cats'
app.get('/cats', (req, res) => {
    res.send("Cat Request: meow meow!");
})

// Route for handling requests to '/dogs'
app.get('/dogs', (req, res) => {
    res.send("Dog Request: woof woof!");
})

// Route for handling POST requests to '/cats'
app.post('/cats', (req, res) => {
    res.send('Post Request to /cats!')
})

// Dynamic route for subreddits
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    console.log(subreddit);
    res.send(`Request for ${subreddit} was sent!`);
})

// Dynamic route for subreddits and post IDs
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    console.log(subreddit);
    res.send(`Request for ${subreddit}/${postId} was sent!`);
})

// Route for handling queries using the 'q' query parameter
app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send("Nothing was queried, nothing found!");
    }
    res.send(`This was the query: ${q}`);
});

// Catch-all route for paths that don't match any of the defined routes
app.get('*', (req, res) => {
    res.send("There was an error in the path...");
})

// Start the Express server on port 3000
app.listen(3000, () => {
    console.log("Listening on PORT 3000...")
})
