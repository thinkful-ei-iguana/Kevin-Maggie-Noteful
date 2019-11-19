import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import FolderView from './Components/folderView';
import NotesView from './Components/notesView';
import HomeView from './Components/homeView';


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

  header = () => {
    return(
        <div>
            <h1>Noteful</h1>
        </div>
    )
  }

  // <Route (exact) path='/' component={HomePage} />
  render() {
    
    return (
      <div className="App">
          <Route
            path='/'
            render={() => <HomeView
              header={this.header}
              store={this.props.store}
              select={this.updateNoteSelected}
              folder={this.state.folderSelected}
            />}
          />
      </div>
    );
  }
}

export default App;
