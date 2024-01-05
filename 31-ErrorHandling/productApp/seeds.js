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
        category: "fruit",
        image: "https://www.starkbros.com/images/dynamic/5695.jpg" 
    },
    { 
        name: "Honeycrisp Apple", 
        price: 3.99, 
        category: "fruit",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/26494348/1751670630.jpg" 
    },
    { 
        name: "Whole Milk", 
        price: 3.49, 
        category: "dairy",
        image: "https://crystalspringscreamery.com/wp-content/uploads/2022/05/Glass_Bottled_Milk.jpg" 
    },
    { 
        name: "Almond Milk", 
        price: 4.99, 
        category: "dairy",
        image: "https://glendasfarmhouse.com/wp-content/uploads/2022/04/almond-milk-recipe-scaled.jpeg" 
    },
    { 
        name: "Baby Carrot", 
        price: 1.99, 
        category: "vegetable",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJI4yCjY9FW2Y3pxj9L-bWr3BbFJl2egUo17AWHtuF3yjaXuW47GkDOH_sRIUnF960xw&usqp=CAU" 
    },
    { 
        name: "Broccolini", 
        price: 3.29, 
        category: "vegetable",
        image: "https://i0.wp.com/haroldsonfarms.com/wp-content/uploads/2020/05/03460_01_burgundy.jpg?fit=774%2C774&ssl=1" 
    },
    { 
        name: "Baby Spinach", 
        price: 2.79, 
        category: "vegetable",
        image: "https://farmfreshcarolinas.com/wp-content/uploads/2019/02/Baby-spinach-scaled.jpg" 
    }
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log("Products successfully added!"); 
        console.log(`Added item(s): ${res}`);
    })
    .catch(err => {
        console.log("There was an error:", err);
    });
