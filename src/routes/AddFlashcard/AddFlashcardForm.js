import ProjectAPI from 'api/ProjectAPI';
import { Button, FormControl, TextField, FormHelperText, Snackbar, Alert } from '@mui/material';
import React, { useContext, useState } from 'react';
import { UserContext } from 'Context/UserContext';
import { useParams } from 'react-router';

const AddFlashcardForm = () => {

    const { project_id } = useParams()
    const { token } = useContext(UserContext)

    const [answer, setAnswer] = useState()
    const [question, setQuestion] = useState()

    const [answerError, setAnswerError] = useState()
    const [questionError, setQuestionError] = useState()
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setQuestionError(null)
        setAnswerError(null)
        setShowSuccess(false)

        const newFlashcard = await ProjectAPI.createFlashcard(token, { project_id, question, answer })
        if (newFlashcard.errors) {
            const errors = newFlashcard.errors

            console.log(errors)

            setQuestionError(errors.find(x => x.param === "question")?.msg)
            setAnswerError(errors.find(x => x.param === "answer")?.msg)
        }
        else {
            console.log(newFlashcard)
            setShowSuccess(true)
        }
    }

    return (
        <FormControl
            fullWidth={true}
        >
            <TextField id="question-input" label={"Question"} aria-describedby="question-help-text" required={true} onChange={e => setQuestion(e.target.value)} value={question} error={questionError} />
            <FormHelperText error id="question-help-text">{questionError}</FormHelperText>

            <div className="h-2" />

            <TextField id="answer-input" label={"Answer"} aria-describedby="answer-help-text" required={true} onChange={e => setAnswer(e.target.value)} value={answer} multiline error={answerError} />
            <FormHelperText error id="answer-help-text">{answerError}</FormHelperText>

            <Button onClick={handleSubmit}>Create</Button>

            {/* Success message */}
            <Snackbar
                open={showSuccess}
            >
                <Alert>Flashcard added!</Alert>
            </Snackbar>
        </FormControl>
    )
}

export default AddFlashcardForm