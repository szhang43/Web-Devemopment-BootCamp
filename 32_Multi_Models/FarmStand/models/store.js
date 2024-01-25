const mongoose = require("mongoose");
const { Schema  } = mongoose; 

const storeSchema = new Schema({
    name : {
        type : String, 
        required : [true, "True must have a name!"]
    },
    city : {
        type : String
    },
    email : {
        type : String, 
        required : [true, "Email required"]
    },
     products : [
         {
             type : Schema.Types.ObjectId,
             ref : "Products"
         } 
    ]
})


const Store = mongoose.model('Store', storeSchema);
module.exports = Store; 

