import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialPosts from './components/SocialPosts';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <SocialPosts />
    </div>
  );
}

export default App;
