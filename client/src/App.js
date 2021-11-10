import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Flights from './components/Flights';
 

function App() {
  return (
    <Router>
      <>
        <Header />
        <Navbar />
        <Flights />
      </>
    </Router>
  );
}

export default App;
