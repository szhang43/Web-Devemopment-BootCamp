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

/* Seed Imports */
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

/* seedDB Generating Camp Data */
const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const randNum = Math.floor(Math.random() * 1000);
        const camps = new Campground({
            title : `${sample(descriptors)} ${sample(places)}`,
            location : `${cities[randNum].city}, ${cities[randNum].state}`,
        })
        await camps.save();
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close();
    })