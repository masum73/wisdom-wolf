import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';
import './Blogs.css'
const Blogs = (props) => {
    const { img, blogTitle, authorName, publishDate, authorImg, readTime } = props.blog;
    const addTime = props.addTime;
    const addBookmark = props.addBookmark;
    console.log(props.blog);
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl m-2">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row justify-start items-center'>
                        <img className='w-10 rounded-full mr-2' src={authorImg} alt="" />
                        <div>
                            <h1 className='text-md font-bold'>{authorName}</h1>
                            <p>{publishDate}</p>
                        </div>
                    </div>
                    <div>
                        <p>{readTime} min read <FontAwesomeIcon onClick={() =>addBookmark(blogTitle)} icon={faBookmark}/></p>
                    </div>
                </div>
                <h2 className="card-title">{blogTitle}</h2>
                <div className="card-actions justify-start">
                    <p className='btn-read' onClick={()=>addTime(readTime)}>Mark as read</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;