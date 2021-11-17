import SideNav from 'components/SideNav';
import { useParams } from 'react-router'
import Container from 'components/Container';
import BackButton from 'components/BackButton';
import AddFlashcardForm from './AddFlashcardForm';


const AddFlashcard = () => {
    const { project_id } = useParams()

    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                <Container>
                    <BackButton to={`/project/${project_id}/flashcards`} />
                    <h1 className="text-purple-dark text-2xl pb-4 text-center">Create Flashcards</h1>
                    <div className="mx-auto" style={{
                        maxWidth: "400px"
                    }}>
                        <AddFlashcardForm />
                    </div>
                </Container>
            </main>
        </div>
    );

}

export default AddFlashcard;