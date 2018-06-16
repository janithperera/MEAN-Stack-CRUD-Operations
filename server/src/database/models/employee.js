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

const Nurses = new Schema({
    NurseCode:{
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

const Assigns = new Schema({
    EmoloyeeCode:{
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
const MLT = new Schema({
    MITCode:{
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




module.exports = mongoose.model('Nurse',Nurses);
module.exports = mongoose.model('Assign',Assigns);
module.exports = mongoose.model('MLT',MLT);
module.exports = mongoose.model('pharmacist',Pharmacists);
