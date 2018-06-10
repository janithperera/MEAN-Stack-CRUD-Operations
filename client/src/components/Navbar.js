import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav className='blue darken-3'>
                <div className="nav-wrapper">
                    <a className="brand-logo">HR</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Hospitals</a></li>
                        <li><a href="badges.html">Doctors</a></li>
                        <li><a href="collapsible.html">Staff</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;