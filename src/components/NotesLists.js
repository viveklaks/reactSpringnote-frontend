import { useState ,useEffect } from "react"; 
import { Link } from "react-router-dom";
import getAll from "../services/NoteService"
const NotesList = () =>{
   const[notes,setNotes] =  useState();
   useEffect(() => {
       getAll()
       .then(response =>{
           console.log('printing response', response.data);
           setNotes(response.data);

       }).catch(error =>{
            console.log("Something wetn wrong",error)
       })
       
   }, [])
    return (
        <div className="main-content">
            <h1>
                List of Notes
            </h1>
            <div className="notes-list mt-4">
            {
                notes.length>0 ? notes.map(note =>(
                    <div key={note.id} className="notes-preview mt-3">
                        <Link to="#">
                          <h5 className="primary-color text-capitalize">{note.title}</h5>  
                          <p>category: {note.category}</p> 
                          <p>details : {note.body}</p>
                        </Link>
                          
                    </div>
                )
                    
                ):<div> No notes available</div>
            }
            </div>
           
        </div>
    );
}
export default  NotesList ;