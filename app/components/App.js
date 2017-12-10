import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import AddStudentContainer from './AddStudent';
import AddCampusContainer from './AddCampus';
import SingleCampus from './Campus';
import SingleStudent from './Student';
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
                        <Route exact path="/students" component={StudentList} />
                        <Route path="/students/new-student" component={AddStudentContainer} />
                        <Route path="/campus/new-campus" component={AddCampusContainer} />
                        <Route path="/campus/:campusId" component={SingleCampus} />
                        <Route path="/students/:student" component={SingleStudent} />    
                    </Switch>
                </div>
            </div>
        )
    }
}