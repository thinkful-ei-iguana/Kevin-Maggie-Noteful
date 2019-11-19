import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Folders extends Component {

  render() {
    return (
      <div>
        <Link to={`/Folder/${this.props.id}`}>
            {this.props.folderName}</Link>
      </div>
    )
  }
}


export default Folders;