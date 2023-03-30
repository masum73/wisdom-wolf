import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Wisdom.css'
const Wisdom = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='wisdom-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    ></Blog>)
                }
            </div>
            <div className='bookmarked-container'>

            </div>
        </div>
    );
};

export default Wisdom;