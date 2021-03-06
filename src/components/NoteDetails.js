import React, { useEffect } from 'react';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {get, remove} from "../services/NoteService";
import Moment from 'react-moment';
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
    },[id])
    const deleteNote = ()=>{
        remove(id)
        .then(response =>{
            history("/")
        })
        .catch(error =>{
            console.log('Something went wrong',error);
        })
    }
    const editNote = ()=>{
        history(`/notes/edit/${id}`);
    }
    return (
      <div className="note-details main-content">
          currentNote && 
          <div>
          <article>
             <h5 className='text-capitalize primary-color'> {currentNote.title} </h5>
             <div className="mb-3 font-italic metadata">
                 <Moment fromNow>{currentNote.updatedAt}</Moment>
                 <span className="text-capitalize">, {currentNote.category}</span>
             </div>
             <div className="mb-3">{currentNote.body}</div>
          </article>
          <button onClick={editNote}>Edit</button>
        <button onClick={deleteNote} className='ml-3'>Delete</button>

          </div>
          
      </div>
      
    )
}
export default NoteDetails;