import React, { Component } from 'react';

class Item extends Component {
  state = {
    done: false,    
  }

  render() {
    return (
      <div className="item">
        <label>
            <input type="checkbox" value="done" checked={this.state.done} onChange={(e) => this.handleClick(e)}/>
            {this.props.desc}
        </label>
      </div>
    );
  }

  handleClick(event) {
    console.log("clicked", event.target.checked);

    let newValue = event.target.checked;
    this.setState({
        done: newValue,
    });

  }
}

export default Item;