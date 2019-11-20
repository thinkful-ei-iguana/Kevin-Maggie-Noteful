import React, { Component } from 'react';
import './notes.css';
import { Link } from 'react-router-dom';

class Note extends Component {


  constructor(props) {
    super(props);
  
    this.state = {
      showing: false
    }
  }

  render() {
   

  return (
    <ul>
      <li key={this.props.id} className="each-note">
        <Link  
          onClick={() => { 
            const element = document.getElementById(this.props.id);
            if(!this.state.showing) {
              element.classList.remove("hidden");
              this.setState({showing: true});
            }
            else {
              element.classList.add("hidden");
              this.setState({showing: false});
            }
        }}>{this.props.name}</Link>
        <p>Last modified: {this.props.modified}</p>
        <p className="hidden" id={this.props.id}>{this.props.content}</p>
        <button className="delete-note">Delete</button>
      </li>
    </ul>
  )
  }
}
export default Note;