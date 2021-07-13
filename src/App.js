
import './App.css';
import React from 'react';
import { Route , Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import  Signup from './Signup';
import Dashboard from './Dashboard';
import Hospital from './Hospital';
import Normaluser from './Normaluser';
import Ngo from './Ngo';
import Ideas from './Ideas';






function App() {
     
  return (
    <Switch>
    <Route  exact path = '/' component = {Home} />
    <Route  path = "/about" component={About}/>
    <Route  path = "/signup" component={Signup} />
    <Route  path = "/dashboard" component={Dashboard} />
    <Route  path = "/hospital" component={Hospital} />
    <Route  path = "/normaluser" component={Normaluser} />
    <Route  path = "/ngo" component={Ngo} />
    <Route  path = "/ideas" component={Ideas} />
  </Switch>
  );
}

export default App;
