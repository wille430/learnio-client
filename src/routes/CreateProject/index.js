import React, { useState } from 'react';
import SideNav from "components/SideNav";
import Container from "components/Container";
import FormInput from 'components/FormInput';
import ProjectAPI from 'api/ProjectAPI';
import useToken from 'Context/useToken';
import TechniqueList from './TechniqueList';
import initTechniques from 'data/techniques';
import AsyncButton from 'components/AsyncButton';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateProject = () => {

    const [name, setName] = useState()
    const [nameError, setNameError] = useState()

    const techniqueState = initTechniques.map(x => ({
        name: x.name,
        value: x.value,
        selected: false
    }))


    const [techniques, setTechniques] = useState(techniqueState)
    const [techniquesError, setTechniquesError] = useState()
    const [showSnackbar, setShowSnackbar] = useState(false)

    const { token } = useToken()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setNameError(null)
        await ProjectAPI.create(token, {
            projectName: name,
            selectedTechniques: techniques.filter(technique => technique.selected === true).map(x => x.value)
        }).then(res => {
            if (res?.errors) {
                setNameError(res.errors.find(x => x.param === "title")?.msg)
                setTechniquesError(res.errors.find(x => x.param === "selectedTechniques")?.msg)
            } else {
                setShowSnackbar(true)
            }
        })
    }

    const [startdate, setStartDate] = useState(new Date());
       
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
                            <TechniqueList state={[techniques, setTechniques]} errorMessage={techniquesError} />
                            <AsyncButton className="p-2 bg-green-500 text-white rounded" type="submit" onClick={handleSubmit}>Add project</AsyncButton>
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
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