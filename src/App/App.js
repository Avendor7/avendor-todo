import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import Todolist from '../Todo/todo-list';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Todolist/>
      </div>
    );
  }
}

export default App;
