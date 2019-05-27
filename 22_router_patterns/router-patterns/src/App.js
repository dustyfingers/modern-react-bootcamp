import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Route 
          exact 
          path='/food/:name' 
          render={ routeProps => <Food {...routeProps} /> } 
        />
        <Route 
          exact 
          path='/food/:foodName/drink/:drinkName' 
          render={ routeProps => <Meal {...routeProps} /> } 
        />
      </div>
    );
  }
}

export default App;
