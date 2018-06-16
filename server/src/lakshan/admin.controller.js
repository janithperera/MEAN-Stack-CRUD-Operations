const AssignSchema = require('../../src/database/models/assign');

var AdminController  = function () {
    this.addAdmin = function (adminInstance) {
        return new Promise(function (resolve,reject) {
            const Assignss = new AssignSchema({
                EmoloyeeCode:adminInstance.EmoloyeeCode,
                FirstName:adminInstance.FirstName,
                LastName:adminInstance.LastName,
                Department:adminInstance.Department
            });

            Assignss.save().then(function () {
                resolve({status:200,message:'Assign  added for Department successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }

    this.viewAllAdmins = function () {
        return new Promise(function (resolve,reject) {
            AssignSchema.find().exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.searchAdmin = function (adID) {
        return new Promise(function (resolve,reject) {
            AssignSchema.find({EmoloyeeCode:adID}).exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.updateAdmin = function (adID) {
        return new Promise(function (resolve,reject) {
            AssignSchema.update({EmoloyeeCode:adID},req.body).exec().then(function () {
                resolve({status:200,message:"Update Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.removeAdmin = function (adID) {
        return new Promise(function (resolve,reject) {
            AssignSchema.remove({AdminCode:adID}).then(function () {
                resolve({status:200,message:"Removed Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }
}

module.exports = new AdminController();