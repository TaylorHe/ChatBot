import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputBox from './InputBox';
import SendButton from './SendButton';
import ChatForm from './ChatForm';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <ChatForm/>
    );
  }
  
}

export default App;
