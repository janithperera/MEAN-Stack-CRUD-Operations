const Express = require('express');
const Router = Express.Router();
const Controller = require('./generalstaff.controller');

Router.post('/',function (req,res) {
    Controller.addGeneralStaff(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/',function (req,res) {
    Controller.viewAllGeneralStaffs().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/:genID',function (req,res) {
    Controller.searchGeneralStaff(req.params.genID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/:genID',function (req,res) {
    Controller.updatestaff(req.params.docID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.delete('/:genID',function (req,res) {
    Controller.removestaff(req.params.genID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});





module.exports = Router;