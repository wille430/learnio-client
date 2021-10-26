const UserAPI = {
    login: async ({ username, password }) => {
        const response = await fetch(process.env.REACT_APP_API_URL + 'user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(async res => {
            if (res.ok) {
                return await res.text()
            }
            return { errors: await res.json() }
        })
        return response
    },
    register: async ({ username, password, repassword }) => {
        const response = await fetch(process.env.REACT_APP_API_URL + 'user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, repassword })
        }).then(async res => {
            if (res.ok) {
                return await res.text()
            }
            return await { errors: await res.json() }
        })
        return response
    },
    isValidToken: async (token) => {
        try {
            if (!token) return false

            // Validate token in API
            const response = await fetch(process.env.REACT_APP_API_URL + 'user/validateToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token })
            })

            // Return true if valid
            if (response.status === 200) return true
            return false
        } catch (e) {
            console.log(e)
            return false
        }
    }, 
}

export default UserAPI