import SideNav from 'components/SideNav';
import React, { useContext, useState } from 'react';
import Footer from "components/Footer";
import CreateButton from 'components/CreateButton';
import TechniqueAPI from 'api/TechniqueAPI';
import { useParams } from 'react-router'
import { UserContext } from 'Context/UserContext';


const AddFlashcard = () => {
    const { technique_id, project_id } = useParams()
    const { token } = useContext(UserContext)

    const [answer, setAnswer] = useState()
    const [question, setQuestion] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFlashcard = TechniqueAPI.createFlashcard(token, { technique_id, project_id, question, answer })
        if (newFlashcard.errors) {
            console.log(newFlashcard.errors)
        }
        else {
            console.log(newFlashcard)
        }
    }
    return (
        <div>
            <main className="w-full min-h-screen bg-bg flex">
                <SideNav />
                <div className="w-full h-auto flex flex-col flex justify-center flex items-center mb-10">
                    <div className="flex items-center h-16">
                        <h1 className="mx-auto text-purple-dark text-4xl">Create Flashcards</h1>
                    </div>
                    <div className="bg-white m-auto" style={{
                        width: '95%',
                        height: '90%'
                    }}>
                        <div className="flex justify-start" >
                        </div>
                        <form onSubmit={handleSubmit}>

                            <label>Question</label>
                            <input id="questioninput" placeholder="Question" onChange={e => setQuestion(e.target.value)} value={question}></input>
                            <label>Answer</label>
                            <input id="questionanswer" placeholder="Answer" onChange={e => setAnswer(e.target.value)} value={answer}></input>
                            <CreateButton />
                        </form>

                    </div>





                </div>







            </main>
            <Footer />
        </div>
    );

}

export default AddFlashcard;