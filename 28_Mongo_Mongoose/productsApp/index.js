//Setting up the mongoose connection to mongoDB at 127.0.0.1:27017
const mongoose = require("mongoose"); 
mongoose.connect("mongodb://127.0.0.1:27017/shopApp")
    .then(() => {
        console.log("Connection Opened...");
    })
    .catch(error => {
        console.log("There was an error...")
    })

//Creating a product schema for the product model 
const productSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    price : {
        type : Number, 
        min : [0, "price must be positive!"]
    }, 
    onSale : {
        type : Boolean,
        default : false
    },
    category : [String],
    qty : {
        online : {
            type : Number, 
            default : 0
        }, 
        inStore : {
            type : Number, 
            default : 0
        }
    },
    size : {
        type : String, 
        enum : ["S", "M", "L"]
    }
});

//Defining methods on specific instances 
productSchema.methods.greet = function () {
    console.log("hello!");
    console.log(`-From ${this.name}`)
};

//Keyword this points to the specific instance it finds
productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
};

productSchema.methods.addCategory = function(newCategory){
    this.category.push(newCategory);
    return this.save();
};

//Static reflects on the entire model, so not just a specific instance 
productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale : true , $mul : {price : 0.5} });
};

//Setting up the model in mongoDB
const Product = mongoose.model("Product", productSchema);


const findProduct = async () => {
    const foundProduct = await Product.findOne({name : "Laguna"});
    await foundProduct.toggleOnSale();
    // await foundProduct.addCategory("Outdoors");
    console.log(foundProduct);
}

Product.fireSale()
    .then(res => console.log(res));

findProduct();


// const bike = new Product({name : "Cityscape Cruiser", price : 799, category : ["Cycling", "stylish"], size : "M"});
// bike.save()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//         console.log(`-From ${this.name}`)
//     });

// Product.findOneAndUpdate({name : "Tire Pump"}, {price : -9.99}, {new : true, runValidators : true})
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });