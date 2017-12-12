import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar (props) {
    return (
        <nav> 
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