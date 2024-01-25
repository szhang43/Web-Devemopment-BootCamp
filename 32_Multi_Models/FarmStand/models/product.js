const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
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
        enum : [
            "casual",
            "bottoms",
            "outerwear",
            "footwear",
            "formal"
        ]
    }, 
    image : {
        type : String, 
        default : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
    }, 
    store : {
        type : Schema.Types.ObjectId,
        ref : 'Store'
    }
}); 

const Product = mongoose.model('Product', productSchema); 
module.exports = Product;
