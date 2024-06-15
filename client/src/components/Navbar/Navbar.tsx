import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={isOpen ? "bar open" : "bar"}></div>
                <div className={isOpen ? "bar open" : "bar"}></div>
                <div className={isOpen ? "bar open" : "bar"}></div>
            </div>
            <ul className={isOpen ? "nav-ul open" : "nav-ul"}>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="https://drive.google.com/file/d/1EttRlmPVNS9YuEUdeLqOdANnL6Ydf7xF/view?usp=sharing" download={"Resume_Utkarsh_Swaroop_Shrivastava_Resume"}><li>Resume</li></a>
                <a href="#"><li>Blog</li></a>
            </ul>
        </nav>
    );
}

export default Navbar;
