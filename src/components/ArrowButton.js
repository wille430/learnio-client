import React from 'react';
const ArrowButton = ({ ...props }) => {
    return (
        <button className="text-lg mx-auto text-gray-600" {...props}>
            <span>➤</span>
        </button>
    );
}


export default ArrowButton;