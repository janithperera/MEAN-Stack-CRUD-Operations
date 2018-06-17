import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: '',
            id: ''

        }
    }

    componentWillMount() {
        this.getEmployee();
    }

    getEmployee() {
        let employeeID = this.props.match.params.id;
        axios.get(`http://localhost:8081/employee/${employeeID}`)
            .then(data => {
                this.setState({
                    details: data.data.data

                }, () => {
                    console.log(this.state.details.fname);
                });
            }).catch(err => {
                console.log(err);
            })
    }

    onDelete() {
        let employeeID = this.props.match.params.id;
        axios.delete(`http://localhost:8081/employee/${this.state.details._id}`)
            .then(data => {
                this.props.history.push('/employee');
            }).catch(err => {
                console.log(err);
            })
    }

    editEmployee(emp) {
        axios.request({
            method: 'put',
            url: `http://localhost:8081/employee/${this.state.details._id}`,
            data: emp
        }).then(data => {
            this.props.history.push('/employee');
        }).catch(err => {
            console.log(err);
        })
    }

    onSubmit(e) {
        const emp = {
            fname: this.refs.fname.value,
            lname: this.refs.lname.value,
            nic: this.refs.nic.value,
            mobile: this.refs.mobile.value,
            addrs: this.refs.addrs.value,
            role: this.refs.role.value,
            spec: this.refs.spec.value
        }
        this.editEmployee(emp);
        e.preventDefault();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="row loginrow">
                <div className="col s4"></div>
                <div className="col s4">
                    <form class="form-signin" onSubmit={this.onSubmit.bind(this)} >
                        <div className="row">
                            <div className="input-field">
                                <input id="firstname" type="text" className="validate" name="fname" ref='fname' value={this.state.details.fname} onChange={this.handleInputChange.bind(this)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input id="lastname" type="text" className="validate" name="lname" ref='lname' value={this.state.details.lname} onChange={this.handleInputChange.bind(this)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input id="nic" type="text" className="validate" name="nic" ref='nic' value={this.state.details.nic} onChange={this.handleInputChange.bind(this)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input id="mobile" type="text" className="validate" name="mobile" ref='mobile' value={this.state.details.mobile} onChange={this.handleInputChange.bind(this)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input id="addrs" type="text" className="validate" name="addrs" ref='addrs' value={this.state.details.addrs} onChange={this.handleInputChange.bind(this)} />
                            </div>
                        </div>

                        <div className="row">
                            <label>Browser Select</label>
                            <select className="browser-default" ref='role' name="role" value={this.state.details.addrs} onChange={this.handleInputChange.bind(this)} >
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
                                <input id="spec" type="text" className="validate" name="spec" ref='spec' value={this.state.details.spec} onChange={this.handleInputChange.bind(this)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field">
                                <input type="submit" value="Save" className="btn btn-primary" />
                            </div>
                            <div className="input-field">
                                <button className='btn btn-danger' onClick={this.onDelete.bind(this)}>DELETE</button>
                            </div>
                        </div>
                    </form>

                </div>

                <div className="col s4"></div>
            </div>
        )
    }
}

export default EmployeeDetails;