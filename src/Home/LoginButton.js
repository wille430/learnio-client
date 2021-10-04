import React from 'react';

const LoginButton = ({children}) => {
    return (
        <section className="p-4 bg-orange flex items-center rounded-md flex justify-center" style={{
            width: '260px',
            height: '50px'
        }}>
            <h3 className="text-md text-purple-dark">Start for free {">>"}</h3>

        </section>
    );
}
 
export default LoginButton;