import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="width-100 p-3 pt-5 pb-5 bg">
            <button>Load Project</button>
            <button>Save Project</button>
        </nav>
    )
}

export { Navbar };