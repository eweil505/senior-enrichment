import React from 'react';
import {Route, withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function CampusList(props) {
    const {campuses} = props;
    return (
        <div id="campusContainer">
                {
                    campuses.map(campus => {
                        return (
                            <div key={campus.id}>
                                <NavLink to={`/campus/${campus.id}`} >
                                    <label>{campus.name}</label>
                                    <div><img src={campus.imageUrl} className="campusImg"></img></div>
                                </NavLink>
                                
                            </div>
                        );
                    })
                }
                
            <div>
                <NavLink to="/campus/new-campus">Create a new campus</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = function({campuses}) {
    return {
        campuses: campuses
    }
}


export default withRouter(connect(mapStateToProps)(CampusList));