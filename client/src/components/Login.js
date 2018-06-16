import React, { Component } from 'react';
import './style/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="row loginrow">
                <div className="col s4"></div>
                <div className="col s4">
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
                    <a class="waves-effect waves-light btn-large col s12">LOGIN</a>
                </div>
                </div>
                </div>

                <div className="col s4"></div>
            </div>
        )
    }
}

export default Login;