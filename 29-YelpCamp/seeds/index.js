const axios = require('axios');

/* Mongoose Connection & Model */
const Campground = require("../models/campground");
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
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


async function seedImg() {
    try {
      const resp = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: 'QZWQtrpqnUnVoQvSTjDnhEBTSAw7mkrIQm1S_lwi6Mk',
          collections: 1114848,
        }, 
    })
    return resp.data.urls.regular
    } catch (err) {
      console.error(err)
    }
}

/* seedDB Generating Camp Data */
const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 15; i++){
        const randNum = Math.floor(Math.random() * 1000);
        const camps = new Campground({
            title : `${sample(descriptors)} ${sample(places)}`,
            location : `${cities[randNum].city}, ${cities[randNum].state}`,
            description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nihil tempora vel aspernatur quod aliquam illum! Iste impedit odio esse neque veniam molestiae eligendi commodi minus, beatae accusantium, doloribus quo!',
            img : await seedImg(),
            price : (Math.floor(Math.random() * 400)) + 0.99
        })
        await camps.save();
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close();
    })


mongoose.set('debug', true);
    
