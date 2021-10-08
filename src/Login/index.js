import React, { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log({ username, password })
    }

    return (
        <main className="h-full w-full flex justify-center items-center">
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
    );
}

export default Login;