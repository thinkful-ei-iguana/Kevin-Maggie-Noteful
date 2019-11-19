import React, { Component } from 'react';
import Notes from './notes';

class NoteList extends Component {

    render() {
        
        const notes = this.props.store.notes
        
        return(
           notes.map(note => {
               
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