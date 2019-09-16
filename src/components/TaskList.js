import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import TaskForm from './TaskForm'
import { connect } from 'react-redux'

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  render() {
    return <div style={{ display: 'inline-block' }}>
      <h2>{this.props.name}</h2>
      <ul>
        {this.props.tasks.map(task => <Task text={task.text} done={task.completed} />)}
      </ul>
      <TaskForm />
    </div>
  }

  addTask(newTask) {
    this.state.tasks.push(newTask);
    this.setState({ tasks: this.state.tasks });
  }

  propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired
  }
}

export default connect((state) => { return { tasks: state.tasks } })(TaskList)