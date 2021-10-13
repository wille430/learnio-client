import Footer from 'components/Footer';
import FormInput from 'components/FormInput';
import { UserContext } from 'Context/UserContext';
import React, { useContext, useState } from 'react';

const Register = () => {

    const { register } = useContext(UserContext)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    // const [email, setEmail] = useState()
    const [usernameError, setUsernameError] = useState()
    const [passwordError, setPasswordError] = useState()
    // const [emailError, setEmailError] = useState()

    const onFormSubmit = (e) => {
        e.preventDefault()
        register({username, password}).then(res => {
            if (!res) return
            console.log(res)
            setUsernameError(res.find(error => error.param === "username")?.msg)
            setPasswordError(res.find(error => error.param === "password")?.msg)
            // setEmailError(res.find(error => error.param === "email")?.msg)
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
                        {/* <FormInput
                            value={email}
                            label="E-mail"
                            name="email"
                            onChange={e => setEmail(e.currentTarget.value)}
                            errorMessage={emailError}
                        /> */}
                        <FormInput
                            value={password}
                            label="Password"
                            name="password"
                            type="password"
                            onChange={e => setPassword(e.currentTarget.value)}
                            errorMessage={passwordError}
                        />
                        <button type="submit">Register</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Register;