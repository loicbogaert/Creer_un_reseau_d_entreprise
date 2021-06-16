import Navigation from "../components/Navigation";
import Connect from "../components/Connect";
import Logo from "../components/Logo";

const Home = () => {
    return (
        <div className="home">
            <div className="globalNavi">
                <Navigation />
                <Connect />
            </div>
            <Logo />
        </div>
    )
}

export default Home;