import { FiPlus } from "react-icons/fi"
import ProjectAPI from "api/ProjectAPI"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import useToken from "Context/useToken"
import { useParams } from "react-router"
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button"


const FlashcardTable = () => {
    const { token } = useToken()
    const { project_id } = useParams()

    const [rows, setRows] = useState([])

    const columns = [
        { field: 'question', headerName: 'Question', width: 300 },
        { field: 'nextAnswer', headerName: 'Due', width: 250 },
        { field: 'answer', headerName: 'Answer', width: 200 },
        { field: 'stage', headerName: 'Stage' }
    ]

    useEffect(() => {
        const getFlashcards = async () => {
            const flashcards = await ProjectAPI.getFlashcards(token, { project_id })

            setRows(flashcards.map(x => ({
                id: x._id,
                question: x.question,
                nextAnswer: new Date(x.nextAnswer).toDateString(),
                stage: x.stage
            })))
        }
        getFlashcards()
        // eslint-disable-next-line
    }, [])

    return (
        <DataGrid
            columns={columns}
            rows={rows}
            components={{
                NoRowsOverlay: () => (
                    <div className="stack text-gray-500">
                        <Link to={`/project/${project_id}/flashcards/create`}>
                            <Button variant="text" color="inherit" endIcon={<FiPlus />}>Add flashcards</Button>
                        </Link>
                    </div>
                )
            }}
        />
    )
}

export default FlashcardTable