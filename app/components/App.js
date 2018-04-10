import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AddCampusContainer from './AddCampus';
import AddStudentContainer from './AddStudent';
import SingleCampus from './Campus';
import CampusList from './CampusList';
import EditCampusContainer from './EditCampus';
import EditStudentContainer from './EditStudent';
import Home from './Home';
import Navbar from './Navbar';
import SingleStudent from './Student';
import StudentList from './StudentList';

import store, { fetchCampuses, fetchStudents } from '../store';



export default class App extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        const campusesThunk = fetchCampuses();
        const studentsThunk = fetchStudents();

        store.dispatch(campusesThunk);
        store.dispatch(studentsThunk);
    }

    render() {
        return (
            <div>
                <div className="col-xs-2">
                    <Navbar />
                </div>
                
                <div className="col-xs-10">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/campus" component={CampusList} />
                        <Route exact path="/students" component={StudentList} />
                        <Route path="/students/new-student" component={AddStudentContainer} />
                        <Route path="/students/edit-student/:studentId" component={EditStudentContainer} />
                        <Route path="/campus/new-campus" component={AddCampusContainer} />
                        <Route path="/campus/:campusId" component={SingleCampus} />
                        <Route path="/students/:student" component={SingleStudent} />    
                    </Switch>
                </div>
            </div>
        )
    }
}