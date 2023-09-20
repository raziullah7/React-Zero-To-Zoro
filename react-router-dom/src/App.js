import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { WrongPathHandler } from './pages/WrongPathHandler';
import { Navbar } from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/** path to Home page http://localhost:3000/ */}
          <Route path="/" element={<Home />} />

          {/** path to Menu page http://localhost:3000/menu */}
          <Route path="/menu" element={<Menu />} />

          {/** path to Contact page http://localhost:3000/contact */}
          <Route path="/contact" element={<Contact />} />

          {/** for incorrect urls like http://localhost:3000/asdjahgfd
           * we make a component that shows it as an error
           */}
          <Route path="*" element={<WrongPathHandler />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 