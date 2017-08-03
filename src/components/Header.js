import React from 'react';
import logo from '../images/chuck-norris.jpg';

const Header = (props) => {
  return(
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{props.name}</h1>
        </div>
    </div>
  );
};

export default Header;