import React from 'react';
// import '../styles/Navbar.css';


// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">Updated:  2021-08-26</p>
        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Projects</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Resume</a></li>    
        </ul>
    </footer>
  );
}

export default Footer;
