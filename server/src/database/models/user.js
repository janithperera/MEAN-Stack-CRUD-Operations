'use strict'

const mongoose = require('../database');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

var User = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    uname: {
        type: String,
        unique: true,
        required: true
    },
    pword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

User.pre('save', function (next){
    var user = this;
    if (this.isModified('pword') || this.isNew){
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.pword, salt, null, (err, hash) => {
                if (err) {
                    return next(err);
                }
                user.pword = hash;
                next();
            });
        });
    }else{
        return next();
    }
});



User.methods.comparePassword = function(passw, cb){
    bcrypt.compare(passw, this.pword, function(err, isMatch){
        if (err){
            return cb(err);
        }
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('User', User);