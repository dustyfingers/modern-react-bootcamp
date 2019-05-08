import React, {Component} from 'react';
import logo from './logo.svg';
import Pokedex from './Pokedex';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;
