import React from 'react';
import Food from './Food';
import './App.css';

function App() {
  return (
    <div className="App">
      <Food name='Kale' />
      <Food name='Carrot' />
      <Food name='Ice Cream' />
    </div>
  );
}

export default App;
