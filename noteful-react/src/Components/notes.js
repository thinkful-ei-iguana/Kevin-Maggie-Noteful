import React, { Component } from 'react';

class Notes extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.modified}</p>
        <button>Delete Note</button>
      </div>
      <div>
        <p>{this.props.content}</p>
      </div>
    )
  }
}


export default Notes;