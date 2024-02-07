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
app.get('/stores', async(req, res) => {
    const stores = await Store.find({});
    res.render('stores/index', { stores });
});

app.get('/stores/new', (req, res) => {
    res.render('stores/new');
});

app.get('/stores/:id', async(req, res) => {
    const { id  } = req.params;
    const stores = await Store.findById(id)
    console.log(stores);
    res.render('stores/show', { stores });
})

app.post('/stores', async(req, res) => {
    const store = new Store(req.body);
    console.log(req.body)
    await store.save();
    res.redirect('stores')
});

app.get('/stores/:id/products/new', async(req, res) => {
    const { id } = req.params;
    const categories = await Product.distinct('category'); // FInds the specific category the product is linked to
    res.render('products/new', { categories, id });
});


/*-----------------Product Routes------------------------*/
// Home page - Displays all product currently in db
app.get('/products', async (req, res) => {
    const products = await Product.find({}); //Get all products in the db
    console.log(products);
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
})

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
        // console.log(product);
        if(!product){
            return next(new appError("Product not found...", 404));
        }
        res.render('products/show', { product });
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
