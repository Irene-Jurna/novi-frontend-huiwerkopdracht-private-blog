import React from 'react';
import {Link, useParams} from 'react-router-dom';
import posts from '../data/posts.json'

function Blogpost() {
    const { id } = useParams();
    const blogs = posts.find((blog) => {
        return blog.id === id;
    });

    return (
        <>
        <section className="blogpost-container">
            <article className="blogpost-item">
            <h1>Blogpost #{id}</h1>
            <h2>{blogs.title}</h2>
            <p className="publication-date">Publicatiedatum: {blogs.date}</p>
            <p>{blogs.content}</p>
        <p>Ga terug naar het <Link to="/blogposts">blogoverzicht</Link> </p>
            </article>
        </section>
        </>
    );
}

export default Blogpost;