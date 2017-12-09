import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function CampusList(props) {
    const {campuses} = props;
    
    return (
        <div>
            <ul>
                {
                    campuses.map(campus => {
                        return (
                            <li key={campus.id}>
                                <NavLink to={`/campus/${campus.id}`}>
                                    <span>{campus.name}</span>
                                </NavLink>
                            </li>
                        );
                    })
                }
                
            </ul>


            <div>
                <NavLink to="/campus/new-campus">Create a new campus</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
        campuses: state.campuses
    }
}


export default withRouter(connect(mapStateToProps)(CampusList));