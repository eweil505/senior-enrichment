/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './students'
import campuses from './campuses'


 //=> where students is the reducer for the students component and 
//campuses is the reducer for the campuses component


//----------------improved code ^, initial code v --------------------------


const rootReducer = combineReducers({
    students, 
    campuses
});

export default rootReducer;

export * from './students'
export * from './campuses'
