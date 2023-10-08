import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      {/**We can't pass information between Profile and Login because they are siblings*/}
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
