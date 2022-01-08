import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
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
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
