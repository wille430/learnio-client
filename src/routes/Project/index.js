import SideNav from 'components/SideNav';
import React, { useContext, useEffect, useState } from 'react';
import TechniqueContainer from 'components/TechniqueContainer';
import { useParams } from 'react-router-dom';
import ProjectAPI from 'api/ProjectAPI';
import { UserContext } from 'Context/UserContext';
import techniqueData from 'data/techniques'


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
                {project && <div className="w-full h-auto flex flex-col justify-center items-center mb-10">
                    <div className="flex items-center h-16">
                        <h1 className="mx-auto text-purple-dark text-4xl">{project.title}</h1>
                    </div>
                    <div className="bg-white m-auto" style={{
                        width: '95%',
                        height: '90%'
                    }}>
                        <h2 className="text-left mt-4 ml-4 text-purple-dark text-3xl">Active Techniques</h2>
                        <div className="flex flex-col">
                            {project && project.techniques.flashcards && <TechniqueContainer url={`/project/${project_id}/flashcards`} title={"Flashcards"} description={techniqueData.find(x => x.value === "flashcards").usedTechniques.join(', ')}></TechniqueContainer>}
                        </div>
                    </div>
                </div>}
            </main>
        </div>
    );

}

export default Project;