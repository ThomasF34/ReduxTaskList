import React from 'react';
import TaskList from './components/TaskList'
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return <div>
      <h1>Wilcomen</h1>
      {this.props.taskLists.map((taskList, index) => <TaskList key={index} name={taskList.id} />)}
    </div >
  }
}

export default connect((state) => { return { taskLists: state.taskLists } })(App);
