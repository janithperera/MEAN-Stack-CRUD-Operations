'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('', (err) => {
    if (err){
        console.log('Failed to connect with mongoDB');
        process.exit(-1);
    }
    console.log('Connected to mongoDB successfully');
})