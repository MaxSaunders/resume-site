import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from '../Navbar'
import Particle from './Particle';
import PageHome from "../PageHome";
import PageResume from '../PageResume';
import PageProjects from '../PageProjects';
import './index.css'

const App = () =>
  <>
    <Router basename={window.location.pathname || ''}>
      <Particle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/resume" component={PageResume} />
        <Route exact path="/projects" component={PageProjects} />
      </Switch>
    </Router>
  </>

export default App
