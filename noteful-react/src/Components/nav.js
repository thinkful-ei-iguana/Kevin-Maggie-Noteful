import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../dummyStore';

class Nav extends Component {
  
  render() {
    
    const folders = store.folders;

    return (
      folders.map(folder => {
        const id = folder.id;
        const folderName = folder.name;
        
        console.log('id is', id);
        return (
          <div>
            <ul>
            <li key={id} className="each-folder">
              <Link to={`/Folder/${id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  for (let i = 0; i < store.notes.length; i++) {
                    const noteFolderId = store.notes[i].folderId;
                    const element = document.getElementById('li'+store.notes[i].id);
                    if(id !== noteFolderId){
                      element.classList.add("hidden");
                      
                    } else {
                      element.classList.remove("hidden");
                    }
                  }
                
                  
                }}
                >
                {folderName}</Link>
            </li>
            </ul>
          </div>
        )
      })
    )
  }
}

export default Nav;
