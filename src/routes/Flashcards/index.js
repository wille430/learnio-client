import Container from "components/Container"

const { default: SideNav } = require("components/SideNav")

const Flashcards = () => {
    return (
        <div className="layout">
            <SideNav />
            <main className="main">
                <Container>
                    <h1>Flashcards</h1>
                </Container>
            </main>
        </div>
    )
}

export default Flashcards