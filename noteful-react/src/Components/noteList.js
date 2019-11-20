import React, { Component } from 'react';
import Note from './notes';
import store from '../dummyStore';

class NoteList extends Component {

    render() {
        
        const notes = store.notes
            notes.filter(note => {
                if(note.folderId === this.props.folderSelected) {
                    return true;
                }
            })
            .map(note => {
                return <Note id={note.id} />;
            });

        return(
            notes.map(note => {
                const id = note.id;
                const name = note.name;
                const modified = note.modified;
                const folderId = note.folderId;
                const content = note.content;
                
                return (
                    <Note
                        key={id}
                        id={id}
                        name={name}
                        modified={modified}
                        folderId={folderId}
                        content={content}
                        noteSelected={this.props.noteSelected}
                        allNotes={this.notes}
                        folderSelected={this.props.folderSelected}
                    />
                )
            })
        )
    }


}

export default NoteList;
//On the main display: show all notes.
//On the folder display:
//For each note, check if its FolderID matches the ID
//of the selected folder (as held in store).  If it does
//then display it, otherwise dont. 
//On the note display: show the selected note only.
