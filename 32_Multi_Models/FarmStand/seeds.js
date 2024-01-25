/* Seed database seperate from web app to input new data */

const path = require('path');
const Product = require('./models/product'); 

/* ------------------- Mongoose Connection ---------------*/
const mongoose = require("mongoose"); 
mongoose.connect("mongodb://127.0.0.1:27017/fashionShop")
    .then(() => {
        console.log("Mongo Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...", error);
    })
/* ----------------------------------------------------------*/
const seedClothes = [
  { 
    name: "Cotton T-Shirt", 
    price: 15.99, 
    category: "casual",
    image: "https://jiffyshirts1.imgix.net/0266c490d70369.png?ixlib=rb-0.3.5&auto=format"
  },
  { 
    name: "Denim Jeans", 
    price: 29.99, 
    category: "bottoms",
    image: "https://m.media-amazon.com/images/I/81JhwzMaguL._AC_SL1500_.jpg"
  },
  { 
    name: "Hooded Sweatshirt", 
    price: 24.99, 
    category: "outerwear",
    image: "https://example.com/hooded-sweatshirt.jpg"
  },
  { 
    name: "Sneakers", 
    price: 49.99, 
    category: "footwear",
    image: "https://static.zara.net/photos///2024/V/0/3/p/4170/675/605/2/w/960/4170675605_6_1_1.jpg?ts=1700122524899"
  },
  { 
    name: "Formal Shirt", 
    price: 39.99, 
    category: "formal",
    image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.1/222646F109011_1/lemaire-off-white-twisted-shirt.jpg"
  },
  { 
    name: "Leather Jacket", 
    price: 79.99, 
    category: "outerwear",
    image: "https://m.media-amazon.com/images/I/61YCt73E3sL._AC_SL1500_.jpg"
  },
  { 
    name: "Running Shoes", 
    price: 54.99, 
    category: "footwear",
    image: "https://m.media-amazon.com/images/I/51rifgABEmL._AC_SL1000_.jpg"
  }
];


Product.deleteMany({});
Product.insertMany(seedClothes)
   .then(res => {
        console.log("Products successfully added!"); 
    })
    .catch(err => {
        console.log("There was an error:", err);
    });



