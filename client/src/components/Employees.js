import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeItem from './EmployeeItem';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            newemps: []
        }
    }

    /*
                    <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>NIC</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employeeItems}
                    </tbody>
                </table>
    */

    componentWillMount() {
        this.getEmployees();
    }

    async getEmployees() {
        try {
            const { data, status } = await axios.get('http://localhost:8081/employee')
            const empList = data.data
            console.log(data.data)
            if (status === 200) {
                this.setState({ employees: empList });
            } else {

            }
        } catch (e) {

        }
    }

    DataRow = (props) => {
        return (
            <tr>
                <th scope="row">{props.index}</th>
                <td><Link to={`/employee/edit/${props.data._id}`}>{props.data.fname}</Link></td>
                <td>{props.data.lname}</td>
                <td>{props.data.nic}</td>

                <td>{props.data.mobile}</td>
            </tr>
        );
    }

    render() {
        let rows;
        if (this.state.employees != []) {
            rows = this.state.employees.map((emp, index) => {
                return (
                    <this.DataRow data={emp} index={index + 1} key={index + 1} />
                );
            });
        }

        let employeeItems = this.state.employees.map((employee, i) => {
            return (
                <EmployeeItem key={employee.id} item={employee} />
            )
        });
        return (
            <div>
                <table className="table table-hover">


                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>NIC</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows}
                    </tbody>


                </table>

                <ul>

                </ul>
                <Link to='/employee/new'> Add new employee </Link>
            </div>
        )
    }
}

export default Employee;