import './App.css';
import { Cat } from './components/Cat';
import { useToggle } from './useToggle';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      }
    }
  });

  const [isVisible, toggle] = useToggle();

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <button onClick={toggle} 
        style={{fontSize: 36, width: 200}} >
          { isVisible? "Hide" : "Show" }</button>
          { isVisible && <h1>Hidden Text</h1> }

        <h1>----------------------------------------------------------------------------------</h1>

        <Cat />

      </div>
    </QueryClientProvider>
  );
}

export default App;
