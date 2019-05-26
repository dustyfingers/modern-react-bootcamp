import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PopTart extends Component {
  render() {
    return (
      <div className=''>
        <h1>POP TART</h1>
        <Link to='/'>Go Back</Link>
      </div>
    );
  }
}


export default PopTart;
