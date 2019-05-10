import React from 'react';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import BrokenClick2 from './BrokenClick2';

function App() {
  return (
    <div className="App">
      <Game />
      <Rando maxNum={7}/>
      <Button />
      <BrokenClick />
      <BrokenClick2 />
    </div>
  );
}

export default App;
