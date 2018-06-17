import React, { Component } from 'react';
import axios from 'axios';
import './style/Login.css'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            uname: '',
            pword: '',
            role: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fname, lname, uname, pword, role } = this.state;

        axios.post('http://localhost:8081/auth/register', { fname, lname, uname, pword, role })
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { fname, lname, uname, pword, role } = this.state;
        return (
            <div className="row loginrow">
                <div className="col s4"></div>
                <div className="col s4">
                    <form class="form-signin" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field">
                            <input id="firstname" type="text" className="validate" name="fname" value={fname} onChange={this.onChange} required />
                            <label for="firstname">First name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="lastname" type="text" className="validate" name="lname" value={lname} onChange={this.onChange} required />
                            <label for="lastname">Last name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="username" type="text" className="validate" name="uname" value={uname} onChange={this.onChange} required />
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="password" type="password" className="validate" name="pword" value={pword} onChange={this.onChange} required />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="cassword" type="password" className="validate" />
                            <label for="cpassword">Confirm password</label>
                        </div>
                    </div>

                    <div className="row">
                        <label>Browser Select</label>
                        <select className="browser-default" ref='utype' name="role" value={role} onChange={this.onChange} required >
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Administrator</option>
                            <option value="2">Standard user</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <button class="btn" type="submit">Register</button>
                        </div>
                    </div>
                    </form>

                </div>

                <div className="col s4"></div>
            </div>
        )
    }
}

export default Register;