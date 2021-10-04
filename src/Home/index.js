import Container from "components/Container";
import NavBar from "components/NavBar";
import Banner from "./Banner";

const Home = () => {
    return (
        <main className="bg-bg w-full min-h-screen">
            <NavBar />
            <Banner />
            <Container>Hej</Container>
        </main>
    );
}

export default Home;