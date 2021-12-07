import SideNav from 'components/SideNav';
import React from 'react';
import MyCourses from './MyCourses';

const Hub = () => {
    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                <MyCourses />
            </main>
        </div>
    );
}

export default Hub;