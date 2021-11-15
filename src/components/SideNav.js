import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton';

const SideNav = () => {

    return (
        <aside className="h-screen sticky bg-purple shadow-sm p-5 text-white space-y-1 pt-8 top-0" style={{
            width: '215px'
        }}>
            <h3>Navbar</h3>
            <ul className="flex flex-col space-y-2 pl-4">
                <Link to="/"><li>Courses +</li></Link>
                <Link to="/create-project"><li>Create course</li></Link>
                <Link to="/techniques"><li>Techniques</li></Link>
                <LogOutButton />
            </ul>
        </aside>
    );
}

export default SideNav;