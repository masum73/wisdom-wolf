import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Wisdom.css'
import Time from '../Time/Time';
import Bookmarked from '../Bookmarked/Bookmarked';
const Wisdom = () => {
    const [blogs, setBlogs] = useState([]);
    const [time,setTime] = useState(0);
    const [bookmarkList, setBookmarkList] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const addTime = (readTime) => {
        const totalTime = time + readTime;
        setTime(totalTime);
    }
    const addBookmark = (blogTitle) => {
        let newBookmarkList = [];
       // bookmarkList = ['ABC','DEF']
       newBookmarkList = [...bookmarkList,blogTitle]
       setBookmarkList(newBookmarkList);
        // const exists = bookmarkList.find( bl => bl === blogTitle)
        // if(exists){
        //     const remaining = bookmarkList.filter(bl => bl !== blogTitle )
        //     newBookmarkList = [...remaining];
        //     setBookmarkList(newBookmarkList);
        // }else{
        //     newBookmarkList = [...bookmarkList,blogTitle]
        //     setBookmarkList(newBookmarkList);
        // }
    }
    return (
        <div className='wisdom-container flex justify-center gap-3'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    addTime = {addTime}
                    addBookmark = {addBookmark}
                    ></Blog>)
                }
            </div>
            <div className='bookmarked-container p-2'>
                <Time timeTotal = {time} ></Time>
                <br />
                <Bookmarked bookmarkList = {bookmarkList}></Bookmarked>
            </div>
        </div>
    );
};

export default Wisdom;