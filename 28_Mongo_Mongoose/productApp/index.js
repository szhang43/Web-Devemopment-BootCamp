const express = require('express');
const app = express();
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

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Listening on Port 3000...");
});

app.get('/products', async (req, res) => {
    const products = await Product.find({}); //Get all products in the db
    // console.log(products);
    res.render('products/index', { products });
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', { product });
})