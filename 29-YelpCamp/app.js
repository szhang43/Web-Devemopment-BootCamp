/* Express app packages */
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const wrapAsync = require('./utilities/wrapAsync');
const appError = require('./utilities/errorClass');
app.engine('ejs', ejsmate);

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
app.get('/campgrounds', wrapAsync(async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

// New Form Page - Fill out details to be sent to DB
app.get('/campgrounds/new', (req, res) =>{
    res.render('campgrounds/new');
})

//Post Request - Adds the new camp information to DB
app.post('/campgrounds', wrapAsync(async(req, res) => {
    const campground = new Campground(req.body.camp);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}));

// Edit Route - finds the id of camp to update
app.get('/campgrounds/:id/edit', wrapAsync(async(req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp })
}));

app.put('/campgrounds/:id', wrapAsync(async(req, res) => {
    const { id } = req.params; 
    const updateCamp = await Campground.findByIdAndUpdate(id, { ...req.body.camp });
    res.redirect('/campgrounds');
}));

// Show page - Display the single clicked camp 
app.get('/campgrounds/:id', wrapAsync(async(req, res) => {
    const { id } = req.params; 
    const camp = await Campground.findById(id);
    // console.log(camp);
    res.render('campgrounds/show', { camp });
}));


app.delete('/campgrounds/:id', wrapAsync(async(req, res) => {
    const { id } = req.params;
    const deleteCamp = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}));

app.use((err, req, res, next) => {
    const { status=500, message="Something went wrong!" } = err;
    res.status(status).send(message);
})
app.use((err,req, res, next) => {
    res.send("There was an error...")
})
/* App is listening on PORT 3000 */
app.listen(3000, () => {
    console.log("Listening on PORT 3000")
});