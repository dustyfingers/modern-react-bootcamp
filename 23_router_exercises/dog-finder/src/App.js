import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  static defaultProps ={
    dogs: [
      {
        name: 'Peanut',
        age: 2,
        src: 'https://source.unsplash.com/800x800/?dog',
        facts: [
          'Loves the park!',
          'Loves his mama!',
          'Loves to play!'
        ]
      },
      {
        name: 'Keeva',
        age: 5,
        src: 'https://source.unsplash.com/800x800/?dog',
        facts: [
          'Loves to snuggle!',
          'Loves her papa!',
          'Loves to eat food!'
        ]
      },
      {
        name: 'Lissa',
        age: 4,
        src: 'https://source.unsplash.com/800x800/?dog',
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
        <Navbar dogs={this.props.dogs}/>
        <Routes dogs={this.props.dogs} />
      </div>
    );
  }
}

export default App;
