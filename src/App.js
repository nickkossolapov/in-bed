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
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home}/>
        <Route path={process.env.PUBLIC_URL + "/about"} component={About}/>
        <Route path={process.env.PUBLIC_URL + "/works"} component={Works}/>
        <Route path={process.env.PUBLIC_URL + "/sweet"} component={imageGallery('sweet', 19, 'Sweet but Sweet')}/>
        <Route path={process.env.PUBLIC_URL + "/fred"} component={imageGallery('fred', 35, 'Ma Homie - Frederico')}/>
        <Route path={process.env.PUBLIC_URL + "/gustavo"} component={imageGallery('gustavo', 23, 'Ma Homie - Gustavo')}/>
        <Route path={process.env.PUBLIC_URL + "/begging"} component={imageGallery('begging', 8, 'Begging Culture')}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
