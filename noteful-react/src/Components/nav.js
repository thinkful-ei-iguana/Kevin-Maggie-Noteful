import React, { Component } from 'react';
import Folders from './folders';

class Nav extends Component {
  
  render() {
    
    const folders = this.props.store.folders
    
    return (
      folders.map(folder => {
        const id = folder.id;
        const folderName = folder.name;
        return (
        <Folders 
          header={this.props.header}
          key={id} 
          id={id} 
          folderName={folderName} 
          select={this.props.select}
        />
        )
      })
    )
  }
}

export default Nav;