import React, { Component } from 'react';
import './item.scss';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <label>
            <input type="checkbox" value="done" checked={this.props.item.done} onChange={(e) => this.handleClick(e)}/>
            {this.props.item.text}
        </label>
      </div>
    );
  }

  handleClick(event) {
    console.log("clicked", event.target.checked);

    let newValue = event.target.checked;
    
    this.props.onDoneChange(this.props.item.id, newValue);
  }
}

export default Item;