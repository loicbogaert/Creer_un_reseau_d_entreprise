import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Medias from "./pages/Medias";
import Texts from "./pages/Texts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from './pages/NotFound';
import Navigation from "./components/Navigation";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <header>
          <Navigation />
          <Connect />
        </header>

        <main>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forum/text" exact component={Texts} />
            <Route path="/forum/media" exact component={Medias} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
        </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
    </BrowserRouter>
  );
}

export default App;