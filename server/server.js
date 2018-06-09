'use strict'

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(morgan('dev'));

app.listen(8081, 'localhost', (err) => {
    if (err){
        console.log('Failed to start the server: ' + err);
        process.exit(-1);
    }
    console.log('Server started on port: 8081');
});