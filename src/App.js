import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // For basic styling

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
          <li style={{ margin: '0 15px' }}><Link to="/">Home</Link></li>
          <li style={{ margin: '0 15px' }}><Link to="/about">About</Link></li>
          <li style={{ margin: '0 15px' }}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;