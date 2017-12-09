import React, { Component } from 'react';
import store, { fetchSingleCampus} from '../store'

export default class SingleCampus extends Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount(props) {
        const singleCampusThunk = fetchSingleCampus(props.match.params.campusId)

        store.dispatch(singleCampusThunk)
    }

    render() {
        console.log(this.state)
        return (
            <h1>    
                future single campus home
            </h1>
        )
    }
}
