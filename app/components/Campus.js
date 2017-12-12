import React, {Component} from 'react';
import store, { fetchSingleCampus } from '../store'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import EditCampus from './EditCampus.js'
import StudentList from './StudentList.js'


export default class SingleCampusContainer extends Component {
    constructor() {
        super();
        this.state = {
            campus: {},
            students: []
        }
    }

    componentDidMount() {
        const campusId = +this.props.match.params.campusId;
        axios.get(`/api/campus/${campusId}`)
        .then(res => res.data)
        .then(singleCampus => {
            this.setState({
                campus: singleCampus,
                students: singleCampus.students.filter(student => {
                    return student.campusId === campusId;
                })})
        });



    }
   render() {

    return (
        <div>
            <h1> {this.state.campus.name} </h1>
            <p>{this.state.campus.description}</p>

            <h2>Students at this campus: </h2>
               
            <StudentList />
            <EditCampus campus={this.state.campus} />
            <img src={this.state.campus.imageUrl}/>
        </div>
    )
   }
}