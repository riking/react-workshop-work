import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './types';
import Header from './components/Header';
import ListingPage from './components/ListingPage';
import CartPage from './components/CartPage';
import DetailPage from './components/DetailPage';
import ErrorPage from './components/ErrorPage';

function App() {
  const cartState = useState<Cart>({entries: []});
  
  return (
    <div className="App">
      <Header cartState={cartState} />
      <main>
        <Routes>
          <Route path='/' element={<ListingPage />} />
          <Route path='/cart' element={<CartPage cartState={cartState} />} />
          <Route path='/donut/:id' element={<DetailPage cartState={cartState} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
