import axios from 'axios';
import { browserHistory as history} from 'react-router'

//ACTION TYPES
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';


//ACTION CREATORS
export function createNewStudent(student) {
    const action = {
        type: CREATE_NEW_STUDENT,
        student
    }
    return action;
}

export function getStudents(students) {
    const action = {
        type: GET_STUDENTS,
        students
    };
    return action;
}

export function updateStudent(student) {
    const action = {
        type: UPDATE_STUDENT,
        student
    }
    return action;
}

export function deleteStudent(studentId) {
    const action = {
        type: DELETE_STUDENT,
        studentId
    }
    return action;
}

//THUNK CREATORS
export function postStudent(student) {
    return function thunk(dispatch) {
        return axios.post('/api/students/newStudent', student)
        .then(res => res.data)
        .then(student => dispatch(createNewStudent(student)))
    }
}

export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('/api/students')
        .then(res => res.data) 
        .then(students => {
            dispatch(getStudents(students));
        });
    } 
}

export function editStudent(student, studentId) {
    return function thunk(dispatch) {
        return axios.put(`/api/students/${studentId}`, student)
        .then(res => res.data)
        .then(updatedStudent => {
            dispatch(updateStudent(updatedStudent));
        })
        .catch(error => console.log(error.stack))
    }
}

export function removeStudent(studentId) {
    return function thunk(dispatch) {
        return axios.delete(`/api/students/${studentId}`)
        .then(() => {
            console.log(`Deleted ${studentId}`)
            dispatch(deleteStudent(studentId))
        })
        .catch(error => console.log(error.stack))
    }
}

//REDUCER FUNCTION
export default function reducer(state = [], action) {
    switch(action.type) {
        case CREATE_NEW_STUDENT:
            return [...state, action.student];
        case GET_STUDENTS:
            return action.students;
        case UPDATE_STUDENT:
            return [...state.filter(student => student.id !== action.student.id), action.student];
        case DELETE_STUDENT: 
            return [...state.filter(student => student.id !== action.studentId)];
        default: return state;
    }
    
}