'use strict'

const User = require('../database/models/user');

var Controller = function() {
    this.register = (data) => {
        return new Promise((resolve, reject) => {
            var nuser = new User({
                fname: data.fname,
                lname: data.lname,
                uname: data.uname,
                pword: data.pword
            });
            nuser.save().then(() => {
                resolve({status: 200, message: 'User creation successfull!'});
            }).catch((err) => {
                reject({status: 500, message: 'User creation failed: ' + err});
            })
        });
    }
}

module.exports = new Controller();