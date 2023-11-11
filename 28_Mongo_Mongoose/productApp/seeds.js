/* Seed database seperate from web app to input new data */

const path = require('path');
const Product = require('./models/product'); 

/* ------------------- Mongoose Connection ---------------*/
const mongoose = require("mongoose"); 
mongoose.connect("mongodb://127.0.0.1:27017/farmStand")
    .then(() => {
        console.log("Mongo Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...", error);
    })
/* ----------------------------------------------------------*/

// const p = new Product({
//     name : "Raspberry", 
//     price : 8.99, 
//     category : 'fruit'
// })

// p.save()
//     .then(p => {
//         console.log("Product successfully added!"); 
//         console.log(`Added item : ${p}`);
//     })
//     .catch(err => {
//         console.log("There was an error : ", err);
//     });

/* ---------------------------------------------------------------*/
const seedProducts = [
    { 
        name: "Fuji Apple", 
        price: 2.49, 
        category: "fruit" 
    },
    { 
        name: "Honeycrisp Apple", 
        price: 3.99, 
        category: "fruit" 
    },
    { 
        name: "Whole Milk", 
        price: 3.49, 
        category: "dairy" 
    },
    { 
        name: "Almond Milk", 
        price: 4.99, 
        category: "dairy"
     },

    { 
        name: "Baby Carrot", 
        price: 1.99, 
        category: "vegetable" 
    },
    { 
        name: "Broccolini", 
        price: 3.29, 
        category: "vegetable" 
    },
    { 
        name: "Baby Spinach", 
        price: 2.79, 
        category: "vegetable" 
    }];

Product.insertMany(seedProducts)
    .then(res => {
        console.log("Product successfully added!"); 
        console.log(`Added item(s) : ${res}`);
    }).catch(err => {
        console.log("There was an error : ", err);
    })