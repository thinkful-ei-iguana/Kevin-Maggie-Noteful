import React, { Component } from 'react';
import Folders from './folders';

class Nav extends Component {
  
  render() {
    
    const folders = this.props.store.folders
    console.log('folders is', folders);
    return (
      folders.map(folder => {
        const id = folder.id;
        const folderName = folder.name;
        return (<Folders key={id} id={id} folderName={folderName} />)
      })
    )
  }
}

export default Nav;