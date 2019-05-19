import React from 'react';
import Form from './Form';
import MultipleForm from './MultipleForm';
import './App.css';

function App() {
  return (
    // form goes in the app component
    <div className="App">
      <Form />
      <MultipleForm />
    </div>
  );
}

export default App;
