import React from 'react';

const Time = (props) => {
    return (
        <div className='bg-accent p-3 w-full border rounded-md text-md font-bold text-purple-600'>
            <h1>Spent time on read: {props.timeTotal} min</h1>
        </div>
    );
};

export default Time;