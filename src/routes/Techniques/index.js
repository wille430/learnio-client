import SideNav from 'components/SideNav';
import React from 'react';
import Footer from "components/Footer"

const Techniques = () => {
    return (
        <div>
            <main className="w-full min-h-screen bg-bg flex">
                <SideNav />
                <div className="w-full h-auto flex flex-col justify-center">
                    <h2>Techniques</h2>
                    <div className="bg-white m-auto" style={{
                        width: '95%',
                        height: '90%'
                    }}>


                    </div>


                </div>






            </main>
            <Footer />
        </div>
    );

}

export default Techniques;