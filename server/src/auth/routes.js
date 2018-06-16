'use strict'

const passport = require('passport');
const express = require('express');
const token = require('jsonwebtoken');

const User = require('./controller');
const Admin=require('./Admin/adminController');
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

Router.put('/admin/role/:id', (req, res) => {

    Admin.updateRole(req.params.id,req.body).then(data=>{
        return res.status(data.status).json({success: true, msg: data.message});
    }).catch(err=>{
        return res.status(err.status).json({success: false, msg: err.message});
    });
   
});

Router.delete('/admin/user/:id', (req, res) => {

    Admin.deleteUser(req.params.id).then(data=>{
        return res.status(data.status).json({success: true, msg: data.message});
    }).catch(err=>{
        return res.status(err.status).json({success: false, msg: err.message});
    });
   
});

Router.put('/admin/user/deactivate/:id', (req, res) => {

    Admin.deactivateUser(req.params.id).then(data=>{
        return res.status(data.status).json({success: true, msg: data.message});
    }).catch(err=>{
        return res.status(err.status).json({success: false, msg: err.message});
    });
   
});

Router.put('/admin/pwd/:id', (req, res) => {

    Admin.updateUserPWD(req.params.id,req.body).then(data=>{
        return res.status(data.status).json({success: true, msg: data.message});
    }).catch(err=>{
        return res.status(err.status).json({success: false, msg: err.message});
    });
   
});


Router.get('/users', (req, res) => {
    User.getAllUserData().then(data => {
        return res.status(data.status).json({success: true, data: data.data});
    }).catch(err => {
        return res.status(err.status).json({success: false, message: err.message});
    })
});







module.exports = Router;