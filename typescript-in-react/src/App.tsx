import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';

function App() {
  // the data type of parameter is mentioned after the
  // parameter i.e., name: string
  // the return type of function is mentioned after the
  //  parameter bracket (): number
  const getAge = (name: string): number => {
    return 99;
  }

  return (
    <div className="App">

      <Person 
      name = {"Pedro"} 
      email = {"pedro@gmail.com"}
      age = {21} 
      isMarried = {true}
      friends = {["jess", "jake", "jerry", "jasmine"]}
      country = {Country.Brazil}
      />

    </div>
  );
}

export default App;
