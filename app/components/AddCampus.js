import React from 'react';
import { connect } from 'react-redux';
import store, { postCampus } from '../store';


function AddCampusContainer(props) {
        return (
            
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="name">New Campus Name</label>
                    <br />
                    <input name="name" />
                    
                    <br/>
                    <label htmlFor="description">Describe the new campus</label>
                    <br />
                    <textarea name="description" />
                
                    <br/>
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }

// const mapStateToProps = function(state) {
//     return {
//         campuses: state.campuses
//     }
// }

const mapDispatchToProps = function(dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            dispatch(postCampus({
                name: evt.target.name.value,
                description: evt.target.description.value
            }))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddCampusContainer);