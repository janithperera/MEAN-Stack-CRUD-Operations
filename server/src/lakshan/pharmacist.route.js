const Express = require('express');
const Router = Express.Router();
const Controller = require('./pharmacist.controller');

Router.post('/',function (req,res) {
    Controller.addPharmacist(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/',function (req,res) {
    Controller.viewAllPharmacists().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/:pharID',function (req,res) {
    Controller.searchPharmacist(req.params.pharID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/:pharID',function (req,res) {
    Controller.updatePharmacist(req.params.pharID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.delete('/:pharID',function (req,res) {
    Controller.removePharmacist(req.params.pharID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

module.exports = Router;