import React from 'react';
import './App.css';
import TaskListContainer from './containers/TaskListContainer';
import TaskListForm from './components/TaskListForm'
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return <div>
      <h1>Wilkomen</h1>
      {this.props.taskLists.map((taskList, index) => <TaskListContainer key={index} name={taskList.id} />)}
      <TaskListForm />
    </div >
  }
}

export default connect((state) => { return { taskLists: state.taskLists } })(App);
