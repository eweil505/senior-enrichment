import React, {Component} from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'


export default class SingleStudentContainer extends Component {
    constructor() {
        super();
        this.state = {
            student: {},
        }
    }

    componentDidMount() {
        const studentId = +this.props.match.params.student;
        axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(singleStudent => {
            this.setState({student: singleStudent})
        })
    

        
    }
   render() {
       console.log('single student state', this.state)
    return (
        <div>
            <h1> {this.state.student.name} </h1>

            <NavLink to={`/campus/${this.state.student.campusId}`}>
                <span>{this.state.student.name}'s  campus</span>
            </NavLink>
                
        </div>
    )
   } 
   
}