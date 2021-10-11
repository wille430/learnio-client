import React from 'react';

const Footer = () => {
    return (
        <div className="h bg-purple flex-col p-8" style={{
            height: '300px'
        }}>
            <div className="w-100 h-4/5 flex justify-evenly">
                <div>
                    <h2 className="text-white">learn.io</h2>
                </div>
                <div>
                    <h2 className="text-white">Company</h2>
                    <p className="text-white text-xs m-1">About us</p>
                    <p className="text-white text-xs m-1">Legal</p>
                </div>
                <div>
                    <h2 className="text-white">Resources</h2>
                    <p className="text-white text-xs m-1">Github</p>
                </div>
                <div>
                    <h2 className="text-white">Contact Us</h2>
                    <p className="text-white text-xs m-1">Twitter</p>
                    <p className="text-white text-xs m-1">learnio@gmail.com</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-100 h-1/5 text-white text-xs">© Copyright learion.io Inc 2021. All rights reserved.</div>
            </div>
        </div>
    );
}
export default Footer;