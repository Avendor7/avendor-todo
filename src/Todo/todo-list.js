import React, { Component } from 'react';
import Item from './item/item';
import AddItem from './add-item/add-item';

import './todo.scss';

class Todolist extends Component {
  state = {
    nextid: 4,
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
        <h1>TODO</h1>
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
    //set new id in object
    newItem.id = this.state.nextid;
    //duplicate currentl list of items     triple dots 'spreads' the current state for modification
    let newItems = { ...this.state.items }
    //set new id on the object
    newItems[newItem.id] = newItem;
    //set the state again

    this.setState({
      items:newItems,
      nextid:this.state.nextid + 1,
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