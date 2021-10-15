import Footer from 'components/Footer';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import { UserContext } from 'Context/UserContext';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register } = useContext(UserContext)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [repassword, setRepassword] = useState()
    // const [email, setEmail] = useState()
    const [usernameError, setUsernameError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [repasswordError, setRepasswordError] = useState()
    // const [emailError, setEmailError] = useState()

    const onFormSubmit = (e) => {
        e.preventDefault()
        register({ username, password, repassword }).then(res => {
            if (!res.errors) return
            setUsernameError(res.errors.find(error => error.param === "username")?.msg)
            setPasswordError(res.errors.find(error => error.param === "password")?.msg)
            setRepasswordError(res.errors.find(error => error.param === "repassword")?.msg)
            // setEmailError(res.find(error => error.param === "email")?.msg)
        })
    }

    return (
        <div>
            <main className="h-screen w-full flex justify-center items-center">
                <Form buttonLabel="Register" onFormSubmit={onFormSubmit} bottomComponents={[
                    <Link className="text-sm" to="/login">Login with existing account</Link>
                ]}>
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
                    <FormInput
                        value={repassword}
                        label="Re-enter Password"
                        name="repassword"
                        type="password"
                        onChange={e => setRepassword(e.currentTarget.value)}
                        errorMessage={repasswordError}
                    />
                </Form>
            </main>
            <Footer />
        </div>
    );
}

export default Register;