const Employee = require('../database/models/employee');

var EmployeeController  = function () {
    this.insert = (data) => {
        return new Promise((resolve,reject) => {
            var emp = new Employee({
                fname: data.fname,
                lname: data.lname,
                nic: data.nic,
                mobile: data.mobile,
                addrs: data.addrs,
                role: data.role,
                spec: data.spec
            });
            emp.save().then( () => {
                resolve({status:200, message:'New employee added'});
            }).catch((err) => {
                reject({status:500, message:"Error: " + err});
            })
        })
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            Employee.update({_id: id}, data).then(() => {
                resolve({status: 200, message: 'updated successfully'});
            }).catch(err => {
                reject({status: 500, message: 'Error: '+err})
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            Employee.find().exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            Employee.findOne({_id: id}).exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            Employee.remove({_id: id}).then(() => {
                resolve({status: 200, message: "Removed"});
            }).catch(err => {
                reject({status: 500, message:"Error: " + err});
            })
        })
    }
}

module.exports = new EmployeeController();