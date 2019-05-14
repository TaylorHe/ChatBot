import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputBox from './InputBox';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <InputBox message={this.state.message} />
    );
  }
  
}

export default App;
