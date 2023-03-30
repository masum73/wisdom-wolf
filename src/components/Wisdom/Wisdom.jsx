import React, { useEffect, useState } from 'react';
import './Wisdom.css'
const Wisdom = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='wisdom-container'>
            <div className='blog-container'>

            </div>
            <div className='bookmarked-container'>

            </div>
        </div>
    );
};

export default Wisdom;