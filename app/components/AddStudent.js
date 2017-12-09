import React from 'react';
import { connect } from 'react-redux';
import store, { createStudent } from '../store';


function AddStudentContainer(props) {
        return (
            
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" />
                    
                    <br/>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <input name="email" />
                    <br/>
                    <label htmlFor="gpa">GPA</label>
                    <input name="gpa" />
                    <br/>
                    <select name="campusId">
                        {
                            props.campuses.map(campus => {
                                return <option key={campus.id} value={campus.id}>{campus.name}</option>
                            })}
                        )
                            
                    </select>
                    <br/>
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }

const mapStateToProps = function(state) {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            dispatch(createStudent({
                firstName: evt.target.firstName.value,
                lastName: evt.target.lastName.value,
                email: evt.target.email.value,
                gpa: evt.target.gpa.value,
                campusId: evt.target.campusId.value
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentContainer);
