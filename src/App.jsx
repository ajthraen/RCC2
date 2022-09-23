import './App.css';
import Home from './Pages/Home.jsx'
import Users from './Pages/Users.jsx'
// import Contact from './Pages/Contact.jsx'
// import About from './Pages/About.jsx'
import Nav from './Components/Nav.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Users />} />
          {/* <Route path="/users" element={<Users />} /> */}
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
        </Routes >
      </Router>
    </div>
  );
}

export default App;
