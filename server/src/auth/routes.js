'use strict'

const passport = require('passport');
const express = require('express');
const token = require('jsonwebtoken');

const User = require('./controller');
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

module.exports = Router;