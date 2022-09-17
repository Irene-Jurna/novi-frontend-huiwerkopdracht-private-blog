import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

function Blogoverview() {
    return (
        <section>
            <h1>Blogoverview</h1>
            <p>Hier vind je alle blogs</p>
            <p>Moeilijk kiezen welke blog je wil lezen? Bekijk hieronder het hele overzicht of klik <Link to="/blogposts/:blogId">hier</Link> voor het laatste blog</p>
            <p>Aantal blogposts: {posts.length}</p>
            <h2>De lijst: </h2>
            <ol>
                {posts.map((post) => {
                    return <li>
                        <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
                    </li>
                })}
            </ol>
        </section>
    );
}

export default Blogoverview;