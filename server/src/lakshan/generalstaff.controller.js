const GeneralStaffSchema = require('../database/models/generalstaff');

var GeneralStaffController  = function () {
    this.addGeneralStaff = function (generalInstance) {
        return new Promise(function (resolve,reject) {
            const GeneralStaff = new GeneralStaffSchema({
                GeneralStaffCode:generalInstance.GeneralStaffCode,
                FirstName:generalInstance.FirstName,
                LastName:generalInstance.LastName,
                Department:generalInstance.Department
                


            });

            GeneralStaff.save().then(function () {
                resolve({status:200,message:'GeneralStaff added successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }

    this.viewAllGeneralStaffs = function () {
        return new Promise(function (resolve,reject) {
            GeneralStaffSchema.find().exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.searchGeneralStaff = function (genID) {
        return new Promise(function (resolve,reject) {
            GeneralStaffSchema.find({GeneralStaffCode:genID}).exec().then(function (value) {
                resolve({status:200,data:value});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.updatestaff = function (genID) {
        return new Promise(function (resolve,reject) {
            GeneralStaffSchema.update({GeneralStaffCode:genID},req.body).exec().then(function () {
                resolve({status:200,message:"Update Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }

    this.removestaff = function (genID) {
        return new Promise(function (resolve,reject) {
            GeneralStaffSchema.remove({GeneralStaffCode:genID}).then(function () {
                resolve({status:200,message:"Removed Successfully"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
            })
        })
    }
}

module.exports = new GeneralStaffController();