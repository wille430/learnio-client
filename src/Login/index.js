import Footer from 'components/Footer';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import { UserContext } from 'Context/UserContext';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const { logIn } = useContext(UserContext)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [usernameError, setUsernameError] = useState()
    const [passwordError, setPasswordError] = useState()

    const onFormSubmit = (e) => {
        e.preventDefault()
        logIn({ username, password }).then(res => {
            if (res.errors) {
                setUsernameError(res.errors.find(error => error.param === "username")?.msg)
                setPasswordError(res.errors.find(error => error.param === "password")?.msg)
            }
        })
    }

    return (
        <div>
            <main className="h-screen w-full flex justify-center items-center">
                <Form buttonLabel="Login" onFormSubmit={onFormSubmit} bottomComponents={[
                    <Link className="text-sm" to="/register">Create an account</Link>
                ]}>
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
                </Form>
            </main>
            <Footer />
        </div>
    );
}

export default Login;