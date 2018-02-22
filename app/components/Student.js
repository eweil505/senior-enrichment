import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import EditStudent from './EditStudent'


export const SingleStudent = (props) => {
    let {student} = props;
    student = student[0]
    return (
        <div>
            <div>{student && student.name}</div>
        </div>
    )   
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps ', ownProps)
    return {
        student: state.students.filter(student => student.id === +ownProps.match.params.student)
    }
}

export default connect(mapStateToProps)(SingleStudent)