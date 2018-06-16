const mongoose = require('../database');
const Schema = mongoose.Schema;

const Doctors = new Schema({
    DoctorCode:{
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

module.exports = mongoose.model('Doctor',Doctors);