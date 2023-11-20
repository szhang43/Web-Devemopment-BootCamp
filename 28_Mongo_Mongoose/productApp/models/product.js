const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    }, 
    price : {
        type : Number,
        required : true, 
        min : 0
    }, 
    category : {
        type: String,
        lowercase : true, 
        enum : ['fruit', 'vegetable', 'dairy']
    }, 
    image : {
        type : String, 
        default : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
    }
}); 

const Product = mongoose.model('Product', productSchema); 
module.exports = Product;