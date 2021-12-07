import Flashcard from './Flashcard'
import BackButton from 'components/BackButton'


const Queue = () => {
    return (
        <div className="layout">
            <main className="main">
                <BackButton to="/" />
                <Flashcard />
            </main>
        </div>
    )
}

export default Queue