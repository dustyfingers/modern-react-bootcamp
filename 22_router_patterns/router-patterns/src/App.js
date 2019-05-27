import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Food from './Food';
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
      </div>
    );
  }
}

export default App;
