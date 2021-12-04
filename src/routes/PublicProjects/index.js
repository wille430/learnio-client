import SideNav from 'components/SideNav';
import React from 'react';
import PublicProjectsTable from './PublicProjectsTable';

const PublicProjects = () => {
    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                <PublicProjectsTable />
            </main>
        </div>
    );
}

export default PublicProjects;