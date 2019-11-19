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


  render() {
    return (
      <div className="App">
      <Header />
      <NoteList />
      <Nav store={this.props.store} />
      </div>
    );
  }
}

export default App;
