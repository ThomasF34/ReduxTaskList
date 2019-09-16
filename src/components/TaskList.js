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
        {this.props.tasks.map((task, index) => <Task key={index} text={task.text} done={task.completed} />)}
      </ul>
      <TaskForm idTaskList={this.props.name} />
    </div>
  }
}

TaskList.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  )
}

export default connect((state, ownProps) => {
  return { tasks: state.taskLists.filter(list => list.id === ownProps.name).flatMap(list => list.tasks) }
})(TaskList)
