import React from 'react';

const Container = ({ children, className }) => {
    return (
        <div className={"p-4 bg-white rounded-md shadow-md " + className}>
            {children}
        </div>
    );
}
 
export default Container;