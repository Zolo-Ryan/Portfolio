import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-ul">
                <a href="#"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#"><li>Resume</li></a>
                <a href="#"><li>Blog</li></a>
            </ul>
        </nav>
    );
}

export default Navbar;