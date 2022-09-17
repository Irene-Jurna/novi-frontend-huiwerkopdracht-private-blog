import React from 'react';
import { NavLink } from 'react-router-dom';

function Topmenu() {
    return (
        <nav>
        <ul className="navbar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/blogposts">Blogoverzicht</NavLink></li>
        </ul>
        </nav>
    );
}

export default Topmenu;