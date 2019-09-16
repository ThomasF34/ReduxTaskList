import React from 'react'
import { addTask } from '../actions'
import { connect } from 'react-redux'

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.dispatch = props.dispatch;
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  submit() {
    this.dispatch(addTask(this.state.inputValue));
  }

  render() {
    return <div>
      <input name='newTask' value={this.state.inputValue} onChange={this.handleChange} />
      <input type='submit' value='Add Task' onClick={this.submit} />
    </div>
  }
}

export default connect()(TaskForm)