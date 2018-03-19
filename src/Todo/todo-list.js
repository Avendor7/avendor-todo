import React, { Component } from 'react';
import Item from './item/item';
import AddItem from './add-item/add-item';

import './todo.scss';

class Todolist extends Component {
  state = {
    items: {
      0: {id: 0, text: "on change event goes up to todo-list", done: false},
      1: {id: 1, text: "item objects go down", done: false},
      2: {id: 2, text: "add ids and make everything an object", done: false},
      3: {id: 3, text: "move the items list up to the app", done: false}
    }
  }

  render() {
    return (
      <div className="todolist">
        <h2>todo component</h2>
        <div>
            {Object.values(this.state.items).map((item)=>(
                <Item item={item} key={item.id} onDoneChange={(itemId, newValue) => this.handleDoneChange(itemId, newValue)} />
            ))}
        </div>
        <AddItem onAddItem={(newItem)=>this.handleNewItem(newItem)}/>
      </div>
    );
  }
  
  handleNewItem(newItem) {
    console.log(newItem);

    this.setState({
      items: [
        ...this.state.items,
        newItem,
      ]
    });
  }

  handleDoneChange(itemId, newValue){
    //change the state with the passed in item

    let newItems = { ...this.state.items }
    newItems[itemId].done = newValue;

    this.setState({
      items: newItems
    });
  }

}

export default Todolist;