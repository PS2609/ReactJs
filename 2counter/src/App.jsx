import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const[counter ,setCounter] = useState(15)


  const addValue=()=>{
   setCounter(counter+1)
  }
  const removevalue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>react course</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add Value</button>{"        "}
    <button onClick={removevalue}>Remove Value </button>
    <p>Footer:{counter}</p>
    </>
  );
}

export default App;
