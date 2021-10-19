import React, { useState } from 'react';
import SideNav from "components/SideNav";
import Container from "components/Container";
import FormInput from 'components/FormInput';
import UserAPI from 'api/UserAPI';
import useToken from 'Context/useToken';
import TechniqueList from './TechniqueList';
import initTechniques from 'data/techniques';

const CreateProject = () => {

    const [name, setName] = useState()
    const [nameError, setNameError] = useState()

    const [techniques, setTechniques] = useState(initTechniques)
    const [techniquesError, setTechniquesError] = useState()

    const { token } = useToken()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setNameError(null)
        UserAPI.createProject(token, {
            projectName: name,
            selectedTechniques: techniques.filter(x => x.selected === true).map(x => x.value)

        }).then(res => {
            if (res?.errors) {
                setNameError(res.errors.find(x => x.param === "name")?.msg)
                setTechniquesError(res.errors.find(x => x.param === "techniques")?.msg)
            }
        })
    }

    return (
        <main className="w-full min-h-screen bg-bg flex">
            <SideNav />
            <section className="flex-grow p-12">
                <h1 className="text-purple mb-12">Create a new project</h1>
                <Container>
                    <h2 className="text-purple">Project Info</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
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
                        <button className="p-2 bg-green-500 text-white rounded" type="submit">Add project</button>
                    </form>
                </Container>
            </section>
        </main>
    );
}

export default CreateProject;