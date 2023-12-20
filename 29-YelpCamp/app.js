/* Express app packages */
const express = require('express');
const app = express();
const methodOverride = require('method-override');

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

/* app.use */
app.use(express.urlencoded({ extended : true })); // Parse req.body from express 
app.use(methodOverride("_method"));

/* CampApp Routes */

// Home page - Display all available camps
app.get('/campgrounds', async(req, res) => {
    const campgrounds = await Campground.find({});
    // console.log(campgrounds);
    res.render('campgrounds/index', { campgrounds });
});

// New Form Page - Fill out details to be sent to DB
app.get('/campgrounds/new', (req, res) =>{
    res.render('campgrounds/new');
})

//Post Request - Adds the new camp information to DB
app.post('/campgrounds', async(req, res) => {
    const { title, location } = req.body;
    const newCamp = new Campground({
        title : title, 
        location : location
    });
    await newCamp.save();
    res.redirect('campgrounds');
});

// Edit Route - finds the id of camp to update
app.get('/campgrounds/:id/edit', async(req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp })
});

app.put('/campgrounds/:id', async(req, res) => {
    const { id } = req.params; 
    const updateCamp = await Campground.findByIdAndUpdate(id, { ...req.body.camp });
    res.redirect('/campgrounds');
})

// Show page - Display the single clicked camp 
app.get('/campgrounds/:id', async(req, res) => {
    const { id } = req.params; 
    const camp = await Campground.findById(id);
    // console.log(camp);
    res.render('campgrounds/show', { camp });
});


app.delete('/campgrounds/:id', async(req, res) => {
    const { id } = req.params;
    const deleteCamp = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

/* App is listening on PORT 3000 */
app.listen(3000, () => {
    console.log("Listening on PORT 3000")
});