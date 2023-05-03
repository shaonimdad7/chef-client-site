import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div >
                <h1 className='blog_header'>Some Answers of the Questions which are very important in ReactJs</h1>
                <div className='blog_element'>
                    <h2 className='mb-4'>What is the differences between uncontrolled and controlled components...?</h2>
                    <p>In React the Context API is a feature that allows data to be passed down the component without using props manually at every level. It helps us to pass the data and state in a React application efficiently and it is a better way of managing data. <br />
                        One unique aspect of the Context API is that it allows the creation of a context object, which can be used to store and share data between components. This context object can be created using the createContext() method provided by React.
                    </p>
                    <hr />
                </div>
                <div className='blog_element'>
                    <h2>What is custom hook in ReactJs</h2>
                    <p>In React, a custom hook is a function that allows developers to reuse stateful logic between different components. It is a way to extract commonly used functionality into a module, making it easier to manage and maintain the code.<br />
                        Custom hooks are also useful because they allow developers to encapsulate complex functionality into a single, easy-to-use function. This can help to reduce the complexity of components and make them more readable and maintainable.
                    </p>

                    <hr />
                </div>
                <div className='blog_element'>
                    <h2>Where is useRef used in ReactJs</h2>
                    <p>In React, the useRef hook is used to create a mutable reference that persists across renders and can be used to access and manipulate DOM elements, store values, or cache functions. The useRef hook is a flexible and powerful tool that can be used in a variety of ways within a React application.<br />
                        One unique aspect of useRef is its ability to reference DOM elements. When a ref is attached to a DOM element, it allows the component to interact with the element directly, for example, setting the focus or measuring its size.
                    </p>
                    <hr />
                </div>
                <div className='blog_element'>
                    <h2>Where useMemo is used in ReactJs</h2>
                    <p>In React, the useMemo hook is used to memoize the results of a function call, so that it only re-computes when the dependencies have changed. The useMemo hook is a useful optimization technique that can improve the performance of a React application by reducing the amount of unnecessary computation.<br />
                        One common use case for useMemo is to avoid expensive calculations that donot need to be re-computed on every render. For example, if a component needs to render a list of items based on a complex calculation, useMemo can be used to memoize the results of the calculation and only re-compute it when the underlying data changes.
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Blog;