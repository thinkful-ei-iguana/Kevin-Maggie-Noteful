import React, { Component } from 'react';
import Header from './header';
import Nav from './nav';
import NoteList from './noteList';

class FolderView extends Component{
  render() {
    console.log('folder is', this.props.folder);
    return(
      <div>
        <p> FOLDER VIEW YO </p>
        <Header />
        <Nav 
          store={this.props.store}
          select={this.props.updateFolderSelected}
          />
        <NoteList 
          store={this.props.store}
          select={this.props.updateNoteSelected}
          folder={this.props.folderSelected}
          />
      </div>
    )
  }
}

export default FolderView;