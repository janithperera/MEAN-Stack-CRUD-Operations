import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmployeeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
        console.log(this.state);
    }
    //<Link to={`/employee/edit/${this.state.item._id}`}>{this.state.item.fname}</Link>
    render() {
        return (
            <li>
                <Link to={`/employee/edit/${this.state.item._id}`}>
                    <tr>
                        <td>{this.state.item.fname} {this.state.item.lname}</td>
                        <td>{this.state.item.mobile}</td>
                        <td>{this.state.item.nic}</td>
                        <td>{this.state.item.delete}</td>
                    </tr>
                </Link>
            </li>
        )
    }
}

export default EmployeeItem;