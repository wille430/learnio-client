import SideNav from 'components/SideNav';
import React from 'react';
import MyCourses from './MyCourses';

const Hub = () => {
    return (
        <main className="w-full min-h-screen bg-bg flex">
            <SideNav />
            <MyCourses/>
        </main>
    );
}

export default Hub;