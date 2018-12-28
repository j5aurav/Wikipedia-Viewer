import React, { Component } from 'react';
import logo from './images/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} alt="wikipedia logo" width="100px" height="100px" />
        <p>WikipediA Viewer</p>
      </div>
    );
  }
}

export default Header;
