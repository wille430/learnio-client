import React, { createContext, useState } from 'react';
import useToken from './useToken';

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const { token, setToken } = useToken()

    const [user, setUser] = useState({

    })

    const logIn = ({username, pwd}) => {
        // Check database for correct username and password
        if ((username === "username" && pwd === "password")) return false

        // Authenticate if matching
        setToken('token123')
    }

    const logOut = () => {
        setUser()
        setToken()
    }

    return (
        <UserContext.Provider value={{
            token,
            user,
            logIn,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    );
}