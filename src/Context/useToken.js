import UserAPI from "api/UserAPI"
import { useEffect, useState } from "react"

const useToken = () => {

    const [token, setToken] = useState(null)

    const saveToken = (userToken) => {
        if (!userToken) {
            sessionStorage.removeItem('token')
            setToken(null)
        } else {
            console.log({ userToken })
            sessionStorage.setItem('token', userToken)
            setToken(userToken)
        }
    }

    const getToken = async () => {
        const userToken = sessionStorage.getItem('token')
        const isValidToken = await UserAPI.isValidToken(userToken)
        if (!isValidToken) return
        setToken(userToken)
    }

    useEffect(() => {
        getToken()
    }, [])

    return {
        setToken: saveToken,
        token
    }
}

export default useToken;