import React, { Component } from 'react';
import './style/AddEmp.css';
import axios from 'axios';

class Home extends Component{
    addEmployee(emp){
        axios.request({
            method: 'post',
            url: 'http://localhost:8081/employee',
            data: emp
        }).then(data => {
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
        })
    }

    onSubmit(e){
        const emp = {
            fname: this.refs.fname.value,
            lname: this.refs.lname.value,
            nic: this.refs.nic.value,
            mobile: this.refs.mobile.value,
            addrs: this.refs.addrs.value,
            role: this.refs.role.value,
            spec: this.refs.spec.value,
        }
        this.addEmployee(emp);
        e.preventDefault();
    }


    render(){
        return(
            <div className="row loginrow">
            <div className="col s4"></div>
            <div className="col s4">
                <form class="form-signin" onSubmit={this.onSubmit.bind(this)}>
                <div className="row">
                    <div className="input-field">
                        <input id="firstname" type="text" className="validate" ref='fname' required />
                        <label for="firstname">First name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input id="lastname" type="text" className="validate" ref='lname' required />
                        <label for="lastname">Last name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input id="nic" type="text" className="validate" ref='nic' required />
                        <label for="nic">National ID Number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input id="mobile" type="text" className="validate" ref='mobile' required />
                        <label for="mobile">Mobile number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input id="addrs" type="text" className="validate" ref='addrs' required />
                        <label for="addrs">Permenent Address</label>
                    </div>
                </div>

                <div className="row">
                    <label>Browser Select</label>
                    <select className="browser-default" ref='role' required >
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Doctor</option>
                        <option value="2">Nurse</option>
                        <option value="2">Pharmacists</option>
                        <option value="2">MLT</option>
                        <option value="2">General staff</option>
                    </select>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input id="spec" type="text" className="validate" ref='spec' required />
                        <label for="spec">Specialty</label>
                    </div>
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

export default Home;