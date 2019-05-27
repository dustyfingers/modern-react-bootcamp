import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
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
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />
    };
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path='/dogs' render={ () => <DogList dogs={this.props.dogs} /> } />
          <Route exact path='/dogs/:name' render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
