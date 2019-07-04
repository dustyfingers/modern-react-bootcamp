import React from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormCustomHook from './SimpleFormCustomHook';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
      <Toggler />
      <SimpleFormHooks />
      <SimpleFormCustomHook />
    </div>
  );
}

export default App;
