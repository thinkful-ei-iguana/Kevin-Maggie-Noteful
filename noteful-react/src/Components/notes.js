import React, { Component } from 'react';
import './notes.css';

class Notes extends Component {

  render() {
        console.log('this.props.allNotes.folderid is', this.props.allNotes.folderid);
        console.log('this.props.folder is', this.props.folder);

        return(null);
    // return (
    //   this.props.allNotes.forEach(note => {


    //     if(note.folderid === this.props.folder) {
    //       return (
    //         <div>
    //           <div>
    //             <h3 onClick={this.props.select} id={this.props.id}>{this.props.name}</h3>
    //             <p>{this.props.modified}</p>
    //             <button>Delete Note</button>
    //           </div>
    //           <div className="hidden">
    //             <p>{this.props.content}</p>
    //           </div>
    //         </div>
    //       )
    //   }
    //     else {
    //       return(<p> no matches </p>)
    //     }
    // })

    //     )
  }
}


export default Notes;