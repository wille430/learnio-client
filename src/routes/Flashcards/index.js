import Container from "components/Container"
import SideNav from "components/SideNav"
import { useParams } from "react-router"
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button"
import { Box } from "@mui/system"
import AddFlashcardButton from "./AddFlashcardButton"
import FlashcardTable from "./FlashcardTable"
import BackButton from "components/BackButton";

const Flashcards = () => {
    const { project_id } = useParams()

    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                <Container>
                    <BackButton to={`/project/${project_id}`}/>
                    <h1 className="text-purple pb-4">Flashcards</h1>
                    <div style={{
                        height: "500px",
                        position: "relative"
                    }}>
                        <FlashcardTable />
                        <AddFlashcardButton />
                    </div>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        paddingTop: '1rem'
                    }}>
                        <Link to={`/project/${project_id}/flashcards/queue`}>
                            <Button variant="contained" color="primary">Learn flashcards</Button>
                        </Link>
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default Flashcards