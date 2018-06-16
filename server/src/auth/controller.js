'use strict'

const User = require('../database/models/user');

var Controller = function() {
    this.register = (data) => {
        return new Promise((resolve, reject) => {
            var nuser = new User({
                fname: data.fname,
                lname: data.lname,
                uname: data.uname,
                pword: data.pword,
                role:data.role
            });
            nuser.save().then(() => {
                resolve({status: 200, message: 'User creation successfull!'});
            }).catch((err) => {
                reject({status: 500, message: 'User creation failed: ' + err});
            })
        });
    }

    this.getAllUserData = () => {
        return new Promise((resolve, reject) => {
           
            User.find({},{_id:0,pword:0,role:0}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch((err) => {
                reject({status: 500, message: 'Data not found' + err});
            })
        });
    }
}

module.exports = new Controller();