const MLTSchema = require('../database/models/mlt');

var MLTController  = function () {
    this.addMLT = function (mltInstance) {
        return new Promise(function (resolve,reject) {
            const MLT = new MLTSchema({
                MITCode:mltInstance.MITCode,
                FirstName:mltInstance.FirstName,
                LastName:mltInstance.LastName,
                Department:mltInstance.Department
                


            });

            MLT.save().then(function () {
                resolve({status:200,message:'MLT added successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }

    this.viewAllMLTS = function () {
        return new Promise(function (resolve,reject) {
            MLTSchema.find().exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.searchMLT = function (mlID) {
        return new Promise(function (resolve,reject) {
            MLTSchema.find({MITCode:mlID}).exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }


    this.updatemlt = function (mlID) {
        return new Promise(function (resolve,reject) {
            MLTSchema.update({MITCode:mlID},req.body).exec().then(function () {
                resolve({status:200,message:"Update Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.removemlt = function (mlID) {
        return new Promise(function (resolve,reject) {
            MLTSchema.remove({MITCode:mlID}).then(function () {
                resolve({status:200,message:"Removed Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }
}

module.exports = new MLTController();