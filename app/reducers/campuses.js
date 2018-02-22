import axios from 'axios';
import {deleteStudent} from '../store'

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS';

//ACTION CREATORS
export function getCampuses(campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses
    };
    return action;
}

export function deleteCampus(campusId) {
    const action = {
        type: DELETE_CAMPUS, campusId
    }
    return action;
}

export function createCampus(campus) {
    const action = {
        type: CREATE_CAMPUS,
        campus
    }
    return action;
}

//THUNK CREATORS
export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => {
            dispatch(getCampuses(campuses)) 
        })
    }
}

export function postCampus(campus) {
    return function thunk(dispatch) {
        return axios.post('/api/campus/newCampus', campus)
        .then(res => res.data)
        .then(newCampus => {
            dispatch(createCampus(campus));
        })
    }
}

export function removeCampus(campusId) {
    return function thunk(dispatch) {
        return axios.delete(`api/campus/${campusId}`)
        .then(() => {
            dispatch(deleteCampus(campusId))
            console.log(`deleted campus #${campusId}`)
        }
        )
    }
}

//REDUCER FUNCTION
export default function reducer(state=[], action) {
    switch(action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case CREATE_CAMPUS:
            return [...state, action.campus];
        case DELETE_CAMPUS:
            return state.filter(campus => +campus.id !== +action.campusId)
        default: return state;
    }
}