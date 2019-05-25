import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import './App.css';

import { Home } from './components/home';
import { About } from './components/about';
import {Works} from "./components/works";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
