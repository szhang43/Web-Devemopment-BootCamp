const mongoose = require("mongoose");
const { Schema  } = mongoose; 
const Product = require('./product');

const storeSchema = new Schema({
    name : {
        type : String, 
        required : [true, "True must have a name!"]
    },
    location : {
        type : String
    },
    email : {
        type : String, 
        required : [true, "Email required"]
    },
    description : {
        type : String,
        required : [true, 'Description Required!']
    },
     products : [
         {
             type : Schema.Types.ObjectId,
             ref : "Product"
         } 
    ]
})

storeSchema.post('findOneAndDelete', async function(store) {
    if(store.products.length){
        const res = await Product.deleteMany({_id : {$in : store.products}});
        console.log(res);
    }

})

const Store = mongoose.model('Store', storeSchema);
module.exports = Store; 

