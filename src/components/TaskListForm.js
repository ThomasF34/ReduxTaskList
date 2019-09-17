import React from 'react'
import { connect } from 'react-redux'
import { addTaskList } from '../actions'

class TaskListForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '' }
  }

  submit = () => {
    this.props.dispatch(addTaskList(this.state.inputValue))
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    return <div>
      <input name='newTaskList' value={this.state.inputValue} onChange={this.handleChange} />
      <input type='submit' value='Add TaskList' onClick={this.submit} />
    </div>
  }
}

export default connect()(TaskListForm)