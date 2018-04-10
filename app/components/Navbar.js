import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar (props) {
    return (
        <nav id="navbar"> 
            <div>
                <NavLink to={'/'}>Home</NavLink>
            </div>
            <div>
                <NavLink to={'/students'}>Students</NavLink>
            </div>
            <div>
                <NavLink to={'/campus'}>Campuses</NavLink>
            </div>
        </nav>
    )
}


export default Navbar;