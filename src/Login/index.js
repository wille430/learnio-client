
import User from 'api/User';
import Footer from 'components/Footer';
import React, { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onFormSubmit = (e) => {
        e.preventDefault()
        User.login({username, password})
    }

    return (
        <div>
            <main className="h-screen w-full flex justify-center items-center">
                <section className="bg-purple">
                    <form className="flex flex-col p-4 pb-8" onSubmit={onFormSubmit}>
                        <label>Username</label>
                        <input value={username} onChange={e => setUsername(e.currentTarget.value)} />
                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.currentTarget.value)} />
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Login;