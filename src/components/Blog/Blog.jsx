import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const {img,blogTitle, authorName,publishDate,authorImg,readTime} = props.blog;
    console.log(props.blog);
    return (
        <div>
            <img className='w-64' src={img} alt="" />
            <img src={authorImg} alt="" />
            <p className='bg-primary'>{authorName}</p>
            <p>{publishDate}</p>
            <p>{readTime}</p>
            <h1>{blogTitle}</h1>
            <a href="#">Mark as Read</a>
        </div>
    );
};

export default Blog;