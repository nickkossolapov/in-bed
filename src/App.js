import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import { Home } from './components/home';
import { About } from './components/about'; 

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
    </Router>
  );
}

export default App;
