import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import ConLogin from './containers/ConLogin';
import User from './pages/User';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Nav />
            <Switch>
               <Route exact path="/login" component={ConLogin}/>            
               <Route exact path="/signup" component={SignUp}/>            
               <Route exact path="/user" component={User}/>            
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;