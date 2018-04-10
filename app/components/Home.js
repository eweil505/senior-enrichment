import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'


export const Home = () => {
    return (
        <div id="homePg">
            <h1>Chicago International Culinary Institute</h1>
            <div><Link to="/campus"><img src="/global-spices.jpg" id="homeIcon"></img></Link></div>
            <p>We are committed to training the next generation of chefs to prepare authentic cuisine from around the world.</p>
        </div>
    )   
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

export default connect(null)(Home)