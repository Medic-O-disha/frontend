
import './App.css';
import React from 'react';
import { Route , Switch } from 'react-router-dom';
import About from './About';
import Developers from './Developers';
import Home from './Home';
import  Signup from './Signup';





function App() {
     
  return (
    <Switch>
    <Route  exact path = '/' component = {Home} />
    <Route  path = "/about" component={About}/>
    <Route  path = "/developers" component={Developers} />
    <Route  path = "/signup" component={Signup} />
  </Switch>
  );
}

export default App;
