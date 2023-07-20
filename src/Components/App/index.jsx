import 'bootstrap/dist/css/bootstrap.min.css';
import "react-widgets/styles.css";

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  HashRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import Navbar from '../Navbar'
import Footer from '../Footer';
import Page404 from '../Page404';
import Particle from './Particle';
import PageHome from "../PageHome";
import PageResume from '../PageResume';
import './index.scss'

const AnimatedWrapper = () => {
  const location = useLocation()

  return (
    <>
      <Particle />
      <Navbar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={PageHome} />
            <Route path="/resume" component={PageResume} />
            <Route exact path="*" component={Page404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  )
}

const App = () =>
  <Router>
    <AnimatedWrapper />
  </Router>

export default App
