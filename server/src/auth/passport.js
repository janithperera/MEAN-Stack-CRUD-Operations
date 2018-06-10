'use strict'

var Strategy = require('passport-jwt').Strategy;
var Extract = require('passport-jwt').ExtractJwt;

var User = require('../database/models/user');
var Settings = require('../config/settings');

module.exports = (passport) => {
    var options = {};
    options.jwtFromRequest = Extract.fromAuthHeaderWithScheme('jwt');
    options.secretOrKey = Settings.secret;
    passport.use(new Strategy(options, (jwt_payload, done) => {
        User.findOne({id: jwt_payload.id}, (err, user) => {
            if (err){
                return done(err, false);
            }
            if (user){
                done(null, user);
            }else{
                done(null, false);
            }
        });
    }));
}