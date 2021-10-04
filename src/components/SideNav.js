import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {

    return (
        <aside className="h-screen sticky bg-purple shadow-sm p-5 text-white space-y-1 pt-8" style={{
            width: '215px'
        }}>
            <h3>Navbar</h3>
            <ul className="flex flex-col space-y-2 pl-4">
                <li>Courses +</li>
                <Link to="/create-course"><li>Create course</li></Link>
                <Link to="#"><li>Techniques</li></Link>
            </ul>
        </aside>
    );
}

export default SideNav;