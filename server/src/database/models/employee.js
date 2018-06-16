const mongoose = require('../database');
const Schema = mongoose.Schema;

const Employee = new Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    nic:{
       type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    addrs:{
        type:String,
        required:true
    },
    role:{
       type:String,
        required:true
    },
    spec:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Employee', Employee);
