import React, { Component } from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import { Switch, Route,Link } from 'react-router-dom';

import ResetForm from './ResetForm';




class Table extends Component{

    constructor(){
        super();

        this.state={
            empData:[],
            show:false

        }
        

        this.showModal = this.showModal.bind(this);
    }

    showModal = (e) => {
        this.setState({ show: true });
        <Switch>
        
        </Switch>
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    componentDidMount(){

        let thisObj=this;

        Axios.get('http://localhost:8081/auth/users')
        .then(function (response) {
            //console.log(response);
            thisObj.setState({empData:response.data.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    UserActive=(props)=>{
        if(props.active===true){
            return <td>Active</td>
        }
        else{
            return <td>Deactive</td>
        }
    }

    handleUpdate(event){
        < Table />
    }


    DataRow= (props)=>{
        

        return(
            <tr>
                    <th scope="row">{props.index}</th>
                    <td>{props.data.fname}</td>
                    <td>{props.data.lname}</td>
                    <td>{props.data.uname}</td>
                    
                    <this.UserActive active={props.data.active}/>
                                
                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><Link  to='/reset' >Update</Link></p></td>
                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><Link  to='/reset' >Deactive</Link></p></td>
            </tr>
        );

    }

    

    render(){

        let rows;
        if(this.state.empData!=[]){
            rows=this.state.empData.map((emp,index)=>{
                return(
                    <this.DataRow data={emp} index={index+1} key={index+1}/>
                );
            });

        }

        return(
            <div>
                
                
                    <table className="table table-hover">

                        
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                         
                            {rows}
                           
                        </tbody>
                        

                    </table>

                    
            </div>
            
        );
    }



}

export default Table;