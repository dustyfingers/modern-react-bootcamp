import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import ZenQuote from './ZenQuote';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ZenQuote />
        <GithubUserInfo username='dustyfingers'/>
        <GithubUserInfo username='sophiebits'/>
      </div>
    );
  }
}

export default App;
