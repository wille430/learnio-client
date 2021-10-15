// import UserAPI from "api/UserAPI"
import { useEffect, useState } from "react"

const useToken = () => {

const getToken = () => {
        const userToken = sessionStorage.getItem('token')
        // const isValidToken = await UserAPI.isValidToken(userToken)
        // if (!isValidToken) return
        // setToken(userToken)
        return userToken
    }

    const [token, setToken] = useState(getToken())

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


    useEffect(() => {
        getToken()
    }, [])

    return {
        setToken: saveToken,
        token
    }
}

export default useToken;