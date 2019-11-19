import React, { Component } from 'react';
import Notes from './notes';

class NoteList extends Component {

    render() {
        
        const notes = this.props.store.notes
    

        return(
            notes.map(note => {
                const id = note.id;
                const name = note.name;
                const modified = note.modified;
                const folderId = note.folderId;
                const content = note.content;
                return (
                    <Notes
                        key={id}
                        id={id}
                        name={name}
                        modified={modified}
                        folderId={folderId}
                        content={content}
                        select={this.props.select}
                        allNotes={this.notes}
                        folder={this.props.folderSelected}
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




/*if (this.props.folder === null) {
            notes.map(note => {
                const id = note.id;
                const name = note.name;
                const modified = note.modified;
                const folderId = note.folderId;
                const content = note.content;
                return (
                    <Notes
                        key={id}
                        id={id}
                        name={name}
                        modified={modified}
                        folderId={folderId}
                        content={content}
                        select={this.props.select}
                    />
                )
            })
        } 
        else (this.props.folder !== null) {
            notes.forEach(note => {
                const id = note.id;
                const name = note.name;
                const modified = note.modified;
                const folderId = note.folderId;
                const content = note.content;
                if (folderId === this.props.folder) {
                    return (
                        <Notes
                            key={id}
                            id={id}
                            name={name}
                            modified={modified}
                            folderId={folderId}
                            content={content}
                            select={this.props.select}
                        />
                    )}
            })
        } */