import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import Navbar from '../Navbar'
import Footer from '../Footer';
import Page404 from '../Page404';
import PageHome from "../PageHome";
import PageResume from '../PageResume';
import PageProjects from '../PageProjects';
import './index.scss'

const AnimatedWrapper = () => {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={PageHome} />
            <Route path="/resume" component={PageResume} />
            <Route path="/projects" component={PageProjects} />
            <Route exact path="*" component={Page404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  )
}

const App = () =>
  <Router basename='/resume-site'>
    <AnimatedWrapper />
  </Router>

export default App
