import React, { Component } from 'react';
import Header from './header';
import Nav from './nav';
import NoteList from './noteList';

class HomeView extends Component{
    render() {

        return(
            <div>
                <Header />
                <Nav 
                    store={this.props.store}
                    select={this.updateFolderSelected}
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

export default HomeView;

