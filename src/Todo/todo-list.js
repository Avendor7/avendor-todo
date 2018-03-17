import React, { Component } from 'react';
import Item from './item/item';
import AddItem from './add-item/add-item';

import './todo.scss';

class Todolist extends Component {
  state = {
    items: ["get vpn", "get ip address", "get milk"]      
  }

  render() {
    return (
      <div className="todolist">
        <h2>todo component</h2>
        <div>
            {this.state.items.map((item, index)=>(
                <Item desc={item} key={index} />
            ))}
        </div>
        <AddItem/>
      </div>
    );
  }
}

export default Todolist;