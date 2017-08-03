import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './styles/App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Header name='Hello All'/>
        <Content />
      </div>
    );
  }
}

export default App;
