const Express = require('express');
const Router = Express.Router();
const Controller = require('./doctor.controller');

Router.post('/',function (req,res) {
    Controller.addDoctor(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/',function (req,res) {
  Controller.viewAllDoctors().then(function (response) {
      res.status(response.status).send(response.data);
  }).catch(function (reason) {
      res.status(reason.status).send(reason.message);
  })
});

Router.get('/:docID',function (req,res) {
    Controller.searchDoctor(req.params.docID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/:docID',function (req,res) {
    Controller.updateDoctor(req.params.docID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.delete('/:docID',function (req,res) {
    Controller.removeDoctor(req.params.docID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});


module.exports = Router;