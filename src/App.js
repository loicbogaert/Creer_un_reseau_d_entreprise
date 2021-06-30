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
import Disconnect from "./components/Disconnect";
import NavigationLogged from "./components/NavigationLogged";

function App() {
  return (
    <BrowserRouter>
        <header>
          <Switch>
            {/**Routes when logged */}
            <Route path="/logged" exact component={NavigationLogged} />
            <Route path="/forum/text/logged" exact component={NavigationLogged} />
            <Route path="/forum/media/logged" exact component={NavigationLogged} />

            {/**Routes when not logged */}
            <Route path="/" exact component={Navigation} />
            <Route path="/signup" exact component={Navigation} />
            <Route path="/login" exact component={Navigation} />
          </Switch>

          <Switch>
            <Route path="/" exact component={Connect} />
            <Route path="/signup" exact component={Connect} />
            <Route path="/login" exact component={Connect} />
            <Route path="/logged" exact component={Disconnect} />
            <Route path="/forum/text/logged" exact component={Disconnect} />
            <Route path="/forum/media/logged" exact component={Disconnect} />
          </Switch>
        </header>

        <main>
        <Switch>
          {/** Basic routes */}
            <Route path="/" exact component={Home} />
            <Route path="/forum/text" exact component={Texts} />
            <Route path="/forum/media" exact component={Medias} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />

            {/** Routes when logged */}
            <Route path="/logged" exact component={Home} />
            <Route path="/forum/text/logged" exact component={Texts} />
            <Route path="/forum/media/logged" exact component={Medias} />

            {/** 404 not found */}
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