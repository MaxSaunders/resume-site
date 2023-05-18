import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from './Components/Navbar'
import PageHome from "./Components/PageHome";
import PageResume from './Components/PageResume';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Redirect from='*' to='/resume-site' />
        </Switch>
      </Router>
      <Router basename='/resume-site/'>
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
