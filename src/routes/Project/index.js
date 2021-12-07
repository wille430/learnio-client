import SideNav from 'components/SideNav';
import React, { useContext, useEffect, useState } from 'react';
import TechniqueContainer from 'components/TechniqueContainer';
import { useParams } from 'react-router-dom';
import ProjectAPI from 'api/ProjectAPI';
import { UserContext } from 'Context/UserContext';
import techniqueData from 'data/techniques'
import Container from 'components/Container';


const Project = () => {
    const { project_id } = useParams()
    const token = useContext(UserContext).token
    const [project, setProject] = useState()

    useEffect(() => {
        const getProject = async () => {
            const project = await ProjectAPI.getOne(token, project_id)
            setProject(project)
        }
        getProject()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                {project && <Container>
                    <h1 className="text-purple pb-4">Active study techniques</h1>
                    {project?.techniques?.flashcards && <TechniqueContainer
                        url={`/project/${project_id}/flashcards`}
                        title={"Flashcards"}
                        description={techniqueData.find(x => x.value === "flashcards").usedTechniques.join(', ')}
                        infoText={techniqueData.find(x => x.value === "flashcards").description}
                    />}
                </Container>}
            </main>
        </div>
    );

}

export default Project;