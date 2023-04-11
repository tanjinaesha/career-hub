import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>a. When should you use context API?</h1>
            <p>Context Api is used when some of the dataset needs to be accessible by lot of components at different nesting levels.</p>
            <h1>What is a custom hook?</h1>
            <p>A custom Hook is a JavaScript function which may call other Hooks.</p>
            <h1>What is useRef?</h1>
            <p>The useRef Hook allows us to persist  some values between the renders</p>
            <h1>What is useMemo?</h1>

        <p>useMemo is a function which returns a  value of which is memorized a passed in resource-intensive function. </p>
        </div>
    );
};

export default Blog;