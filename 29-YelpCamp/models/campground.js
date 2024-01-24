const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
    title : String, 
    price : Number, 
    description : String, 
    location : String, 
    img : String
});



module.exports = mongoose.model('Campground', CampGroundSchema);
