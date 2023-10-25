const express = require('express');
const app = express();
const path = require('path');
let tasks = require('./data');
const { v4: uuid } = require('uuid'); // Used for generating unique IDs
const methodOverride = require('method-override'); // Middleware for HTTP method override

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

app.get('/todos', (req, res) => {
    res.render('todos/index', { tasks });
});

app.get('/todos/new', (req, res) => {
    res.render('todos/new');
});

app.post("/todos", (req, res) => {
    const { id, date, status, task, description } = req.body;
    tasks.push({
        id : uuid(), 
        date : date,
        task : task, 
        description : description
    });
    res.redirect('/todos');
});

app.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(i => i.id === id);
    res.render("todos/show", { ...task });
});

app.get('/todos/:id/edit', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(i => i.id === id);
    res.render('todos/edit', { ...task , id });
});

app.patch('/todos/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(i => i.id === id);
    const newTaskDescription = req.body.description;
    const newTask = req.body.task;
    console.log(newTask, newTaskDescription);
    if(task){
        task.task = newTask;
        task.description = newTaskDescription;
        res.redirect("/todos");
    }
});

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params; 
    const task = tasks.find(i => i.id === id);
    const updateTask = tasks.filter( task => task.id !== id);
    tasks = updateTask;
    res.redirect('/todos');
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});


