import React, {Component} from 'react';


export default class EditCampusContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.campus.name,
            description: this.props.campus.description
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(evt) {
        evt.preventDefault()
        const studentId = this.props.campus.id;
        axios.put(`/api/campus/${campusId}`, campusId, this.state)
        .then(res => res.data)
        .then(updatedCampus => {
            this.setState({campus: updatedCampus})
        })
    }

    handleChange(evt) {
        switch(evt.target.name) {
            case 'name':
            this.setState({
                name: evt.target.value
            })
            break;
            case 'description':
            this.setState({
                description: evt.target.value
            })
            default:
            return state;
        }
        
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Edit campus name:
                    <input name="name" placeholder={this.props.campus.name} onChange={this.handleChange}/>
                </label>
                <br/>
                    <label>
                    Edit description:
                    <input name="description" placeholder={this.props.campus.description} onChange={this.handleChange}/>
                    </label>
                <button type="submit">submit new campus info</button>
            </form>

            
            </div>
        )
    }
}
