import { Link, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Index';
import About from './pages/About/Index';
import Contact from './pages/Contact/Index';

export default function App() {
  const location = useLocation();

  return (
    <div className="Main">
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
