const express = require('express');
const app = express();
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const joi = require("joi");
const wrapAsync = require('./utilities/wrapAsync');
const appError = require('./utilities/errorClass');
const { validateCampground } = require('./validation/formValidation');
app.engine('ejs', ejsmate);

/* Mongoose Connection & Model */
const Campground = require("./models/campground");

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
	.then(() => {
        console.log("Mongo Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...", error);
    })

/* Path for directories */
const path = require("path"); 
const {appendFile} = require('fs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* app.use */
app.use(express.urlencoded({ extended : true })); // Parse req.body from express 
app.use(methodOverride("_method"));


// Validate Form Middleware
const validateData = (req, res, next) => {    
    const { error } = validateCampground.validate(req.body); 
    if(error){
        const msg = error.details.map(el => el.message).join(",");
        throw new appError(msg, 400);
    } else {
        next();
    }

}
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
app.post('/campgrounds', validateData, wrapAsync(async(req, res) => {
    //if(!req.body.camp) throw new appError("Invalid Campground Data", 404);
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

app.put('/campgrounds/:id', validateData, wrapAsync(async(req, res) => {
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

// Error Handling
app.all("*",(req, res, next) => {
	next(new appError('Page Not Found', 404))
})
app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if(!err){
		err.message = "Uh Oh, something went wrong!";
	}
	res.status(statusCode).render('errors', { err });
})


/* App is listening on PORT 3000 */
app.listen(3000, () => {
    console.log("Listening on PORT 3000")
});


