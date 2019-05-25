import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import { Home } from './components/home';
import { About } from './components/about';
import { Works } from './components/works';
import { imageGallery } from './components/imageGallery';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/works" component={Works}/>
        <Route path="/sweet" component={imageGallery('sweet', 19, 'Sweet but Sweet')}/>
        <Route path="/fred" component={imageGallery('fred', 35, 'Ma Homie - Frederico')}/>
        <Route path="/gustavo" component={imageGallery('gustavo', 23, 'Ma Homie - Gustavo')}/>
        <Route path="/begging" component={imageGallery('begging', 8, 'Begging Culture')}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
