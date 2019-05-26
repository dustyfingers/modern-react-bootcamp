import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class VendingMachine extends Component {
  render() {
    return (
      <div className='VendingMachine'>
        <h1>Vending Machine</h1>
        <div className='VendingMachine-container'>
          <Link exact to='/apple'>Apple</Link>
          <Link exact to='/banana'>Banana</Link>
          <Link exact to='/pop-tart'>Pop Tart</Link>
        </div>
      </div>
    );
  }
}


export default VendingMachine;
