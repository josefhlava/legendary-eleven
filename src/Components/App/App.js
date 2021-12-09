import './App.css';
import { Eleven } from '../IX/ix';
import { IxSelector } from '../ixSelector/ixSelector'
import React from 'react'

function App() {
  const testFunc = (stuff) => {
    console.log(stuff);
  }

  return (
    <div className="App">
      <h1>Legendary IX</h1>
      <IxSelector testFunc={testFunc} />
      <Eleven />
    </div>
  );
}

export default App;
