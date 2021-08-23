import React from 'react';
import Navbar from './Navbar'
// import '../styles/Navbar.css';


// We use JSX curly braces to evaluate the style object on the JSX tag

function Header() {
  return (
    <header className="header">
        <h1>Bryan Civils</h1>
        <Navbar />
    </header>
  );
}

export default Header;
