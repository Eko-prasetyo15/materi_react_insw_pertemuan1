import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h1> hello mas eko</h1>
        <Footer />
      </header>
    </div>
  );
}

export default App;
