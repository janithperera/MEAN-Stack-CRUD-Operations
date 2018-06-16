const NurseSchema = require('../database/models/nurse');

const NurseController = function(){
    this.addNurse=function (nurseInstartnce) {
        return new Promise(function (resolve,reject){
            var Nurse =new NurseSchema({
                NurseCode:nurseInstartnce.NurseCode,
                FirstName:nurseInstartnce.FirstName,
                LastName:nurseInstartnce.LastName,
                Department:nurseInstartnce.Department
               
            });
            Nurse.save().then(function() {
                resolve({status:200,message:"Nurse Aded Successfully"});
            }).catch(function(reason){
                reject({status:500,message:"Error"+reason});
            })
        })
    }

    this.viewAllNurses = function () {
        return new Promise(function (resolve,reject) {
            NurseSchema.find().exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.searchNurse = function (nucID) {
        return new Promise(function (resolve,reject) {
            NurseSchema.find({NurseCode:nucID}).exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.updateNurse = function (nucID) {
        return new Promise(function (resolve,reject) {
            NurseSchema.update({NurseCode:nucID},req.body).exec().then(function () {
                resolve({status:200,message:"Update Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.removeNurse = function (nucID) {
        return new Promise(function (resolve,reject) {
            NurseSchema.remove({NurseCode:nucID}).then(function () {
                resolve({status:200,message:"Removed Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

}

module.exports = new NurseController();