import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js'; //this is the combined reducer
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

export * from './reducers/campuses.js'
export * from './reducers/students.js'