
const User = {
    login: async ({ username, password }) => {
        const response = await fetch('http://api.learnio.ml/user/login', {
            method: 'POST',
            body: { username, password }
        }).then(res => res.text())
        console.log(response)
    }

}

export default User