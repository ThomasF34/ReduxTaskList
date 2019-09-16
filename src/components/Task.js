import React from 'react'
import PropTypes from 'prop-types'

const Task = (props) => <li style={{ textDecoration: props.done ? 'line-through' : 'none' }}>{props.text ? props.text : "No text"}</li>

Task.propTypes = {
  text: PropTypes.string.isRequired
}

export default Task