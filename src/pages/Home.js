import Navigation from "../components/Navigation";
import Connect from "../components/Connect";

const Home = () => {
    return (
        <div className="home">
            <div className="globalNavi">
                <Navigation />
                <Connect />
            </div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;