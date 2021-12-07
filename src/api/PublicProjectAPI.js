
const PublicProjectAPI = {
    getAll: async (token) => {
        return await fetch(process.env.REACT_APP_API_URL + 'user/publicprojects', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        }).then(res => res.json()).catch(e => console.log(e))
    },
    makeProjectPublic: async (token, { project_id }) => {
        return await fetch(process.env.REACT_APP_API_URL + 'user/publicprojects/share', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                project_id: project_id
            })
        }).then(res => res.json()).catch(e => console.log(e))
    },
    copyPublicProject: async (token, { public_project_id }) => {
        return await fetch(process.env.REACT_APP_API_URL + `user/publicprojects/${public_project_id}/add`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        }).then(res => res.json()).catch(e => console.log(e))
    }
}
export default PublicProjectAPI