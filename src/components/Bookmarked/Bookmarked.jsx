import React from 'react';

const Bookmarked = (props) => {
    const bookmarkeds = props.bookmarkList;
    return (
        <div className='bg-secondary p-3 w-full border rounded-md'>
            <h1>Bookmarked Blogs: {bookmarkeds.length}</h1>
            {
                bookmarkeds.map((bookmarked)=> <div className='p-3 bg-white m-3 border rounded-md'><p>{bookmarked}</p></div> )
            }
        </div>
    );
};

export default Bookmarked;