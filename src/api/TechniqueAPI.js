const TechniqueAPI = {
    createFlashcard: async (token,{question, answer, project_id, technique_id}) => {
        return await fetch(process.env.REACT_APP_API_URL + `user/${project_id}/${technique_id}/active_recall`, {
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
    }
}

export default TechniqueAPI