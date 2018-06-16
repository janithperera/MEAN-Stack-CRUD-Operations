import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmployeeItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
        console.log(this.state);
    }
    
    render(){
        return(
            <li>
                <Link to={`/employee/edit/${this.state.item._id}`}>{this.state.item.fname}</Link>
            </li>
        )
    }
}

export default EmployeeItem;