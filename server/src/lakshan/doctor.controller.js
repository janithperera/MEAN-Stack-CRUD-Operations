const DoctorSchema = require('../database/models/doctor');

var DoctorController  = function () {
    this.addDoctor = function (doctorInstance) {
        return new Promise(function (resolve,reject) {
            const Doctor = new DoctorSchema({
                DoctorCode:doctorInstance.DoctorCode,
                FirstName:doctorInstance.FirstName,
                LastName:doctorInstance.LastName,
                Department:doctorInstance.Department 
            });

            Doctor.save().then(function () {
                resolve({status:200,message:'Doctor added successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }

    this.viewAllDoctors = function () {
        return new Promise(function (resolve,reject) {
            DoctorSchema.find().exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.searchDoctor = function (docID) {
        return new Promise(function (resolve,reject) {
            DoctorSchema.find({DoctorCode:docID}).exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.updateDoctor = function (docID) {
        return new Promise(function (resolve,reject) {
            DoctorSchema.update({DoctorCode:docID},req.body).exec().then(function () {
                resolve({status:200,message:"Update Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.removeDoctor = function (docID) {
        return new Promise(function (resolve,reject) {
            DoctorSchema.remove({DoctorCode:docID}).then(function () {
                resolve({status:200,message:"Removed Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

}

module.exports = new DoctorController();