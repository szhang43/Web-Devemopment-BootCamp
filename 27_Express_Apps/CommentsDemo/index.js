const express = require('express');
const app = express();

const path = require('path');
const { v4: uuid } = require('uuid'); // Used for generating unique IDs
const methodOverride = require('method-override'); // Middleware for HTTP method override
let commentData = require("./data"); // Your data source

// Configure middleware for parsing requests and serving static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data in requests
app.use(express.static('public')); // Serve static files from the 'public' directory

// Enable HTTP method override using the '_method' query parameter
app.use(methodOverride('_method'));

// Set up paths for your application's views and templates
app.set('public', path.join(__dirname, '/public')); // Configure the 'public' directory
app.set('views', path.join(__dirname, '/views')); // Configure the 'views' directory
app.set('view engine', 'ejs'); // Set the view engine to EJS

/*************** COMMENT ROUTE *******************/
/* Displays all the comment currently in the mock database */
app.get('/comments', (req, res) => {
    res.render('comments/index', { commentData });
})

/*************** CREATE NEW COMMENT *******************/
/* Displays the form for users to add a new comment */
app.get('/comments/new', (req, res) => {
    res.render("comments/new");
});

/*************** EDIT COMMENT *******************/
/* Allows users to edit a specific comment click on, the 
    req.params will check the id and match it with a comment
    in the database. */
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = commentData.find( (i) => i.id === id);
    res.render("comments/edit", { ...comment, id });
});

/*********** DISPLAY THE INDIVIDUAL COMMENTS **********/
/* Displays the individual comment details a user clicks on,
   similar with edit comment, it will grab the id from req.params
   and will match the id with the first matching comment. */
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = commentData.find( (i) => i.id === id);
    res.render("comments/show", { ...comment });
})

/*********** POST NEW COMMENT TO MOCK DATABASE **********/
/* This post request will take information from req.body 
    which can be retrieved from the form the user filled out
    to add a new comment. Will redirect user to the main comment
    page once data has been added. */
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    commentData.push({ 
        id : uuid(),
        username: username, 
        comment: comment
    });
    res.redirect("/comments");
})

/****** PATCH REQUEST TO UPDATE EXISTING COMMENT **********/
/* The patch request allows the user to edit an existing comment.
    The code first finds the id from req.params and uses that to 
    find the first matching comment in the database. If a matching 
    id is found, then it will update that comment attached to the id 
    with the new comment the user typed. Otherwise, it will redirect 
    the user to an error page */
app.patch('/comments/:id', (req, res) =>{
    const { id } = req.params;
    const orgComment = commentData.find( (i) => i.id === id);
    const newComment =  req.body.comment;
    if (orgComment) {
        orgComment.comment = newComment;
        res.redirect("/comments");
    } else {
        res.render("comments/404", { id });
    }
});

/****** DELETE A COMMENT **********/
/* This route is a delete request sent from the show page. 
    When a user clicks on a specific comment, we will be able 
    to use req.params to see which comment is being displayed 
    from the id. Then we use the JS filter method to find every 
    comment that does NOT match the click id. Doing this will not
    mutate the fake data base and will display the user the current 
    comments in the mock DB. */
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    commentData = commentData.filter( (i) => i.id !== id);
    res.redirect('/comments');
})

/****** EXPRESS PORT **********/
app.listen(3000, () => {
    console.log("Listening on port 3000...");
})


