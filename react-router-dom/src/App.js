import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { WrongPathHandler } from './pages/WrongPathHandler';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';

// using createContext, we can remove the props references from element
// because the passed props become global and become globally accessible
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Heisenberg");

  return (
    <div className="App">
    
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            {/** path to Home page http://localhost:3000/ */}
            <Route path="/" element={<Home /**username={username}*/ />} />

            {/** path to Menu page http://localhost:3000/menu */}
            <Route path="/menu" element={<Menu />} />

            {/** path to Profile page http://localhost:3000/profile */}
            <Route path="/profile" element={<Profile /**username={username}*/ />} />

            {/** path to Contact page http://localhost:3000/contact */}
            <Route path="/contact" element={<Contact />} />

            {/** for incorrect urls like http://localhost:3000/asdjahgfd
             * we make a component that shows it as an error
             */}
            <Route path="*" element={<WrongPathHandler />} />
          </Routes>
        </Router>
      </AppContext.Provider>
      
    </div>
  );
}

export default App; 