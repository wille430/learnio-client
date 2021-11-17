import Container from 'components/Container';
import Table from 'components/Table';
import { UserContext } from 'Context/UserContext';
import { useContext, useState, useEffect } from 'react';
import techniqueData from 'data/techniques'
import ProjectAPI from 'api/ProjectAPI';
import { Link } from 'react-router-dom';

const MyCourses = () => {

    const { token } = useContext(UserContext)
    const [rows, setRows] = useState([])

    useEffect(() => {
        getRows() 
        // eslint-disable-next-line 
    }, [])

    const getRows = async () => {
        const projects = await ProjectAPI.getAll(token)
        
        setRows(projects.map(project => {
            return (
                <tr>
                    <td className="text-center">O</td>
                    <td> <Link to={"/project/" + project._id}>{project.title} </Link></td>
                    <td className="truncate"></td>
                    <td>{project.selectedTechniques.map(x => techniqueData.find(y => y.value === x)?.shorthand).join(' ')}</td>
                    <td>{project.deadline || <span className="text-sm text-gray-400">No deadline</span>}</td>
                    <td className="text-center">...</td>
                </tr>
               
            )
        }))
    }

    return (
        <section className="flex-grow p-12">
            <h1 className="text-purple mb-12">Dashboard</h1>
            <Container>
                <h2 className="text-purple">My courses</h2>
                <Table headers={["", "Course Name", "Description", "Active Techniques", "Deadline", ""]}>
                    {rows}
                </Table>
            </Container>
        </section>
    );
}

export default MyCourses;