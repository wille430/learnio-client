import { useState } from "react"

const useToken = () => {
    const saveToken = (userToken) => {
        sessionStorage.setItem('token', userToken)
        setToken(userToken)
    }

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token')
        return tokenString
    }

    const [token, setToken] = useState(getToken())

    return {
        setToken: saveToken,
        token
    }
}

export default useToken;