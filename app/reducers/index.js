/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './students'
import campuses from './campuses'
import singleCampus from './singleCampus'

 //=> where students is the reducer for the students component and 
//campuses is the reducer for the campuses component


//----------------improved code ^, initial code v --------------------------


const rootReducer = combineReducers({students, campuses, singleCampus})

export default rootReducer;
