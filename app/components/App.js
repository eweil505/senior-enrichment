import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import AddStudentContainer from './AddStudent';
import AddCampusContainer from './AddCampus';
import Campus from './Campus';
import store, { fetchCampuses, fetchStudents } from '../store';
import Navbar from './Navbar'


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
                        <Route exact path="/" render={() => <Redirect to=
                        "/campus"/>} />
                        <Route exact path="/campus" component={CampusList} />
                        <Route path="/campus/:campusId" component={Campus} />
                        <Route exact path="/students" component={StudentList} />
                        <Route path="/students/new-student" component={AddStudentContainer} />
                        <Route path="/campus/new-campus" component={AddCampusContainer} />
                        {/*<Route component={NotFound} />*/}
                    </Switch>
                </div>
            </div>
        )
    }
}