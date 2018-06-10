'use strict'

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/AF', (err) => {
    if (err){
        console.log('Failed to connect with mongoDB');
        process.exit(-1);
    }
    console.log('Connected to mongoDB successfully');
});

module.exports = mongoose;