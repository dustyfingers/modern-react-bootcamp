import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Apple from './Apple';
import Banana from './Banana';
import PopTart from './PopTart';
import VendingMachine from './VendingMachine';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/apple' render={() => <Apple />} />
          <Route exact path='/banana' render={() => <Banana />} />
          <Route exact path='/pop-tart' render={() => <PopTart />} />
        </Switch>
      </div>
    );
  }
}

export default App;
