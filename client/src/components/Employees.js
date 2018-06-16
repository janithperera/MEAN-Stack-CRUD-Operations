import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeItem from './EmployeeItem';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

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

    render() {
        let employeeItems = this.state.employees.map((employee, i) => {
            return (
                <EmployeeItem key={employee.id} item={employee} />
            )
        });
        return (
            <div>
                <ul>
                    {employeeItems}
                </ul>
                <Link to='/employee/new'> Add new employee </Link>
            </div>
        )
    }
}

export default Employee;