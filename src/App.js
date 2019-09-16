import React from 'react';
import './App.css';

function App() {
  return (
      <div>
        <h1>Wilcomen</h1>
        <TaskList name='Todo' tasks={['Allo', 'Dont come tomorrow']} />
        <TaskList name='WIP' tasks={['AWI', 'AWI again']} />
      </div>
  );
}

const Task = (props) => <li>{props.text ? props.text : "No text"}</li>

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    };
    this.addTask = this.addTask.bind(this);
  }

  render() {
    return <div style={{ display: 'inline-block' }}>
      <h2>{this.props.name}</h2>
      <ul>
        {this.state.tasks.map(task => <Task text={task} />)}
      </ul>
      <TaskForm handleClick={this.addTask} />
    </div>
  }

  addTask(newTask) {
    this.state.tasks.push(newTask);
    this.setState({ tasks: this.state.tasks });
  }
}

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
    this.props.handleClick(this.state.inputValue);
  }

  render() {
    return <div>
      <input name='newTask' value={this.state.inputValue} onChange={this.handleChange} />
      <input type='submit' value='Add Task' onClick={this.submit} />
    </div>
  }
}

export default App;
