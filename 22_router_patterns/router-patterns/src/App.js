import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Switch>
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
        <Route 
          exact 
          path='/' 
          render={ routeProps => <h1>Home Page</h1> } 
        />
        <Route 
          render={ () => <h1>ERROR 404 FILE NOT FOUND</h1> } 
        />
      </Switch>
      </div>
    );
  }
}

export default App;
