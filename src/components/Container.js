import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="p-4 bg-white rounded-md shadow-md">
            {children}
        </div>
    );
}
 
export default Container;