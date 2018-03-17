import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    newItem: ''
  }

  render() {
    return (
      <div className="add-item">
        <label>
            <input type="text" placeholder="ToDo..." value={this.state.newItem} onChange={(e) => this.handleChange(e)}/>
            <input type="button" value="add" onClick={(e) => this.handleClick(e)}/>
        </label>
      </div>
    );
  }

  handleChange(event) {
    let newValue = event.target.value;
    this.setState({
        newItem: newValue,
    });

  }

  handleClick(event) {
    this.props.onAddItem(this.state.newItem);

    this.setState({newItem: ''});

  }
}

export default AddItem;