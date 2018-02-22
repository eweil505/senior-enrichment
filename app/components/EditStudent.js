import React, {Component} from 'react';
import { connect } from 'react-redux';
import store, { editStudent } from '../store';
import history from '../history'

export class EditStudentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: this.props.students || [],
            campuses: this.props.campuses || []
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({students: nextProps.students, campuses: nextProps.campuses})
    }

    render(props) {
        const studentId = this.props.match.params.studentId
        const students = this.state.students
        const campuses = this.state.campuses
        const findStudent = (student) => +student.id === +studentId
        const singleStudent = students.find(findStudent)
        console.log(singleStudent, 'singleStudent')
        return (
            <div>
            <form onSubmit={this.props.updateStudent}>
                <label>
                    Edit first name:
                    <input name="firstName" placeholder={singleStudent && singleStudent.firstName} onChange={this.handleChange}/>
                </label>
                <br/>
                    <label>
                    Edit last name:
                    <input name="lastName" placeholder={singleStudent && singleStudent.lastName}/>
                    </label>
                <br/>
                    <label>
                    Edit email:
                    <input name="email" placeholder={singleStudent && singleStudent.email}/>
                    </label>
                <br/>
                    <label>
                    Edit gpa:
                    <input name="gpa" placeholder={singleStudent && singleStudent.gpa}/>
                </label>
                <button type="submit">submit new student info</button>
            </form>

            
            </div>
        )
    }
}

const mapStateToProps = ({students, campuses}) => {
    return {
        students: students,
        campuses: campuses
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteStudent(event) {
            const studentId = ownProps.match.params.studentId
            event.preventDefault()
            dispatch(removeStudent(studentId))
            ownProps.history.push('/students')
          },
          updateStudent(event) {
            console.log(event, 'submit event')
            const id = ownProps.match.params.studentId
            const firstName = event.target.firstName.value
            const lastName = event.target.lastName.value
            const email = event.target.email.value
            const gpa = event.target.gpa.value
            event.preventDefault()
            dispatch(editStudent({ firstName, lastName, email, gpa }, id))
            // ownProps.history.push('/students')
        }
    }
}

export default connect(mapStateToProps)(EditStudentContainer)



/**
 * import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { removeStudent, putStudent } from '../store'


class OneStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: this.props.students || [],
      campuses: this.props.campuses || []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ students: nextProps.students, campuses: nextProps.campuses })
  }

  render() {
    const studentId = this.props.match.params.studentId
    const students = this.state.students
    const campuses = this.state.campuses
    const findStudent = (student) => +student.id === +studentId
    const singleStudent = students.find(findStudent)

    return (
      <div>
        <h3>Edit Vizard</h3>
        <div className="one-student">
          {singleStudent && <NavLink to={`/campuses/${singleStudent.campus.id}`}>
            <img src={singleStudent.campus.imgUrl} />
          </NavLink>}
          <div id="edit-student">
            <form onSubmit={this.props.updateStudent}>
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>Name</th>
                    <th>Wand</th>
                    <th>House</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button type="button" className="close" aria-label="Close" onClick={this.props.deleteStudent}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </td>
                    <td>
                      {singleStudent && <input className="form-control" defaultValue={singleStudent.name} name="name" />}
                    </td>
                    <td style={{ width: '250px' }}>
                      {singleStudent && <input
                        className="form-control"
                        defaultValue={singleStudent.wand} name="wand" />}
                    </td>
                    <td>
                      <select className="form-control houseSelect" name="houseSort" >
                        {singleStudent && <option defaultValue value={singleStudent.campus.id}>{singleStudent.campus.name}</option>}
                        {campuses.length && campuses.map(campus => {
                          if (singleStudent && campus.name !== singleStudent.campus.name) {
                            return <option key={campus.id} value={campus.id}>{campus.name}</option>
                          }
                        })}
                      </select>
                    </td>
                    <td>
                      <button type="submit" className="btn btn-outline-danger"> Submit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent(event) {
      const studentId = ownProps.match.params.studentId
      event.preventDefault()
      dispatch(removeStudent(studentId))
      ownProps.history.push('/students')
    },
    updateStudent(event) {
      const id = ownProps.match.params.studentId
      const name = event.target.name.value
      const wand = event.target.wand.value
      const campusId = event.target.houseSort.value
      event.preventDefault()
      dispatch(putStudent({ id, name, wand, campusId }))
      ownProps.history.push('/students')
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OneStudent))
 */