
const User = {
    login: async ({ username, password }) => {
        const response = await fetch('http://api.learnio.ml/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.text())
        console.log(response)
    },
    register: async ({ username, password }) => {
        const response = await fetch('http://api.learnio.ml/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { username, password }
        }).then(res => res.text())
        console.log(response)
    }

}

export default User