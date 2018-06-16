import React, { Component } from 'react';
import Axios from 'axios';





class Table extends Component{

    constructor(){
        super();

        this.state={
            empData:[]

        }
    }

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

    DataRow= (props)=>{
        

        return(
            <tr>
                    <th scope="row">{props.index}</th>
                    <td>{props.data.fname}</td>
                    <td>{props.data.lname}</td>
                    <td>{props.data.uname}</td>
                    
                    <this.UserActive active={props.data.active}/>
                                
                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>
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