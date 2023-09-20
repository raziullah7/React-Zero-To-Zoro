import {  useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {

// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => console.log(data));

  const [catFact, setCatFact] = useState("");

  // not a recommended approach to fetch data
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
    .then((res) => setCatFact(res.data.fact));
  }

  useEffect(() => {
    fetchCatFact();
  }, [])

//---------------------------------------------------------------------------------

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => setPredictedAge(res.data));
  }

  return (
    <div className="App">
      <button onClick={fetchCatFact} style={{fontSize: 24}}>
         Generate Cat Fact</button> 
      <h1 style={{paddingLeft: 24, paddingRight: 36}}> {catFact} </h1>

      <h1>---------------------------------------------------------------------</h1>

      <input 
        placeholder='Enter Name Here' 
        style={{fontSize: 20, marginBottom: 12, width: 300}}
        onChange={(event) => setName(event.target.value)} />
      
      <br></br>
      <button onClick={fetchData} style={{fontSize: 24}}> Predict Age</button>

      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Name Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
