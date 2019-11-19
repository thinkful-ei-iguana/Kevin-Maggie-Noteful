import React, { Component } from 'react';

class Folders extends Component {

  render() {
    return (
      <div>
        <button 
          className="folder-button" 
          id={this.props.id}
          onClick={this.props.select}
        >{this.props.folderName}</button>
      </div>
    )
  }
}


export default Folders;