import React, { useState } from 'react';
import SideNav from "components/SideNav";
import Container from "components/Container";
import FormInput from 'components/FormInput';
import ProjectAPI from 'api/ProjectAPI';
import useToken from 'Context/useToken';
import TechniqueList from './TechniqueList';
import initTechniques from 'data/techniques';
import AsyncButton from 'components/AsyncButton';
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const CreateProject = () => {

    const [name, setName] = useState()
    const [nameError, setNameError] = useState()

    const [techniques, setTechniques] = useState(initTechniques)
    const [techniquesError, setTechniquesError] = useState()
    const [showSnackbar, setShowSnackbar] = useState(false)

    const { token } = useToken()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setNameError(null)
        await ProjectAPI.create(token, {
            projectName: name,
            selectedTechniques: techniques.filter(x => x.selected === true).map(x => x.value)
        }).then(res => {
            if (res?.errors) {
                setNameError(res.errors.find(x => x.param === "name")?.msg)
                setTechniquesError(res.errors.find(x => x.param === "techniques")?.msg)
            } else {
                setShowSnackbar(true)
            }
        })
    }

    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                <section className="flex-grow p-12">
                    <h1 className="text-purple mb-12">Create a new project</h1>
                    <Container>
                        <h2 className="text-purple">Project Info</h2>
                        <form className="space-y-4">
                            <FormInput
                                label="Project name"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                style={{ maxWidth: "250px" }}
                                errorMessage={nameError}
                            />
                            <TechniqueList techniques={techniques} setTechniques={setTechniques} />
                            <span id="techniquesErrorText">{techniquesError}</span>
                            <AsyncButton className="p-2 bg-green-500 text-white rounded" type="submit" onClick={handleSubmit}>Add project</AsyncButton>
                        </form>
                    </Container>
                </section>
                <Snackbar open={showSnackbar} onClose={e => setShowSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert variant="filled" severity="success" >Project was created!</Alert>
                </Snackbar>
            </main>
        </div>
    );
}

export default CreateProject;