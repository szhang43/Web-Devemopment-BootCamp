const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
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
app.use(express.static('public'));
app.set('views', path.join( __dirname, '/views')); 
app.set('view engine', 'ejs');
app.set('public', path.join( __dirname, '/public'));

app.use(express.urlencoded({extended : true}));

app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log("Listening on Port 3000...");
});

app.get('/products/new', (req, res) => {
    res.render("products/new");
});

app.post('/products', async (req, res) => {
    // const {name, price, category} = req.body; 
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.redirect('/products');
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    const category = await Product.distinct('category');
    // console.log(product);
    res.render('products/edit', { product, category });
});

app.put('/products/:id', async(req, res) => {
    // console.log(req.body); 
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators : true, new : true });
    res.redirect('/products');
});

app.get('/products', async (req, res) => {
    const products = await Product.find({}); //Get all products in the db
    console.log(products);
    res.render('products/index', { products });
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', { product });
});

app.delete('/products/:id', async(req, res) => {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    res.redirect("/products");
});