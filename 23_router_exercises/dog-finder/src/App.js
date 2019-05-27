import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DogList from './DogList';
import './App.css';

class App extends Component {
  static defaultProps ={
    dogs: [
      {
        name: 'Peanut',
        age: 2,
        facts: [
          'Loves the park!',
          'Loves his mama!',
          'Loves to play!'
        ]
      },
      {
        name: 'Keeva',
        age: 5,
        facts: [
          'Loves to snuggle!',
          'Loves her papa!',
          'Loves to eat food!'
        ]
      },
      {
        name: 'Lissa',
        age: 4,
        facts: [
          'Loves to snuggle!',
          'Loves her papa!',
          'Loves to play with Peanut!'
        ]
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Route path='/dogs' render={ () => <DogList dogs={this.props.dogs} /> } />
      </div>
    );
  }
}

export default App;
