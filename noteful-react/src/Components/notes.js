import React, { Component } from 'react';
import './notes.css';

class Notes extends Component {

  render() {
    return (
      <div>
        <div>
          <h3 onClick={this.props.select} id={this.props.id}>{this.props.name}</h3>
          <p>{this.props.modified}</p>
          <button>Delete Note</button>
        </div>
        <div className="hidden">
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}


export default Notes;