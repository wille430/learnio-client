const ProjectAPI = {
    create: async (token, { projectName, selectedTechniques }) => {
        return await fetch(process.env.REACT_APP_API_URL + 'user/projects', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                title: projectName,
                selectedTechniques: selectedTechniques
            })
        }).then(async res => {
            if (res.ok) {
                return await res.text()
            } else {
                let errors = []
                try {
                    errors = await res.json()
                } catch (e) { console.log(e) }
                return {
                    errors
                }
            }
        }).catch(e => console.log(e))
    },
    getAll: async (token) => {
        return await fetch(process.env.REACT_APP_API_URL + 'user/projects', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        }).then(async res => {
            if (res.ok) {
                return await res.json()
            } else {
                let errors = []
                try {
                    errors = await res.json()
                } catch (e) { console.log(e) }
                return {
                    errors
                }
            }
        }).catch(e => console.log(e))
    },
    getOne: async (token, project_id) => {
        return await fetch(process.env.REACT_APP_API_URL + 'user/projects/' + project_id , {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        }).then(async res => {
            if (res.ok) {
                return await res.json()
            } else {
                let errors = []
                try {
                    errors = await res.json()
                } catch (e) { console.log(e) }
                return {
                    errors
                }
            }
        }).catch(e => console.log(e))
    },
    delete: async (token, {project_id}) => {
        const response = await fetch(process.env.REACT_APP_API_URL,{
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })

        return await response.json()
            



    }
}
export default ProjectAPI