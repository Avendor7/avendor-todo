import React, { Component } from 'react';
import './todo.scss';

class Todolist extends Component {
  state = {
    items: ["get vpn", "get ip address", "get milk"]      
  }

  render() {
    return (
      <div className="todolist">
        <h2>todo component</h2>
        <ul>
            {this.state.items.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;
