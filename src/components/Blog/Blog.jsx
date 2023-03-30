import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const {blogTitle, authorName,publishDate,authorImg,readTime} = props.blog;
    console.log(props.blog);
    return (
        <div>
            <img src={authorImg} alt="" />
            <p>{authorName}</p>
            <p>{publishDate}</p>
            <p>{readTime}</p>
            <h1>{blogTitle}</h1>
            <a href="#">Mark as Read</a>
        </div>
    );
};

export default Blog;