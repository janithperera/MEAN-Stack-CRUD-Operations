const PharmacistSchema = require('../database/models/pharmacist');;

var PharmacistController  = function () {
    this.addPharmacist = function (pharmacistInstance) {
        return new Promise(function (resolve,reject) {
            const Pharmacist = new PharmacistSchema({
                PharmacistCode:pharmacistInstance.PharmacistCode,
                FirstName:pharmacistInstance.FirstName,
                LastName:pharmacistInstance.LastName,
                Department:pharmacistInstance.Department
            });

            Pharmacist.save().then(function () {
                resolve({status:200,message:'Pharmacist added successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }

    this.viewAllPharmacists = function () {
        return new Promise(function (resolve,reject) {
            PharmacistSchema.find().exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.searchPharmacist = function (pharID) {
        return new Promise(function (resolve,reject) {
            PharmacistSchema.find({PharmacistCode:pharID}).exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }
    this.updatePharmacist = function (pharID) {
        return new Promise(function (resolve,reject) {
            PharmacistSchema.update({PharmacistCode:pharID},req.body).exec().then(function () {
                resolve({status:200,message:"Update Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.removePharmacist = function (pharID) {
        return new Promise(function (resolve,reject) {
            PharmacistSchema.remove({PharmacistCode:pharID}).then(function () {
                resolve({status:200,message:"Removed Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }
}

module.exports = new PharmacistController();