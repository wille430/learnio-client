import Container from 'components/Container';
import { UserContext } from 'Context/UserContext';
import { useContext, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material';
import PublicProjectAPI from 'api/PublicProjectAPI';
import { FiPlus } from 'react-icons/fi';

const PublicProjectsTable = () => {

    const { token } = useContext(UserContext)
    const [rows, setRows] = useState([])

    const columns = [
        { field: 'projectTitle', headerName: 'Project Title', width: 400 },
        { field: 'owner', headerName: 'Created By', width: 250 },
        {
            field: 'addToProject',
            headerName: 'Add to projects',
            sortable: false,
            width: 150,
            renderCell: (params) => {

                const handleClick = async () => {
                    await PublicProjectAPI.copyPublicProject(token, { public_project_id: params.row.id })
                }

                return (
                    <div className="w-full flex justify-center">
                        <Button onClick={handleClick}><FiPlus /></Button>
                    </div>
                )
            }
        }
    ]

    useEffect(() => {
        getRows()
        // eslint-disable-next-line 
    }, [])

    const getRows = async () => {
        const projects = await PublicProjectAPI.getAll(token)

        setRows(projects.map(project => {
            return ({
                id: project._id,
                projectTitle: project.title,
                owner: project.owner
            })
        }))
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
                        components={{
                            NoRowsOverlay: () => (
                                <div className="stack text-gray-500">
                                    No public projects found
                                </div>
                            )
                        }}
                    />
                </div>
            </Container>
        </section >
    );
}

export default PublicProjectsTable;