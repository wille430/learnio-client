import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="p-2.5 m-2 bg-white rounded-md shadow">
            {children}
        </div>
    );
}
 
export default Container;