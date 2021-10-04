import Container from "components/Container";
import NavBar from "components/NavBar";
import Banner from "./Banner";
import LoginButton from "./LoginButton";

const Home = () => {
    return (
        <main className="bg-bg w-full min-h-screen">
            <NavBar />
            <Banner />
            <div className="flex justify-center">
            <div className="w-4/5"> 
            <Container>Hej</Container>
            </div>
            </div>
        </main>
    );
}

export default Home;