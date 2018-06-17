import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="blue darken-3">
                        <a className="brand-logo">Human Resources</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to='/employee'>Employee</Link></li>
                            <li><Link to='/assigndep'>Assign departments</Link></li>
                            <li><Link to='/usermanagement'>User management</Link></li>
                        </ul>
                        
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;