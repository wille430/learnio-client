import React from 'react';
import LoginButton from "./LoginButton";

const Banner = ({ children }) => {
    return (
        <section className="p-4 bg-purple" style={{
            width: '100%',
            height: '500px'
        }}>
            <div className="flex justify-center">
                <div className="w-auto flex-col flex items-center">
                    <h1 className="text-4xl text-white">The faster way to learn</h1>
                    <h2 className="text-2xl text-white">Easily use scientifically proven learning techniques</h2>
                    <LoginButton />
                </div>
            </div>

        </section>
    );
}

export default Banner;