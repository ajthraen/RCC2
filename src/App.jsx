import './App.css';
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/about">About</Link>
          <Link className="links" to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
