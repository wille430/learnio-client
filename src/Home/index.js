import Container from "components/Container";
import NavBar from "components/NavBar";
import Banner from "./Banner";



const Home = () => {
    return (
        <main className="bg-bg w-full min-h-screen">
            <NavBar />
            <Banner />
            <div className="flex justify-center">
                <div className="w-4/5 space-y-5">
                    <Container> 
                        <div className="h-14"></div>
                    </Container>
                    <Container> 
                        <div></div>
                        <img className="object-cover h-48" src="../assets/investment-home.svg" alt="investment"></img>
                    </Container>
                    <div className="grid grid-cols-2 gap-5">
                      
                            <Container>Hej   <div className="h-48"></div> </Container>
                            <Container>Hej  <div className="h-48"></div> </Container>
                    </div>
                    <Container>  <div className="h-32"></div></Container>

                </div>
            </div>
            
        </main>
    );
}

export default Home;