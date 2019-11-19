import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import NoteList from './Components/noteList';
import Nav from './Components/nav';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folderSelected: null,
      noteSelected: null
    }
  }

  updateFolderSelected = (e) => {
    const folderSelected = e.currentTarget.id;
    this.setState({folderSelected: folderSelected})
  }

  updateNoteSelected = (e) => {
    const noteSelected = e.currentTarget.id;
    this.setState({noteSelected: noteSelected})
  }

  render() {
    return (
      <div className="App">
      <Header />
      <NoteList 
        store={this.props.store}
        select={this.updateNoteSelected}
      />
      <Nav 
        store={this.props.store}
        select={this.updateFolderSelected}
      />
      </div>
    );
  }
}

export default App;
