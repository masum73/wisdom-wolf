import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from '../Blogs/Blogs';
import './Wisdom.css'
import Time from '../Time/Time';
import Bookmarked from '../Bookmarked/Bookmarked';
const Wisdom = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState(0);
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
        //    newBookmarkList = [...bookmarkList,blogTitle]
        //    setBookmarkList(newBookmarkList);
        const exists = bookmarkList.find(bl => bl === blogTitle)
        if (exists) {
            // const remaining = bookmarkList.filter(bl => bl !== blogTitle )
            // newBookmarkList = [...remaining];
            // setBookmarkList(newBookmarkList);
            // sweet alert / toast need to be shown
            toast.warn("You Have Already Bookmarked This Blog");

        } else {
            newBookmarkList = [...bookmarkList, blogTitle]
            setBookmarkList(newBookmarkList);
        }
    }
    return (
        <div className='wisdom-container w-full md:w-9/12 flex flex-col md:flex-row justify-center items-center md:items-start gap-3'>
            <div className='blog-container w-10/12 md:w-9/12 flex flex-col justify-center items-center'>
                {
                    blogs.map(blog => <Blogs
                        key={blog.id}
                        blog={blog}
                        addTime={addTime}
                        addBookmark={addBookmark}
                    ></Blogs>)
                }
            </div>
            <div className='bookmarked-container p-2 w-10/12 md:w-1/4 sticky top-0'>
                <Time timeTotal={time} ></Time>
                <br />
                <Bookmarked bookmarkList={bookmarkList}></Bookmarked>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"> </ToastContainer>
        </div>
    );
};

export default Wisdom;