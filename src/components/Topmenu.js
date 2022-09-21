import React from 'react';
import {NavLink} from 'react-router-dom';

function Topmenu({isAuth, toggleAuth}) {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink></li>
                {isAuth === true ? <>
                        <li>
                            <NavLink to="/blogposts">
                                Blogoverzicht
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" onClick={toggleAuth}>
                                Uitloggen
                            </NavLink>
                        </li>
                    </>
                    :
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Topmenu;