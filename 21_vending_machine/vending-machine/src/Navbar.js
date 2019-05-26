import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
      <NavLink exact activeClassName='Navbar-active' to='/'>Home</NavLink>
      <NavLink exact activeClassName='Navbar-active' to='/apple'>Apple</NavLink>
      <NavLink exact activeClassName='Navbar-active' to='/banana'>Banana</NavLink>
      <NavLink exact activeClassName='Navbar-active' to='/pop-tart'>Pop Tart</NavLink>
      </div>
    );
  }
}


export default Navbar;
