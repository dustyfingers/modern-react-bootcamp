import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Apple extends Component {
  render() {
    return (
      <div className=''>
        <h1>APPLE!</h1>
        <Link to='/'>Go Back</Link>
      </div>
    );
  }
}


export default Apple;
