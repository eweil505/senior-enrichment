import React, {Component} from 'react';


export default class EditStudentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
            email: this.props.student.email,
            gpa: this.props.student.gpa,
            campusId: this.props.student.campusId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(evt) {
        evt.preventDefault()
        const studentId = this.props.student.id;
        axios.put(`/api/students/${studentId}`, studentId, this.state)
        .then(res => res.data)
        .then(updatedStudent => {
            this.setState({student: updatedStudent})
        })
    }

    handleChange(evt) {
        switch(evt.target.name) {
            case 'firstName':
            this.setState({
                firstName: evt.target.value
            })
            break;
            default:
            return state;
        }
        
    }

    render() {
        console.log(this.state)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Edit first name:
                    <input name="firstName" placeholder={this.props.student.firstName} onChange={this.handleChange}/>
                </label>
                <br/>
                    <label>
                    Edit last name:
                    <input name="lastName" placeholder={this.props.student.lastName}/>
                    </label>
                <br/>
                    <label>
                    Edit email:
                    <input name="email" placeholder={this.props.student.email}/>
                    </label>
                <br/>
                    <label>
                    Edit gpa:
                    <input name="gpa" placeholder={this.props.student.gpa}/>
                </label>
                <button type="submit">submit new student info</button>
            </form>

            
            </div>
        )
    }
}



