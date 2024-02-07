const mongoose = require("mongoose");
const { Schema  } = mongoose; 

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


const Store = mongoose.model('Store', storeSchema);
module.exports = Store; 

