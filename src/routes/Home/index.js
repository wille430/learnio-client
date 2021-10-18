import Container from "components/Container";
import NavBar from "components/NavBar";
import Banner from "./Banner";
import Footer from "components/Footer";
import investment from "assets/investment-home.svg";
import notebook from "assets/notebook-home.svg";
import calendar from "assets/calendar-home.svg";
import Table from "components/Table";

const Home = () => {
    return (
        <div>
            <main className="bg-bg w-full min-h-screen">
                <NavBar />
                <Banner />
                <div className="flex justify-center">
                    <div className="w-4/5 space-y-5">
                        <Container>
                            <div className="h-14"></div>
                            <Table headers={["Curcle","Matte","inför prov","Spaced repetition","2021-10-21"]} />
                        </Container>
                        <Container>
                            <div className="flex justify-center ">
                                <div>
                                    <h1>About learn.io</h1>
                                    <p className="text-xs m-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat mollis massa, sed euismod nisl cursus et. Nam eleifend velit at faucibus imperdiet. Nullam non rutrum purus. </p>
                                    <p className="text-xs m-1">Cras nisi purus, eleifend elementum lorem et, aliquet eleifend leo. Donec mauris purus, maximus vel justo eu, convallis ultricies nisi. Morbi et luctus leo, at feugiat nunc. </p>
                                    <p className="text-xs m-1">Fusce ultricies malesuada diam, vitae tincidunt nulla rutrum molestie. Pellentesque et diam faucibus, consectetur est sed, dapibus sem. Vivamus at pulvinar sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                                </div>
                                <img className="h-full w-1/2 hidden lg:block" src={notebook} alt="investment"></img>
                            </div>
                        </Container>
                        <div className="grid grid-cols-2 gap-5">
                            <Container>
                                <div className="h-full flex-col flex justify-between">
                                    <div>
                                        <h1>Improve your grades</h1>
                                        <p className="text-xs m-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat mollis massa, sed euismod nisl cursus et. Nam eleifend velit at faucibus imperdiet. Nullam non rutrum purus.</p>
                                        <p className="text-xs m-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat mollis massa, sed euismod nisl cursus et. Nam eleifend velit at faucibus imperdiet. Nullam non rutrum purus.</p>
                                    </div>
                                    <div className="flex justify-center" style={{
                                        height:"300px"
                                        }}>
                                    <img className="h-auto w-full hidden lg:block items-end" src={investment} alt="investment"></img>
                                    </div>
                                </div>
                            </Container>
                            <Container>
                                <div className="h-full flex-col flex justify-between">
                                    <div>
                                        <h1>How to start</h1>
                                        <p className="text-xs m-1">1. Fusce ultricies malesuada diam, vitae tincidunt nulla rutrum</p>
                                        <p className="text-xs m-1">2. Fusce ultricies malesuada diam, vitae tincidunt nulla rutrum molestie.</p>
                                        <p className="text-xs m-1">3. Fusce ultricies malesuada diam, vitae tincidunt nulla Fusce ultricies malesuada diam,</p>
                                        <p className="text-xs m-1">4. vitae tincidunt Fusce ultricies malesuada diam</p>
                                        <p className="text-xs m-1">5. vitae tincidunt nulla rutrum molestie nulla rutrum nulla rutrum.</p>
                                    </div>
                                    <div className="flex justify-center" style={{
                                        height:"300px"
                                    }}>
                                    <img className="h-auto w-full hidden lg:block items-end" src={calendar} alt="investment"></img>
                                    </div>
                                </div></Container>
                        </div>
                        <Container>  <div className="h-32"></div></Container>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
}

export default Home;