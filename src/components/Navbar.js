import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
        <h2 className="primary-color">
         Note App    
        </h2>  
        <div>
          <Link to="/">Home</Link>
          <Link to="/addnote" className="ml-3">New Note</Link>
        </div>
        </nav>
        
    )
}
export default Navbar;