import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Medias from "./pages/Medias";
import Texts from "./pages/Texts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forum" exact component={Chat} />
            <Route path="/forum/text" exact component={Texts} />
            <Route path="/forum/media" exact component={Medias} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;