import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Ad from './components/Ad';

function App() {
  return (
    <div className="App">
      <Header name="Chiprus" />
      <main>
        <div className='dva-grouping'>
            <Ad darkTheme flavor="Strawberry" fontSize={44} />
            <Ad darkTheme={false} flavor="Chocolate" fontSize={48} />
            <Ad flavor="Vanilla" fontSize={40} />
        </div>
        <AdDesigner></AdDesigner>
        <Votes />
      </main>
    </div>
  );
}

export default App;
