import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { createStudent } from '../store';

//this file needs: a connect component which exposes a way to dispatch changes to the store
//a stateful form class => form component?
//a stateless functional component that displays the UI and connects event listeners
console.log('in add student')



export function AddStudentForm(props) {
    console.log('add student form props', props.params)
    const student = props.user;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input value={student.firstName} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export class AddStudentContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
            campus: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(evt) {
        evt.preventDefault();
        this.setState({
            firstName: evt.target.firstName,
            lastName: evt.target.lastName,
            email: evt.target.email,
            gpa: evt.target.gpa,
            campus: evt.target.campus

        })
    }

    handleSubmit(evt) { 
        evt.preventDefault();
        this.props.addNewStudent(this.state)
    }

    render() {
        console.log('add student container props', this.props)
        return (
            <AddStudentForm 
                user={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

const mapStateToProps = function(state, ownProps) {
    return {
        student: state.student //an object with firstName, lastName, email, gpa & campusId
    }
}
   

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        handleSubmit() {
            evt.preventDefault();

            const student = ownProps;
            dispatch(addStudent(student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentContainer);

// export const Input = (props) => {
//     const {handleChange, value} = props;
//     return <input type="text" value={value} onChange={handleChange} />
// }