import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = ({children}) => {
    return (
        <Link to="/login" className="p-4 bg-orange flex items-center rounded-md flex justify-center" style={{
            width: '260px',
            height: '50px'
        }}>
            <h3 className="text-md text-purple-dark">Start for free {">>"}</h3>

        </Link>
    );
}
 
export default LoginButton;