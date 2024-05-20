import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-ul">
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="https://drive.google.com/file/d/1LS_MiBN-pcEkzA-5gVN0QoWHND7zdzc9/view?usp=sharing" download={"Resume_Utkarsh_Swaroop_Shrivastava_Resume"}><li>Resume</li></a>
                <a href="#"><li>Blog</li></a>
            </ul>
        </nav>
    );
}

export default Navbar;