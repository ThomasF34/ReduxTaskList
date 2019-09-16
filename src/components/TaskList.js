import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import TaskForm from './TaskForm'
import { connect } from 'react-redux'

class TaskList extends React.Component {
  render() {
    return <div style={{ display: 'inline-block' }}>
      <h2>{this.props.name}</h2>
      <ul>
        {this.props.tasks.map(task => <Task text={task.text} done={task.completed} />)}
      </ul>
      <TaskForm />
    </div>
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
}

export default connect((state) => { return { tasks: state.tasks } })(TaskList)