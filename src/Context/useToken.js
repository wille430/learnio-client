import { useState } from "react"

const useToken = () => {
    const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
    }

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.token
    }

    const [token, setToken] = useState(getToken())

    return {
        setToken: saveToken,
        token
    }
}

export default useToken;