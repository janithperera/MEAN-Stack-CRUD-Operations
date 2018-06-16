import React, { Component } from 'react';
import './style/Login.css'

class Register extends Component {
    render() {
        return (
            <div className="row loginrow">
                <div className="col s4"></div>
                <div className="col s4">

                    <div className="row">
                        <div className="input-field">
                            <input id="firstname" type="text" className="validate" />
                            <label for="firstname">First name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="lastname" type="text" className="validate" />
                            <label for="lastname">Last name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="username" type="text" className="validate" />
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="password" type="text" className="validate" />
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
                        <select className="browser-default" ref='utype'>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Administrator</option>
                            <option value="2">Standard user</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <a className="waves-effect waves-light btn-large col s12">Register</a>
                        </div>
                    </div>

                </div>

                <div className="col s4"></div>
            </div>
        )
    }
}

export default Register;