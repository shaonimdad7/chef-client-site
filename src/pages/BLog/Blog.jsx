import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div >
                <h1 className='blog_header'>Some Answers of the Questions which are very important in ReactJs</h1>
                <div className='blog_element'>
                    <h2 className='mb-4'>What is the differences between uncontrolled and controlled components...?</h2>
                    <p>In React, Controlled components means The components that have their state and behavior controlled by the parent component is called Controlled components. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. <br />
                        The component that its current value and update callback via props is called a Controlled functional component, we can say that a simple form that accepts an email address and a password is under uncontrolled components.
                    </p>
                    <hr />
                </div>
                <div className='blog_element'>
                    <h2>How to validate React props using PropTypes</h2>
                    <p>
                        When we work on develping site you will nedd to sturcture and define our props to avoid bugs and errors, a React component might require a prop to be defined, otherwise, it will not render properly.
                        We can use React props to send data from one component to another one, if it gets the wrong type of props, it can cause bugs and unexpected errors in our app.React has an internal mechanism for props validation called PropTypes.
                    </p>

                    <hr />
                </div>
                <div className='blog_element '>
                    <h2 className='mb-4'>What is us the difference between nodejs and express js..?</h2>
                    <p>If a developer excutes JavaScript code outside of a browser,here is Node.js is an open source and cross-platform runtime environment . Many think that Node.js is a frameworl but a developer needs to remember that NodeJS is not a framework and it is not a programming language.<br />
                        To add helpful and wonderful features and simplify its APIs, Express is a small framework that sits on top of Node.js web server functionality. It helps a develpoer to make it easier to organize his applications functionality with middle ware and routing.
                    </p>
                    <hr />
                </div>
                <div className='blog_element'>
                    <h2>What is a custom hook, and why will you create a custom hook...?</h2>
                    <p>
                        Custom hook is created to reuse it easily, and it makes the code more cleaner and reduces the time to write the code. It also help to enhance the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.  <br />
                        One common use case for custom hook is to avoid expensive calculations that donot need to be re-computed on every render. For example, if a component needs to render a list of items based on a complex calculation, custom hook can be used to memoize the results of the calculation and only re-compute it when the underlying data changes.
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Blog;