import React, { Component } from 'react';
import {withRouter, NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { deleteStudent } from '../store.js'
import { AddStudentContainer } from './AddStudent.js'

/*this file needs:
1. a connect component which exposes a way to dispatch changes to the store
2. a stateful form class? (something which captures which student is attached to a button) => form component
3. a stateless functional component that displays the UI and connects event listners */

function StudentList(props) {
    const {students, campuses, dispatchDeleteStudent, dispatchCreateStudent} = props;
    return (
            <div> 
                <ul>
                    {
                    students.map(student => {
                        return (
                            <li key={student.id}>
                            <NavLink to={`/students/${student.id}`}>
                                <span>{student.name}</span>
                            </NavLink> 
                            
                            <button className="remove-btn" value={student.id} onClick={dispatchDeleteStudent}>delete student</button>
                           </li>
                        )
                    })
                }
                </ul>

                <Link to={'students/new-student'}>Add A New Student</Link>
            </div>
    )

}
        

const mapStateToProps = function(state) {
    return {
        students: state.students
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        dispatchDeleteStudent(event) {
            let studentId = event.target.value
            
            dispatch(deleteStudent(studentId))

        },

        dispatchCreateStudent(student) {
            dispatch(createStudent(student))
        }
       
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList));

