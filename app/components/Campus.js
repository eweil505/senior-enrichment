import React, {Component} from 'react';
import store, { fetchSingleCampus } from '../store'
import axios from 'axios'


export default class SingleCampusContainer extends Component {
    constructor() {
        super();
        this.state = {
            campus: {}
        }
    }

    componentDidMount() {
        const campusId = +this.props.match.params.campusId;
        axios.get(`/api/campus/${campusId}`)
        .then(res => res.data)
        .then(singleCampus => {
            this.setState({campus: singleCampus})
        });


    }
   render() {
    return (
        <div>
            <h1> {this.state.campus.name} </h1>
            <p>{this.state.campus.description}</p>
        </div>
    )
   } 
   
}



