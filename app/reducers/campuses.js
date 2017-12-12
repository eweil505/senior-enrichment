import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const CHANGE_CAMPUS = 'CHANGE_CAMPUS';

export function getCampuses(campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses
    };
    return action;
}

export function getCampus(campus) {
    const action = {
        type: GET_CAMPUS,
        campus
    }
    return action;
}

export function changeCampus(campusId) {
    const action = {
        type: CHANGE_CAMPUS,

    }
}


export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses);
            dispatch(action);
        })
    }
}

export function postCampus(campus) {
    return function thunk(dispatch) {
        return axios.post('/api/campus/newCampus', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = getCampus(campus);
            dispatch(action);
        })
    }
}

export default function reducer(state=[], action) {
    switch(action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case GET_CAMPUS:
            return [...state, action.campus]
        default: return state;
    }
}