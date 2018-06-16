import React, { Component } from 'react';
import Axios from 'axios';


class UpdateModal extends Component{


    render(){



        return(

            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Password Reset:</label>
                            <input type="password" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="form-group">
                            <label for="select-text" className="col-form-label">Role Reset</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option value="MLT">MLT</option>
                                <option value="Docotor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Pharmacist">Pharmacist</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        );
    }

}