import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { deleteStudent } from '../store.js'

/*this file needs:
1. a connect component which exposes a way to dispatch changes to the store
2. a stateful form class? (something which captures which student is attached to a button) => form component
3. a stateless functional component that displays the UI and connects event listners */

function StudentList(props) {
    const {students, campuses, dispatchDeleteStudent, dispatchCreateStudent} = props;
    console.log('props', props)
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
                            
                            <button className="remove-btn" onClick={dispatchDeleteStudent}>delete student</button>
                           </li>
                        )
                    })
                }
                </ul>
            </div>
    )

}

// class StudentListLoader extends Component {
//     componentDidMount() {
//         
//     }
// }
        


const mapStateToProps = function(state) {
    return {
        students: state.students
        // campuses: state.campuses
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        dispatchDeleteStudent(student) {
            console.log('dispatching delete student')
            dispatch(deleteStudent(student))
        },

        dispatchCreateStudent(student) {
            dispatch(createStudent(student))
        }
       
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList));

