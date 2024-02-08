/* Requirement inclusion */
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const Product = require('./models/product');  
const Store = require('./models/store');
const appError = require('./appError');
const wrapAsync = require('./wrapAsync');
/* ------------------- Mongoose Connection ---------------*/
const mongoose = require("mongoose"); 
mongoose.connect("mongodb://127.0.0.1:27017/fashionShop")
    .then(() => {
        console.log("Mongo Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...", error);
    })

/* ---------------- Set Directory Paths --------------- */
app.use(express.static('public'));
app.set('views', path.join( __dirname, '/views')); 
app.set('view engine', 'ejs');
app.set('public', path.join( __dirname, '/public'));

app.use(express.urlencoded({extended : true}));

app.use(methodOverride('_method'));

/* --------------- Express App Routes -------------------*/

/*------------------Store Routes-------------------------*/

// Displays all available stores
app.get('/stores', wrapAsync(async(req, res) => {
    const stores = await Store.find({});
    res.render('stores/index', { stores });
}));

// Form to add a new store
app.get('/stores/new', (req, res) => {
    res.render('stores/new');
});

// Collects data from form to be added into db
app.post('/stores', wrapAsync(async(req, res) => {
    const store = new Store(req.body);
    await store.save();
    res.redirect('stores')
}));

app.get('/stores/:id', wrapAsync(async(req, res) => {
    const { id  } = req.params;
    const store = await Store.findById(id).populate('products');
    res.render('stores/show', { store });
}));

// Directs user to add new product page, including the store id
app.get('/stores/:id/products/new',wrapAsync(async(req, res) => {
    const { id } = req.params;
    const categories = await Product.distinct('category'); // FInds the specific category the product is linked to
    const store = await Store.findById(id);
    res.render('products/new', { categories, store });
}));

app.post('/stores/:id/products', wrapAsync(async(req, res) => {
    const { id } = req.params;
    const store = await Store.findById(id);
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    store.products.push(newProduct);
    newProduct.store = store;
    await store.save();
    await newProduct.save();
    res.redirect(`/stores/${id}`);
}));

app.delete("/stores/:id", wrapAsync(async(req, res) => {
    const { id } = req.params; 
    const deleteStore = await Store.findByIdAndDelete(id);
    res.redirect("/stores");
}));

/*-----------------Product Routes------------------------*/
// Home page - Displays all product currently in db
app.get('/products', async (req, res) => {
    const products = await Product.find({}); //Get all products in the db
    res.render('products/index', { products });
});


/* -------------------- New Product ------------------*/
// Create a new store Page 
app.get('/products/new', wrapAsync(async(req, res) => {
    // throw new appError("Not allowed", 401)
     const categories = await Product.distinct('category'); // FInds the specific category the product is linked to
    res.render("products/new", { categories });
}));

// Adds the newly created store into the database 
app.post('/products', wrapAsync(async(req, res, next) => {
    // const {name, price, category} = req.body; 
    try{
        const newProduct = new Product(req.body)
        await newProduct.save();
        res.redirect('/products');
    } catch(err){
        next(err); // Doesn't console log anything - undefined
    }
}));

app.get('/stores/:id/products/new', (req, res) => {
    const { id } = req.params;
    res.render('products/new', { category, id })
});


/* -------------------Edit Product --------------------*/
// Edit a single product - Edit Form 
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id); // Finds the product to prefill form
        const category = await Product.distinct('category'); // FInds the specific category the product is linked to
        // console.log(product);
        res.render('products/edit', { product, category });
    }catch(error){
        next(error)
    }
}));

// Find the product using the id and using Mongo Update to update product in db 
app.put('/products/:id', wrapAsync(async(req, res, next) => {
    // console.log(req.body); 
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators : true, new : true });
        res.redirect('/products');
    } catch(error) {
        next(error);
    }
}));
/* --------------------------------------------------- */

// Show page - Displays a single product
app.get('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        let store = await Store.findById(product.store);
        if(!store) store = ""
        if(!product){
            return next(new appError("Product not found...", 404));
        }
        res.render('products/show', { product, store });
}));

// Delete a single product
app.delete('/products/:id', wrapAsync(async(req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.redirect("/products");
    } catch(error) {
        next(error);
    }
}));

// App Error Setup 
app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong..." } = err;
    res.status(status).send(message);
});

// App is listening on PORT 3000
app.listen(3000, () => {
    console.log("Listening on Port 3000...");
});
