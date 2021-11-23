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
        return await fetch(process.env.REACT_APP_API_URL + 'user/projects/' + project_id, {
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
    delete: async (token, { project_id }) => {
        const response = await fetch(process.env.REACT_APP_API_URL + 'user/projects/' + project_id, {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })
        if (!response.ok) throw new Error("Could not delete project with id", project_id)
    },
    createFlashcard: async (token, { question, answer, project_id }) => {
        return await fetch(process.env.REACT_APP_API_URL + `user/projects/${project_id}/flashcards`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                question: question,
                answer: answer
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
    getFlashcards: async (token, { project_id }) => {
        const response = await fetch(process.env.REACT_APP_API_URL + `user/projects/${project_id}/flashcards`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })

        if (response.ok) {
            return await response.json()
        } else {
            return []
        }
    },
    completeFlashcard: async (token, { project_id, flashcard_id }) => {
        try {
            await fetch(process.env.REACT_APP_API_URL + `user/projects/${project_id}/flashcards/${flashcard_id}/complete`, {
                method: 'POST',
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                })
            })
        } catch (e) {
            throw new Error(e.message)
        }
    },
    getNext: async (token, { project_id }) => {
        try {
            return await fetch(process.env.REACT_APP_API_URL + `user/projects/${project_id}/flashcards/next`, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                })
            }).then((res) => res.json())
        } catch (e) {
            throw new Error(e.message)
        }
    }
}
export default ProjectAPI