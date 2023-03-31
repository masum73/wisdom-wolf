import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';
import './Blog.css'
const Blog = (props) => {
    const { img, blogTitle, authorName, publishDate, authorImg, readTime } = props.blog;
    console.log(props.blog);
    return (
        // <div>
        //     <img className='w-64' src={img} alt="" />
        //     <img src={authorImg} alt="" />
        //     <p className='bg-primary'>{authorName}</p>
        //     <p>{publishDate}</p>
        //     <p>{readTime}</p>
        //     <h1>{blogTitle}</h1>
        //     <a href="#">Mark as Read</a>
        // </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-2">
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
                        <p>{readTime} <FontAwesomeIcon icon={faBookmark}/></p>
                    </div>
                </div>
                <h2 className="card-title">{blogTitle}</h2>
                <div className="card-actions justify-start">
                    <button className='btn btn-secondary'>Mark as Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;