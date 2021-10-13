import React, { createContext, useState } from 'react';
import useToken from './useToken';

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const { token, setToken } = useToken()

    const [user, setUser] = useState({

    })

    const logIn = async ({username, password}) => {
        const response = await fetch('http://api.learnio.ml/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(async res => {
            if (res.ok) {
                setToken(await res.text())
                return null
            }
            return await res.json()
        })
        return response
    }

    const logOut = () => {
        setUser()
        setToken()
    }

    const register = async ({username, password}) => {
        const response = await fetch('http://api.learnio.ml/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(async res => {
            if (res.ok) {
                setToken(await res.text())
                return null
            }
            return await res.json()
        })
        return response
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