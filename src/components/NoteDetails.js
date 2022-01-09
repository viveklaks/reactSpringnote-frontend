import React, { useEffect } from 'react';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {get} from "../services/NoteService"
const NoteDetails = () => {
    const{id}=useParams();
    const [currentNote,setCurrentNote] = useState('');
    useEffect(()=>{
        get(id)
        .then(note=>{
            setCurrentNote(note.data);
        }).catch(error =>{
            console.log('Something went wrong',error);
        })
    })

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

      </div>
      
    )
}
export default NoteDetails;