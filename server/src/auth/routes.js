'use strict'

const passport = require('passport');
const express = require('express');
const token = require('jsonwebtoken');

const User = require('./controller');
const UserSchema = require('../../src/database/models/user');
const Settings = require('../config/settings');

require('../auth/passport')(passport);

var Router = express.Router();

Router.post('/register', (req, res) => {
    User.register(req.body).then(data => {
        return res.status(data.status).json({success: true, msg: data.message});
    }).catch(err => {
        return res.status(err.status).json({success: false, msg: err.message});
    })
});

Router.post('/login', (req, res) => {
    UserSchema.findOne({
        uname: req.body.uname
    }, (err, user) => {
        if (err) throw err;

        if (!user){
            res.status(401).send({success: false, msg: 'Authentication failed, User not found'});
        }else{
            user.comparePassword(req.body.pword, (err, isMatch) => {
                if (isMatch && !err){
                    var stoken = token.sign(user.toJSON(), Settings.secret);
                    res.status(200).json({success: true, token: 'JWT'+stoken});
                } else {
                    res.status(401).json({success: false, msg: 'Authentication failed, Wrong password'})
                }
            });
        }
    });
});

module.exports = Router;