import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator/*" element={<Calculator />} />
          <Route exact path="/quote/*" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
