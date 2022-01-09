import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import NoteDetails from "./components/NoteDetails";
import NotesList from './components/NotesLists';
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="App">

      <Routes>
        <Route exact path="/" element={<NotesList/>}/>
        <Route path="/addnote" element={<AddNote/>}/>
        <Route path="/notes/edit/:id" element={<AddNote/>}/>
        <Route path="/notes/:id" element={<NoteDetails/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
