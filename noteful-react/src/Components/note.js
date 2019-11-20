import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';

class Note extends Component {

  render() {

    return (
      <ul>
        <li key={this.props.id} id={'li'+this.props.id} className="each-note">
          <Link to={`/notes/${this.props.id}`}>{this.props.name}</Link>
          <p>Last modified: {this.props.modified}</p>

          <p className={this.props.descriptionShowing === false ? "hidden" : ""} id={'content'+this.props.id}>{this.props.content}</p>
          <button className="delete-note">Delete</button>
        </li>
      </ul>
    )
  }
}
export default Note;