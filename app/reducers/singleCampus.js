import axios from 'axios';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

export function getSingleCampus(campus) {
    const action = {
        type: GET_SINGLE_CAMPUS,
        campus
    }
   return action;
}

export function fetchSingleCampus(campusId) {
    return function thunk(dispatch) {
        return axios.get(`/api/campus/${campusId}`)
        .then(res => res.data)
        .then(singleCampus => {
            const action = getSingleCampus(singleCampus)
            dispatch(action);
        })
    }
}

export default function reducer(state={}, action) {
    switch(action.type) {
        case GET_SINGLE_CAMPUS:
            return action.campus
        default: 
            return state;
    }
}