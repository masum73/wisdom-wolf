import React from 'react';
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <div className='flex flex-row justify-between items-center'>
                    <img className='w-10 rounded-full' src={authorImg} alt="" />
                    <div>
                        <h1>{authorName}</h1>
                        <p>{publishDate}</p>
                    </div>
                    <p>{readTime}</p>
                </div>

                <h2 className="card-title">{blogTitle}</h2>
                <div className="card-actions justify-start">
                    <a href="#">Mark as Read</a>
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default Blog;