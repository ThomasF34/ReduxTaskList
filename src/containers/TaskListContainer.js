import React from 'react'
import PropTypes from 'prop-types'

import TaskList from '../components/TaskList'

import { addTask } from '../actions/index'
import { connect } from 'react-redux'

class TaskListContainer extends React.Component {
  render() {
    return <TaskList name={this.props.name} tasks={this.props.tasks} handleNewTask={this.handleClickNewTask} />
  }

  handleClickNewTask = (name, idList) => {
    this.props.dispatch(addTask(name, idList));
  }
}

TaskListContainer.propTypes = {
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
})(TaskListContainer)