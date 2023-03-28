import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <AdDesigner></AdDesigner>
        <Votes />
      </main>
    </div>
  );
}

export default App;
