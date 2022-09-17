import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory()
    function handleClick(e) {
    history.push("/blogposts")
    }

    return (
        <section>
            <h1>Login</h1>
            <p>Je kunt nu inloggen</p>
            <button
            onClick={handleClick}>
                Inloggen
            </button>
        </section>
    );
}

export default Login;