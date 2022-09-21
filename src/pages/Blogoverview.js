import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

function Blogoverview() {
    return (
        <section>
            <h1>Blogoverview</h1>
            <p>Aantal blogposts: {posts.length}</p>
            <ol>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`/blog/${post.id}`} className="post-list">{post.title}</Link>
                    </li>
                })}
            </ol>
        </section>
    );
}

export default Blogoverview;