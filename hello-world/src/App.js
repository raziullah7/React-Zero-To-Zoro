
import './App.css';

function App() {
  const name = <h1>Razi</h1>;
  const age = <h2>22</h2>
  const email = <h2>razi@razi.com</h2>

  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );

  return (
    <div className="App">
      {/* using the "user" constant */}
      {user}

      <Breaker />

      {/* calling the "User" component */}
      {/* prints nothing because nothing is passed */}
      <User />

      <Breaker />

      {/* calling the "User" component with arguments */}
      <User name="Razi" age={22} email="razi@razi.com"/>
      <Breaker />
      <User name="Jake" age={29} email="jake@razi.com"/>

      <Breaker />
      <Job salary={90000} position="Senior SDE" company="Amazon" />
    </div>
  );
}

// function: returns js code
const GetName = () => {
  return "Naam hai mera Tiwana";
};

// component: returns jsx code
const GetNameComponent = () => {
  return <h1>Naam hai mera Tiwana</h1>;
};

// // another component
// const User = (pr) => {
//   return (
//     <div>
//       <h1> Razi</h1>
//       <h1> 22</h1>
//       <h1> razi@razi.com</h1>
//     </div>
//   );
// };

// using User component with props object
const User = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
      <h1> {props.age}</h1>
      <h1> {props.email}</h1>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1> {props.salary}</h1>
      <h1> {props.position}</h1>
      <h1> {props.company}</h1>
    </div>
  );
};

const Breaker = () => {
  return (
    <h3>----------------------------------</h3>
  );
}


export default App;
