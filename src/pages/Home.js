import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section>
        <h1>Home</h1>
        <p>Welkom op een fantastisch blogplatform</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias commodi, eius enim et, expedita fuga illum minima nam natus optio quasi quis quisquam tenetur veritatis? Aut beatae dolorum, facere id labore libero nulla quae sunt. Cupiditate dicta esse ex illo inventore labore laudantium mollitia neque nisi quia, reprehenderit sunt!</p>
            <p>Bekijk <Link to="/blogposts">hier</Link> het hele blogoverzicht</p>
            <p>Wel eerst even <Link to="/login">inloggen</Link> </p>
        </section>
    );
}

export default Home;