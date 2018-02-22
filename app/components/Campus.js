import React from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import EditCampus from './EditCampus.js'
import StudentList from './StudentList.js'


export const SingleCampus= (props) => {
    let {campus, students} = props;
    campus = campus[0]
    return (
        <div>
            <h1>{campus && campus.name}</h1>
            {students.length ? students.map(student => {
                return <div key={student.id}>{student.name}</div>
            }) : <div>currently no students enrolled at this campus</div>}
        </div>
    )
}

const mapStateToProps = function(state, ownProps) {
    let currentCampusId = +ownProps.match.params.campusId
    return {
        campus: state.campuses.filter(campus => campus.id === currentCampusId),
        students: state.students.filter(student => student.campusId === currentCampusId)
    }
}

export default connect(mapStateToProps)(SingleCampus)