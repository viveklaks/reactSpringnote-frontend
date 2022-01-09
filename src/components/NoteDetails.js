import React, { useEffect } from 'react';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {get, remove} from "../services/NoteService"
const NoteDetails = () => {
    const{id}=useParams();
    const [currentNote,setCurrentNote] = useState('');
    const history = useNavigate();
    useEffect(()=>{
        get(id)
        .then(note=>{
            setCurrentNote(note.data);
        }).catch(error =>{
            console.log('Something went wrong',error);
        })
    })
    const deleteNote = ()=>{
        remove(id)
        .then(response =>{
            history("/")
        })
        .catch(error =>{
            console.log('Something went wrong',error);
        })
    }
    return (
      <div className="note-details main-content">
          <article>
             <h5> {currentNote.title} </h5>
             <div className="mb-3 font-italic metadata">
                 <span>{currentNote.updatedAt}</span>
                 <span className="text-capitalize">{currentNote.category}</span>
             </div>
             <div className="mb-3">{currentNote.body}</div>
          </article>
        <button onClick={deleteNote}>Delete</button>
      </div>
      
    )
}
export default NoteDetails;