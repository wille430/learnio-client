import Container from 'components/Container';
import { UserContext } from 'Context/UserContext';
import { useContext, useState, useEffect } from 'react';
import techniqueData from 'data/techniques'
import ProjectAPI from 'api/ProjectAPI';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button';
import { TiTrash, TiPlus, TiWorld } from "react-icons/ti"
import { useHistory } from 'react-router';
import PublicProjectAPI from 'api/PublicProjectAPI';

const MyCourses = () => {

    const { token } = useContext(UserContext)
    const [rows, setRows] = useState([])
    const [selectedProjects, setSelectedProjects] = useState([])

    const history = useHistory()

    const columns = [
        {
            field: 'projectTitle', headerName: 'Project Title', width: 200, renderCell: (params) => {
                return (
                    <Link to={"/project/" + params.id}>
                        {params.value}
                    </Link>
                )
            }
        },
        { field: 'techniques', headerName: 'Techniques', width: 130 },
        { field: 'deadline', headerName: 'End Date', width: 150 },
        { field: 'flashcards', headerName: 'Flashcards' }
    ]

    useEffect(() => {
        getRows()
        // eslint-disable-next-line 
    }, [])

    const getRows = async () => {
        const projects = await ProjectAPI.getAll(token)

        setRows(projects.map(project => {
            return ({
                id: project._id,
                projectTitle: project.title,
                techniques: project.selectedTechniques.map(x => techniqueData.find(y => y.value === x)?.shorthand).join(' '),
                deadline: project.deadline,
                flashcards: project.techniques.flashcards?.length
            })
        }))
    }

    const handleDelete = async () => {
        const deletedProjects = []
        for (const project_id of selectedProjects) {
            try {
                await ProjectAPI.delete(token, { project_id })
                deletedProjects.push(project_id)
            } catch (e) {
                throw new Error(`Could not remove project with id ${project_id}`)
            }
        }

        let newProjects = rows

        deletedProjects.forEach((project_id) => {
            newProjects = newProjects.filter(project => project.id !== project_id)
        })

        setRows(newProjects)
    }

    const handleCellClick = (params, event) => {
        event.defaultMuiPrevented = true
        if (event.columnHeaderClick) {
            history.push("/create-project")
        }
    }

    const handleMakePublic = async () => {
        selectedProjects.forEach(async selectedProject => {
            await PublicProjectAPI.makeProjectPublic(token, { project_id: selectedProject })
        })
    }

    return (
        <section className="flex-grow">
            <h1 className="text-purple mb-12">Dashboard</h1>
            <Container>
                <h2 className="text-purple">My courses</h2>
                <div className="pb-2" style={{
                    height: '500px'
                }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        checkboxSelection
                        onSelectionModelChange={setSelectedProjects}
                        onCellClick={handleCellClick}
                        components={{
                            NoRowsOverlay: () => (
                                <div className="stack text-gray-500">
                                    <Link to="/create-project">
                                        <Button variant="text" color="inherit" endIcon={<TiPlus />}>Create a project</Button>
                                    </Link>
                                </div>
                            )
                        }}
                    />
                </div>
                <div className="space-x-2">
                    {<Button onClick={handleDelete} variant="outlined" color="error" startIcon={<TiTrash />} disabled={selectedProjects.length === 0}>Delete</Button>}
                    {<Button onClick={handleMakePublic} variant="contained" color="primary" startIcon={<TiWorld />} disabled={selectedProjects.length === 0}>Make public</Button>}
                </div>
            </Container>
        </section>
    );
}

export default MyCourses;