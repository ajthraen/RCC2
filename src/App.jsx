import './App.css';
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
