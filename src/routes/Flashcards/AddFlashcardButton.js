import { Fab } from "@mui/material"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"

const AddFlashcardButton = () => {

    const { project_id } = useParams()

    return (
        <div className="absolute bottom-16 right-0 p-4">
            <Link to={`/project/${project_id}/flashcards/create`}>
                <Fab color="primary" aria-label="add">
                    <FiPlus size="32" />
                </Fab>
            </Link>
        </div>
    )
}

export default AddFlashcardButton