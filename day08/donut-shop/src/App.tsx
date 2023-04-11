import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ListingPage from './components/ListingPage';
import CartPage from './components/CartPage';
import DetailPage from './components/DetailPage';
import ErrorPage from './components/ErrorPage';
import { CartContextProvider } from './components/CartContext';

function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<ListingPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/donut/:id' element={<DetailPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
