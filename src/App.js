import React, { Component } from 'react';
import './App.css';
import ConSignup from './containers/ConSignup';
import ConLogin from './containers/ConLogin';
import ConNav from './containers/ConNav';
import User from './pages/User';
import Home from './pages/Home';
import Manage from './pages/Manage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <ConNav />
            <Switch>
               <Route path="/login" component={ConLogin}/>            
               <Route path="/signup" component={ConSignup}/>            
               <Route path="/user" component={User}/>            
               <Route path="/manage" component={Manage}/>            
               <Route path="/" component={Home}/>            
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
