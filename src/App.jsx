import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './Components/Navbar'
import PageHome from "./Components/PageHome";
import PageResume from './Components/PageResume';
import './App.css'

const App = () => {
  return (
    <>
      <Router basename={window.location.pathname || ''}>
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
