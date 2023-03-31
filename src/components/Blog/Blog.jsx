import React from 'react';

const Blog = () => {
    const questions = [
        {
            id: 1,
            question: 'Props VS State',
            answer: 'Props are used to communicate between components and State can used to display changes with the component. Props are read only and cannot be changed and State can be changed.'
        },
        {
            id: 2,
            question: 'How does useState work?',
            answer: 'useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.'
        },
        {
            id: 3,
            question: 'Purpose of useEffect other than fetching data',
            answer: 'Validating an input while it is receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.'
        },
        {
            id: 4,
            question: 'How Does React work?',
            answer: 'ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It is possible to have as many components as necessary without cluttering your code.'
        }
    ]
    return (
        <div className='flex flex-col justify-center items-center mt-3'>
            {
                questions.map(q => {
                    return (<div key={q.id} className="w-1/3 collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-2">
                        <div className="collapse-title text-xl font-medium">
                            {q.question}
                        </div>
                        <div className="collapse-content">
                            <p>{q.answer}</p>
                        </div>
                    </div>)
                })
            }

        </div>
    );
};

export default Blog;