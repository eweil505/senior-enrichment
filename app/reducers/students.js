import axios from 'axios';
import { browserHistory } from 'react-router'

const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const GET_STUDENT = 'GET_STUDENT';
const UPDATE_SINGLE_STUDENT = 'UPDATE_SINGLE_STUDENT'


export function getStudents(students) {
    const action = {
        type: GET_STUDENTS,
        students
    };
    return action;
}

export function deleteStudentSuccess(studentId) {
    const action = {
        type: DELETE_STUDENT_SUCCESS,
        studentId
    }
    return action;
}

export function getStudent(student) {
    const action = {
        type: GET_STUDENT,
        student
    }
    return action;
}

export function updateSingleStudent(student) {
    const action = {
        type: UPDATE_SINGLE_STUDENT,
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

export function deleteStudent(studentId) {
    return function thunk(dispatch) {
        return axios.delete(`/api/students/${studentId}`)
        .then(() => {
            console.log(`Deleted ${studentId}`)
            dispatch(deleteStudentSuccess(studentId))
            return;
        })
        .catch(error => console.log(error.stack))
    }
}

export function createStudent(student) {
    return function thunk(dispatch) {
        return axios.post(`/api/students/newStudent`, student)
        .then(res => res.data)
        .then(newStudent => {
            const action = getStudent(newStudent) 
                dispatch(action);
        })
        .catch(error => console.log(error.stack))
    }
}

export function editStudent(student, studentId) {
    return function thunk(dispatch) {
        return axios.put(`/api/students/${studentId}`, student)
        .then(res => res.data)
        .then(updatedStudent => {
            const action = updateSingleStudent(updatedStudent)
            dispatch(action)
        })
        .catch(error => console.log(error.stack))
    }
}

export default function reducer(state = [], action) {
    switch(action.type) {
        case GET_STUDENTS:
            return action.students;
        case DELETE_STUDENT_SUCCESS:
               return state.map(student => {
                   return student.id !== student.action.id
               })
        case GET_STUDENT:
            return [...state, action.student]
        case UPDATE_SINGLE_STUDENT:
            const indexOfStudent = state.indexOf(action.student)
            return state.slice(0, indexOfStudent).concat(indexOfStudent + 1)
        default: return state;
    }
    
}