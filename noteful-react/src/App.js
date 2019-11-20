import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './Components/header';
import Nav from './Components/nav';
import NoteList from './Components/noteList';
import Note from './Components/note';


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
              <Switch>
              <Route path='/folder/:folderid' 
                render={(folderIdParams) => {
                  let folderId = folderIdParams.match.params.folderid;
                  console.log("render one folder", folderId);
                return <NoteList
                  header={this.header}
                  store={this.props.store}
                  select={this.updateNoteSelected}
                  folder={this.state.folderSelected}
                  folderId={folderId}
                  />
                }
              }/>
              <Route path='/notes/:noteid' 
                render={(noteIdParams, history) => {
                  let noteid = noteIdParams.match.params.noteid;
                  let note = this.props.store.notes.filter((note)=> note.id === noteid)[0];
                  let content = note.content;
                  console.log("render one note", note);
                  return <Note
                    header={this.header}
                    store={this.props.store}
                    select={this.updateNoteSelected}
                    folder={this.state.folderSelected} 
                    id={noteid}
                    name={note.name}
                    modified={note.modified}
                    content={content}
                    descriptionShowing={true}
                  />
                }}
                />
              <Route path='/' 
                component={NoteList}
                />
              </Switch>

              
            </div>
            
          </div>
      </div>
    );
  }
}

export default App;