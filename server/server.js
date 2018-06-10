'use strict'

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use('/', routes);

app.use((req, res, next) => {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.end(JSON.stringify({
        message: err.message,
        error: {}
    }));
});

app.listen(8081, 'localhost', (err) => {
    if (err){
        console.log('Failed to start the server: ' + err);
        process.exit(-1);
    }
    console.log('Server started on port: 8081');
});