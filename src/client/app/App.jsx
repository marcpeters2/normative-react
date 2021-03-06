import React, { Component } from 'react';
import './App.scss';

import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
