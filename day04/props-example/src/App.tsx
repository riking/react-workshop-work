import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter initialCounterValue={0} />
      <Counter initialCounterValue={2} />
      <Counter initialCounterValue={30} />
    
    </div>
  );
}

export default App;
