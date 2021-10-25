import SideNav from 'components/SideNav';
import React from 'react';
import Footer from "components/Footer"
import Container from 'components/Container'


const Techniques = () => {
    return (
        <div>
            <main className="w-full min-h-screen bg-bg flex">
                <SideNav />
                <div className="w-full h-auto flex flex-col flex justify-center flex items-center mb-10">
                    <div className="flex items-center h-16">
                        <h1 className="mx-auto text-purple-dark text-4xl">Techniques</h1>
                    </div>
                    <div className="bg-white m-auto" style={{
                        width: '95%',
                        height: '90%'
                    }}>
                      
                        <div className="flex flex-col">
                         <Container>a</Container>
                         <Container>b</Container>
                         <Container>c</Container>
                        </div>
                    </div>
                </div>







            </main>
            <Footer />
        </div>
    );

}

export default Techniques;