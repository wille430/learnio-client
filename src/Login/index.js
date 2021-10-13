import Footer from 'components/Footer';
import FormInput from 'components/FormInput';
import { UserContext } from 'Context/UserContext';
import React, { useContext, useState } from 'react';

const Login = () => {

    const { logIn } = useContext(UserContext)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [usernameError, setUsernameError] = useState()
    const [passwordError, setPasswordError] = useState()

    const onFormSubmit = (e) => {
        e.preventDefault()
        logIn({username, password}).then(res => {
            if (!res) return
            console.log(res)
            setUsernameError(res.find(error => error.param === "username")?.msg)
            setPasswordError(res.find(error => error.param === "password")?.msg)
        })
    }

    return (
        <div>
            <main className="h-screen w-full flex justify-center items-center">
                <section className="bg-purple">
                    <form className="flex flex-col p-4 pb-8" onSubmit={onFormSubmit}>
                        <FormInput
                            value={username}
                            label="Username"
                            name="username"
                            onChange={e => setUsername(e.currentTarget.value)}
                            errorMessage={usernameError}
                        />
                        <FormInput
                            value={password}
                            label="Password"
                            name="password"
                            type="password"
                            onChange={e => setPassword(e.currentTarget.value)}
                            errorMessage={passwordError}
                        />
                        <button type="submit">Login</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Login;