import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { WrongPathHandler } from './pages/WrongPathHandler';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// using createContext, we can remove the props references from element
// because the passed props become global and become globally accessible
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Heisenberg");

  // const client = new QueryClient();
  
// query is the R from CRUD, mutation is the CUD from CRUD

// when we change the tab from localhost to another tab, the page
// reloads and the api call is made again changing the data on localhost

// these settings stop that from happening by introducing a mutation
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }  
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>

        <AppContext.Provider value={{username, setUsername}}>

          <Router>
            <Navbar />
            <Routes>
              {/** path to Home page http://localhost:3000/ */}
              <Route path="/" element={<Home /**username={username}*/ />} />

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

      </QueryClientProvider>
    </div>
  );
}

export default App; 