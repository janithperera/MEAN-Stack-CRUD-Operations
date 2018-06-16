const mongoose = require('../database');
const Schema = mongoose.Schema;

const Pharmacists = new Schema({
    PharmacistCode:{
        type:Number,
        required:true
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Department:{
        type:String,
         required:true
     }
});

module.exports = mongoose.model('pharmacist',Pharmacists);