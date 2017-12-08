import axios from 'axios';
import {browserHistory} from 'react-router'

const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const GET_STUDENT = 'GET_STUDENT';


export function getStudents(students) {
    const action = {
        type: GET_STUDENTS,
        students
    };
    return action;
}

export function deleteStudentSuccess(student) {
    const action = {
        type: DELETE_STUDENT_SUCCESS,
        student
    }
    return action;
}

export function createNewStudent(student) {
    const action = {
        type: CREATE_NEW_STUDENT,
        student
    }
}

export function getStudent() {
    const action = {
        type: GET_STUDENT,
        student
    }
}

export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('/api/students')
        .then(res => res.data) 
        .then(students => {
            const action = getStudents(students);
            dispatch(action);
        });
    } 
}

export function deleteStudent(student) {
    console.log('got to delete student')
    return function thunk(dispatch) {
        return axios.delete(`/api/students/${student.id}`)
        .then(() => {
            console.log(`Deleted ${student.id}`)
            dispatch(deleteStudentSuccess(student))
            return;
        })
        .catch(next);
    }
}

export function createStudent() {
    return function thunk(dispatch) {
        return axios.post(`/api/newStudent`)
        .then(res => res.data)
        .then(newStudent => {
            const action = createNewStudent(newStudent) 
                dispatch(action);
        })
        .catch(next);
    }
}

export default function reducer(state = [], action) {
    switch(action.type) {
        case GET_STUDENTS:
            return action.students;
        // case DELETE_STUDENT_SUCCESS:
        //     console.log('reached delete student success')
        //     return {
               
        //     }
            
        case CREATE_NEW_STUDENT: 
            return [...state, action.student]
            
        default: return state;
    }
    
}