import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import Todolist from '../Todo/todo-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="header col-sm">
            <h1>Todo</h1>
          </div>
        </div>
          <Todolist/>
      </div>
    );
  }
}

export default App;
