import SideNav from 'components/SideNav';
import React from 'react';
import Container from 'components/Container'


const Techniques = () => {
    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                <div className="w-full h-auto flex flex-col justify-center items-center mb-10">
                    <div className="flex items-center h-16">
                        <h1 className="mx-auto text-purple-dark text-4xl">Techniques</h1>
                    </div>
                    <div className="bg-white m-auto" style={{
                        width: '95%',
                        height: '90%'
                    }}>

                        <div className="flex flex-col my-9 mx-auto w-11/12 ">
                            <Container>
                                <h1>Feynman Technique</h1>
                                <p className="h-48 ">The Feynman Technique is a learning method in which a person explains the concept they're learing to themselves in a simple way to find gaps in their knowledge. In simple terms, pretending to explaining the subject to a child, so it can understand. This makes it easier for one truly know if one understands what they are talking about, using concise thoughts and simple language.</p>
                            </Container>
                            <Container>
                                <h1>Spaced Repetition</h1>
                                <p className="h-48">Spaced repetition is and learning technique the is usually performed with flashcards. Newly introduced and more difficult flashcards are shown more frequently, while older and less difficult flashcards are shown less frequently in order to exploit the psychological spacing effect. The use of spaced repetition has been proven to increase rate of learning.  </p>
                            </Container>
                            <Container>
                                <h1>Interleaved Studying</h1>
                                <p className="h-48">Interleaving is a learning technique that involves mixing together different topics or forms of practice, in order to facilitate learning. For example, if a student uses interleaving while preparing for an exam, they can mix up different types of questions, rather than study only one type of question at a time.</p>
                            </Container>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}

export default Techniques;