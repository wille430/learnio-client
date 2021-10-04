import React from 'react';
import Logo from './Logo';

const NavBar = () => {
    return (
        <div className="w-full m-0 p-4 bg-purple">
            <ul className="flex space-x-2">
                <Logo />
            </ul>
        </div>
    );
}

export default NavBar;