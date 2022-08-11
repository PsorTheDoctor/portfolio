import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Page } from './components/page/Page';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
