'use strict'

const User = require('../../database/models/user');
const bcrypt = require('bcrypt-nodejs');

//console.log(User);

const adminController=function () {
	
	this.updateRole=(id,data) => {
        return new Promise((resolve, reject) => {
            
            User.where({uname:id}).update(data).then((data)=>{
            	
            		if(data.n==0 || data.nModified==0){
            			reject({status:500,message:"User not found, Role update failed "});
            		}
            		else{
            			resolve({status:200,message:"Role updated"})
            		}
                    
                }).catch(err=>{
                    reject({status:500,message:"Role update failed "+err});
                })
        });
    }


    this.deleteUser=(id) => {
        return new Promise((resolve, reject) => {
            

            User.remove({uname:id}).then((data)=>{
            		if(data.n==0 || data.nModified==0){
            			resolve({status:500,message:"User not found, Delete failed "});
            		}
            		else{
            			resolve({status:200,message:"User deleted"})
            		}
                    
                }).catch(err=>{
                    reject({status:500,message:"User delete failed "+err});
                })
        });
    }


    this.deactivateUser=(id) => {
        return new Promise((resolve, reject) => {
            
            User.where({uname:id}).update({active:false}).then((data)=>{
            		if(data.n==0 || data.nModified==0){
            			reject({status:500,message:"User not found, active status update failed "});
            		}
            		else{
            			resolve({status:200,message:"Active status updated"})
            		}
                    
                }).catch(err=>{
                    reject({status:500,message:"Active status update failed "+err});
                })
        });
    }

    this.deactivateUser=(id) => {
        return new Promise((resolve, reject) => {
            
            User.where({uname:id}).update({active:false}).then((data)=>{
            		if(data.n==0 || data.nModified==0){
            			reject({status:500,message:"User not found, active status update failed "});
            		}
            		else{
            			resolve({status:200,message:"Active status updated"})
            		}
                    
                }).catch(err=>{
                    reject({status:500,message:"Active status update failed "+err});
                })
        });
    }

    this.updateUserPWD=(id,data) => {
        return new Promise((resolve, reject) => {

	            

	            bcrypt.genSalt(10, (err, salt) => {
	            if (err) {
	                //return next(err);
	                reject({status:500,message:"Password update failed "+err});
	            }

	            let pwd=data.pword;
	            bcrypt.hash(pwd, salt, null, (err, hash) => {
	                if (err) {
	                    //return next(err);
	                    reject({status:500,message:"Password update failed "+err});
	                }
	                //console.log(salt+"  "+hash);
	                //req
	                User.where({uname:id}).update({pword:hash}).then((data)=>{
	            		if(data.n==0 || data.nModified==0){
	            			reject({status:500,message:"Password update failed "});
	            		}
	            		else{
	            			resolve({status:200,message:"Password updated"})
	            		}
	                    
	                }).catch(err=>{
	                    reject({status:500,message:"Password update failed "+err});
	                })
	            });
	        });


            
        });
    }


}


module.exports = new adminController();