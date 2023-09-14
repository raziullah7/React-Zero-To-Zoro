import './App.css';
import { User } from './User.js'

function App() {
  const age = 19;
  const isGreen = true;

  const names = ["Pedro", "Jake", "Jessica", "David", "Mike"];
  const users = [
    { name: "Ali", age: 20},
    { name: "Raza", age: 40},
    { name: "Tiwana", age: 69},
  ];

  return (
    <div className="App">
      {/* <h1 className='name'> Razi </h1> */}

      {/* conditional rendering using ternary operator */}
      { age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1> }

      {/* the inline style is actually an object, hence we can make use of JS code */}
      <h1 style={ {color: isGreen ? "green" : "red"} }>This has color</h1>

      {/* we can use && as an if like "condition && code" and the code
          will run if the condition is true (nothing otherwise) */}
      {isGreen && <button> Button Here</button>}

      <h1>----------------------------------------------------------------------</h1>
      {/* using lists and looping through them */}
      {names.map((name, key) => {
        return <h2 key={key}> {name} </h2>;
      })}

      <h1>----------------------------------------------------------------------</h1>
      {users.map((user, key) => {
        return (
          <div>
            {user.name}, {user.age}
          </div>
        );
      })}
      
      <h1>----------------------------------------------------------------------</h1>
      {users.map((user, key) => {
        return (
          <User name={user.name} age={user.age}/>
        );
        
      })}

    </div>
  );
}

// using a component "User" but refactored it in a separate file


export default App;
