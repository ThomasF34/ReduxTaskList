import React from 'react'
import PropTypes from 'prop-types'

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  submit() {
    this.props.handleNewTask(this.state.inputValue, this.props.idTaskList);
    this.setState({ inputValue: '' })
  }

  render() {
    return <div>
      <input name='newTask' value={this.state.inputValue} onChange={this.handleChange} />
      <input type='submit' value='Add Task' onClick={this.submit} />
    </div>
  }
}

TaskForm.propTypes = {
  idTaskList: PropTypes.string.isRequired,
  handleNewTask: PropTypes.func.isRequired
}

export default TaskForm