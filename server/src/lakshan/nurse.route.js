const Express = require('express');
const Router = Express.Router();
const Controller = require('./nurse.controller');

Router.post('/',function (req,res) {
    Controller.addNurse(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/',function (req,res) {
    Controller.viewAllNurses().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/:nucID',function (req,res) {
    Controller.searchNurse(req.params.nucID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/:nucID',function (req,res) {
    Controller.updateNurse(req.params.nucID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.delete('/:nucID',function (req,res) {
    Controller.removeNurse(req.params.nucID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});



module.exports = Router;