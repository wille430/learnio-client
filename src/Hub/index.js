import Container from 'components/Container';
import SideNav from 'components/SideNav';
import React from 'react';

const Hub = () => {
    return (
        <main className="w-full min-h-screen bg-bg flex">
            <SideNav/>
            <section className="flex-grow p-12">
                <h1 className="text-purple mb-12">Create a new project</h1>
                <Container>
                    <h2 className="text-purple">Project Info</h2>
                </Container>
            </section>
        </main>
    );
}
 
export default Hub;