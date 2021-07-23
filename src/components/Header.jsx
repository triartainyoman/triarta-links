import React from 'react';
import logo from '../avatar.png';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>I Nyoman Triarta</h1>
      <p>Web and Mobile Developer</p>
      {/* <p>Jasa undangan online pernikahan</p> */}
    </header>
  );
}

export default Header;