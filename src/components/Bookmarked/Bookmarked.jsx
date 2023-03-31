import React from 'react';

const Bookmarked = (props) => {
    const bookmarkeds = props.bookmarkList;
    return (
        <div className='bg-secondary p-3 w-full border rounded-md'>
            <h1 className='text-md font-bold'>Bookmarked Blogs: {bookmarkeds.length}</h1>
            {
                bookmarkeds.map((bookmarked,index)=> <div key={index} className='p-3 bg-white m-3 border rounded-md'><p>{bookmarked}</p></div> )
            }
        </div>
    );
};

export default Bookmarked;