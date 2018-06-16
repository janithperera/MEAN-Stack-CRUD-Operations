const Express = require('express');
const Router = Express.Router();
const Controller = require('./mlt.controller');

Router.post('/',function (req,res) {
    Controller.addMLT(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/',function (req,res) {
    Controller.viewAllMLTS().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/:mltID',function (req,res) {
    Controller.searchMLT(req.params.mltID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/:mlID',function (req,res) {
    Controller.updatemlt(req.params.mlID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.delete('/:mlID',function (req,res) {
    Controller.removemlt(req.params.mlID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

module.exports = Router;