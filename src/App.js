import React, { Component } from 'react';
import ConSignup from './containers/ConSignup';
import ConLogin from './containers/ConLogin';
import ConNav from './containers/ConNav';
import User from './pages/User';
import Home from './pages/Home';
import Manage from './pages/Manage';
import Order from './pages/Order';
import ConProduct from './containers/ConProduct';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'whatwg-fetch';
import "./App.css";

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
               <Route path="/product/:id" component={ConProduct}/>            
               <Route path="/manage" component={Manage}/>            
               <Route path="/order" component={Order}/>            
               <Route path="/" component={Home}/>            
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
