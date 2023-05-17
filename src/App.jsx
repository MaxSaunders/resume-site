import {
  BrowserRouter as Router,
  // Route,
  Routes,
  // Navigate
} from "react-router-dom";
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
      <Navbar />
      <Header />
    </Router>
  )
}

export default App
