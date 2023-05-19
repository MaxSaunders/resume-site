import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from '../Navbar'
import PageHome from "../PageHome";
import PageResume from '../PageResume';
import Particle from './Particle';
import './index.css'

const App = () => {
  return (
    <>
      <Router basename={window.location.pathname || ''}>
        <Particle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/resume" component={PageResume} />
        </Switch>
      </Router>
    </>
  )
}

export default App
