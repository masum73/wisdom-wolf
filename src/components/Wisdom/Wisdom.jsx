import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
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
            <div className='blog-container w-9/12 flex flex-col justify-center items-center'>
                {
                    blogs.map(blog => <Blogs
                    key = {blog.id}
                    blog = {blog}
                    addTime = {addTime}
                    addBookmark = {addBookmark}
                    ></Blogs>)
                }
            </div>
            <div className='bookmarked-container p-2 w-1/4'>
                <Time timeTotal = {time} ></Time>
                <br />
                <Bookmarked bookmarkList = {bookmarkList}></Bookmarked>
            </div>
        </div>
    );
};

export default Wisdom;