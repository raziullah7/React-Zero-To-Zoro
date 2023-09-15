import './App.css';
import { useState } from 'react'

function App() {
  // simple declaration
  // const age = 0;

  // using the useSate hook
  // age is variable, setAge is its setter
  const [age, setAge] = useState(0);
  
  const increaseAge = () => {
    // age += 1;
    setAge(age + 1);
  }

  // using the useState hook for inputVal variable
  // and setInputVal for its setter
  // inputVal variable with start off being an empty string
  const [inputVal, setInputVal] = useState("")

  // 'event' value is the default parameter
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setInputVal(event.target.value);
  }

  // textVisibility is a boolean, initially true
  // setTextVisibility setter used for event change
  const [textVisibility, setTextVisibility] = useState(true);

  // you can always use an anonymous function, but nah
  // don't like like writing spagetti code
  const toggleBoolean = () => {
    // sets true to false and false to true
    // setTextVisibility(!textVisibility);
    setTextVisibility(textVisibility ? false : true);
  }

  // for episode 4 practice session
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const setToZero = () => {
    setCount(0)
  }

  return (
    <div className="App" style={ {fontSize: 24} }>
      {age}
      {/* simply pass the name of the function as onClick event handler */}
      <button style={ {fontSize: 20} } onClick={increaseAge}> Increase Age </button>

      <h1>----------------------------------------------------------------------</h1>

      <h3 style={{display: 'inline-block', marginRight: 12}}>Input:</h3>
      <input type='text' style={{fontSize: 20}} onChange={handleInputChange} />
      <br />

      <h3 style={{display: 'inline-block', marginRight: 12}}>Output:</h3>

      <h1>----------------------------------------------------------------------</h1>

      <button style={ {fontSize: 32} } onClick={toggleBoolean} > Show/Hide Text </button>
      {textVisibility && <h2>HI, WELCOME TO THE "ZERO TO ZORO" REACT COURSE</h2>}
      {inputVal}

      <h1>----------------------------------------------------------------------</h1>

      {/** made a counter app for episode practice session */}
      <button style={ {fontSize: 24} } onClick={increase}> Increase </button>
      <button style={ {fontSize: 24} } onClick={decrease}> Decrease </button>
      <button style={ {fontSize: 24} } onClick={setToZero}> Set to Zero</button>
      <br />
      <h3 style={{display: 'inline-block', marginRight: 12}}>Counter:</h3> {count}
    </div>
  );
}

export default App;
