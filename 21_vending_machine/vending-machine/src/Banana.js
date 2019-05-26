import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Banana extends Component {
  render() {
    return (
      <div className=''>
        <h1>BANANA</h1>
        <Link to='/'>Go Back</Link>
      </div>
    );
  }
}


export default Banana;
