import { Button } from '@mui/material'
import Container from 'components/Container'
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { VscSmiley } from 'react-icons/vsc'
import FeedBackButton from './FeedBackButton'
import { UserContext } from 'Context/UserContext'
import ProjectAPI from 'api/ProjectAPI'
import BackButton from 'components/BackButton'

const Flashcard = () => {

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [flashcard, setFlashcard] = useState()

    const { project_id } = useParams()
    const { token } = useContext(UserContext)

    const completeFlashcard = async (difficulty) => {
        await ProjectAPI.completeFlashcard(token, { project_id, flashcard_id: flashcard._id, difficulty })
        setLoading(true)
        getNextFlashcard()
    }

    const getNextFlashcard = () => {
        ProjectAPI.getNext(token, { project_id }).then((nextFlashcard) => {
            setFlashcard(nextFlashcard)
            setLoading(false)
        })
    }

    // Get next flashcard
    useEffect(() => {
        setLoading(true)
        getNextFlashcard()
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="bg-white h-72 max-h-full max-w-2xl mx-auto">
            {
                (!loading && flashcard === null) ? (<div className="h-full w-full flex justify-center items-center">Your flashcard queue is empty!</div>) : !loading && (!show ? (
                    <Front q={flashcard?.question} setShow={setShow} />
                ) : (
                    <Back completeFlashcard={completeFlashcard} a={flashcard?.answer} flashcard_id={flashcard._id} />
                ))
            }
        </Container>
    )
}

const Front = ({ q, setShow }) => {

    const { project_id } = useParams()


    return (
        <div className="flex flex-col h-full">
            <BackButton to={`/project/${project_id}/flashcards`} />
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-center">{q}</h1>
            </div>
            <div className="flex-0">
                <Button onClick={() => setShow(true)} fullWidth={true} variant="contained">Show answer</Button>
            </div>
        </div>
    )
}

const Back = ({ a, completeFlashcard }) => {

    const { project_id } = useParams()

    const buttons = [
        {
            icon: <VscSmiley />,
            label: 'Forgotten',
            onClick: () => completeFlashcard(3)
        },
        {
            icon: <VscSmiley />,
            label: 'Hard',
            onClick: () => completeFlashcard(2)
        },
        {
            icon: <VscSmiley />,
            label: 'Easy',
            onClick: () => completeFlashcard(1)
        },
        {
            icon: <VscSmiley />,
            label: 'Immediately',
            onClick: () => completeFlashcard(0)
        },
    ]

    return (
        <div className="flex flex-col h-full">
            <BackButton to={`/project/${project_id}/flashcards`} />
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-center">{a}</h1>
            </div>
            <div className="flex-0 mx-auto space-x-2">
                {buttons.map(x => <FeedBackButton icon={x.icon} onClick={x.onClick}>{x.label}</FeedBackButton>)}
            </div>
        </div>
    )
}

export default Flashcard