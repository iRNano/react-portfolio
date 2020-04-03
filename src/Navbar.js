import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="bg-dark navbar-dark">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
        </nav>
    )
}

export default Navbar;