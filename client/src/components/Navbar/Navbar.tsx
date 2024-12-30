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
                <a href="https://drive.google.com/file/d/1cUq7hb_WC-2ysx2DKy9JN_uuORt2EYZG/view?usp=sharing" download={"Resume_Utkarsh_Swaroop_Shrivastava_Resume"}><li>Resume</li></a>
                <a href="https://drive.google.com/file/d/1GmSGkfj_qe5ie2b_fh9kW-WxCq21lga-/view?usp=sharing" download={"Samagra_Letter_of_Recommendation_Utkarsh"}><li>LOR</li></a>
            </ul>
        </nav>
    );
}

export default Navbar;
