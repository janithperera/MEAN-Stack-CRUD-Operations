
const Express = require('express');
const Router = Express.Router();
const Controller = require('./admin.controller');

Router.post('/insertdata',function (req,res) {
    Controller.addAdmin(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

// Router.get('/',(req,res)=>{
//     res.send("test root");
// });

Router.get('/',function (req,res) {
    Controller.viewAllAdmins().then(function (response) {
        
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/:adID',function (req,res) {
    Controller.searchAdmin(req.params.adID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/:adID',function (req,res) {
    Controller.updateAdmin(req.params.adID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.delete('/:adID',function (req,res) {
    Controller.removeAdmin(req.params.adID).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

module.exports = Router;