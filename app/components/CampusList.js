import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function CampusList(props) {
    const {campuses} = props;
    
    return (
        <ul>
            {
                campuses.map(campus => {
                    return (
                        <li key={campus.id} >
                            <NavLink to={`/campus/${campus.id}`}>
                                <span>{campus.name}</span>
                            </NavLink>
                        </li>
                    );
                })
            }
            <li>
                <NavLink to="/new-campus">Create a new campus</NavLink>
            </li>
        </ul>
    )
}

const mapStateToProps = function(state) {
    return {
        // students: state.students,
        campuses: state.campuses
    }
}

// const mapDispatchToProps = function(dispatch) {
//     return {

//     }
// }

export default withRouter(connect(mapStateToProps)(CampusList));