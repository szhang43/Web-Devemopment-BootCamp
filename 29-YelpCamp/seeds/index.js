/* Mongoose Connection & Model */
const Campground = require("../models/campground");

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/YelpCamp')
    .then(() => {
        console.log("Mongo Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...", error);
    })


const seedDB = async() => {
    await Campground.deleteMany({});
    const redwood = new Campground({title : "RedWood Camp"});
    await redwood.save();
}

seedDB();