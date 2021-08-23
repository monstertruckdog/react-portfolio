import React from 'react';
// import '../styles/Navbar.css';


// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
        <div>
            <nav aria-labelledby="primary-navigation">
                <ul className="primary-navigation">
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
  );
}

export default Navbar;
