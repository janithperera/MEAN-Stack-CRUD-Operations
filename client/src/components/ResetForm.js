import React, { Component } from 'react';
import axios from 'axios';
import './style/Login.css'
import { log } from 'util';

class ResetForm extends Component {
    constructor() {
        super();
        this.state = {
            uname:'',
            pword: '',
            role: ''
        };

        this.onReset=this.onReset.bind(this);
        this.onDeactivate=this.onDeactivate.bind(this);
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);



    }

    onReset = (e) => {
        e.preventDefault();

        const { uname,pword, role } = this.state;

        if(role=='' && pword!=''){
            axios.put(`http://localhost:8081/auth//admin/pwd/${uname}`,{
                'pword':pword
            }
         
            ).then(data=>{
                console.log(data);
            }).catch(data=>{
                console.log(data);
            });
        }
        else if(pword=='' && role!=''){
            axios.put(`http://localhost:8081/auth/admin/role/${uname}`,{
                'role':role
            }
         
            ).then(data=>{
                console.log(data);
            }).catch(data=>{
                console.log(data);
            });
        }

        
        
    }

    onDeactivate = (e) => {
        e.preventDefault();

        const { uname} = this.state;

        axios.delete(`http://localhost:8081/auth/admin/user/${uname}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
        
    }

    render() {
        const {  uname, pword, role } = this.state;
        return (
            <div className="row loginrow">
                <div className="col s4"></div>
                <div className="col s4">
                    <form class="form-signin" >
                    <div className="row">
                        <div className="input-field">
                            <input id="username" type="text" className="validate" name="uname" value={uname} onChange={this.onChange}  />
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="password" type="text" className="validate" name="pword" value={pword} onChange={this.onChange}  />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="cassword" type="text" className="validate" />
                            <label for="cpassword">Confirm password</label>
                        </div>
                    </div>

                    <div className="row">
                        <label>Browser Select</label>
                        <select className="browser-default" ref='utype' name="role" value={role} onChange={this.onChange}  >
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Administrator</option>
                            <option value="2">Standard user</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <button class="btn" type="submit" onClick={this.onReset}>Reset</button>
                            <button class="btn" type="submit"onClick={this.onDeactivate}>Deactivate</button>
                        </div>
                    </div>
                    </form>

                </div>

                <div className="col s4"></div>
            </div>
        )
    }
}

export default ResetForm;