import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Texts from "./pages/Texts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleArticle from "./pages/SingleArticle";
import NotFound from './pages/NotFound';
import Navigation from "./components/Navigation";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import DeleteAccount from "./pages/DeleteAccount";

function App() {
  return (
    <BrowserRouter>
        <header>
            <Route exact component={Navigation} />
            <Route exact component={Connect} />
        </header>

        <main>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forum" exact component={Texts} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/delete" exact component={DeleteAccount}/>
            <Route path="/forum/:id" exact component={SingleArticle} />

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