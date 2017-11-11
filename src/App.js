import React, { Component } from 'react';
import './App.css';
import ConSignup from './containers/ConSignup';
import ConLogin from './containers/ConLogin';
import ConNav from './containers/ConNav';
import User from './pages/User';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <ConNav />
            <Switch>
               <Route exact path="/login" component={ConLogin}/>            
               <Route exact path="/signup" component={ConSignup}/>            
               <Route exact path="/user" component={User}/>            
               <Route exact path="/" component={Home}/>            
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
