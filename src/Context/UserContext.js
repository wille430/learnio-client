import UserAPI from 'api/UserAPI';
import React, { createContext, useState } from 'react';
import useToken from './useToken';

export const UserContext = createContext()

export const UserProvider = ({ children }) => {



    const { token, setToken } = useToken()

    const [user, setUser] = useState({

    })

    const logIn = async ({ username, password }) => {
        return await UserAPI.login({ username, password }).then(res => {
            if (!res.errors) setToken(res)
            return res
        })
    }

    const logOut = () => {
        setUser()
        setToken()
    }

    const register = async ({ username, password, repassword }) => {
        return await UserAPI.register({username, password, repassword}).then(res => {
            if (!res.errors) setToken(res)
            return res
        })
    }

    return (
        <UserContext.Provider value={{
            token,
            user,
            logIn,
            logOut,
            register
        }}>
            {children}
        </UserContext.Provider>
    );
}