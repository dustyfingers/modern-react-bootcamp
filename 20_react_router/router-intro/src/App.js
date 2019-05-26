import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';
import './App.css';


const Hater = () => <h1>I hate dogs!!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='App-nav'>
          <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
          <NavLink exact activeClassName='active-link' to='/dog'>Dog</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/dog' render={() => <Dog name='PEANUT' />} />
          <Route exact path='/dog/hater' component={Hater} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
