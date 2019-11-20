import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Components/header';
import Nav from './Components/nav';
import NoteList from './Components/noteList';
import Note from './Components/notes';


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

  render() {
    
    return (
      <div className="App">
        <header>
          <Header />
        </header>
          <div className="body-container">
            <div className="nav-container">
              <nav className="folder-menu">
                <Nav />
                <Link to={'/Folder/AddNote'}>
                  Add folder
                </Link>
              </nav>
            </div>
            <div className="note-container">
              <Route path='/folder/:folderid' 
                render={() => <NoteList
                  header={this.header}
                  store={this.props.store}
                  select={this.updateNoteSelected}
                  folder={this.state.folderSelected}
                  />}
                />
              <Route path='/notes/:noteid' 
                render={() => <Note
                  header={this.header}
                  store={this.props.store}
                  select={this.updateNoteSelected}
                  folder={this.state.folderSelected} 
                  />}
                />
              <NoteList />
            </div>
            
          </div>
      </div>
    );
  }
}

export default App;


{/* <Route
              path='/folder/:folderid'
              component={FolderView}
              render={() => <FolderView
                header={this.header}
                store={this.props.store}
                select={this.updateNoteSelected}
                folder={this.state.folderSelected}
              />}
            />
            <Route
              path='/notes/:noteid'
              component={NotesView}
              render={() => <NotesView
                header={this.header}
                store={this.props.store}
                select={this.updateNoteSelected}
                folder={this.state.folderSelected}
              />}
            />
            <Route
              exact path='/'
              render={() => <HomeView
                header={this.header}
                store={this.props.store}
                select={this.updateNoteSelected}
                folder={this.state.folderSelected}
              />}
            /> */}