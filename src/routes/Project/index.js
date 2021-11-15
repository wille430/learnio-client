import SideNav from 'components/SideNav';
import React, { useContext, useEffect, useState } from 'react';
import Footer from "components/Footer"
import TechniqueContainer from 'components/TechniqueContainer';
import { useParams } from 'react-router-dom';
import ProjectAPI from 'api/ProjectAPI';
import { UserContext } from 'Context/UserContext';


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

    }, [])

    return (
        <div>
            <main className="w-full min-h-screen bg-bg flex">
                <SideNav />
                <div className="w-full h-auto flex flex-col flex justify-center flex items-center mb-10">
                    <div className="flex items-center h-16">
                        <h1 className="mx-auto text-purple-dark text-4xl">Placeholder Technique</h1>
                    </div>
                    <div className="bg-white m-auto" style={{
                        width: '95%',
                        height: '90%'
                    }}>
                        <h2 className="text-left mt-4 ml-4 text-purple-dark text-3xl">Active Techniques</h2>
                        <div className="flex flex-col">
                            {project && project.techniques.spaced_repetition.map(technique =>(<TechniqueContainer/>))}
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );

}

export default Project;