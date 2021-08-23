import React from 'react';

function Navbar({ currentpage, handlePageChange }) {
  return (
        <div>
            <nav aria-labelledby="primary-navigation">
                <ul className="primary-navigation">
                    <li>
                        <a
                            href="#about-me"
                            onClick={() => handlePageChange('About')}
                            className={currentpage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            className={currentpage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentpage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
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
