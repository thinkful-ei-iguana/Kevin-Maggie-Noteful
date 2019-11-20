import React, { Component } from 'react';
import Note from './note';
import store from '../dummyStore';

class NoteList extends Component {

    render() {
        
        return(
            store.notes.filter(note => {
                if(!this.props.folderId){
                    return true;
                }
                return note.folderId === this.props.folderId;
            })
            .map(note => {
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
                        folderSelected={this.props.folderSelected}
                        descriptionShowing={false}
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
