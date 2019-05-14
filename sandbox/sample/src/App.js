import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NlpManager } from 'node-nlp';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      response: "No Response"
    }
  }

  componentDidMount(){
    console.log("Updating!")
    this.train();
  }
  train() {
    const manager = new NlpManager({ languages: ['en'] });
    // Adds the utterances and intents for the NLP
    manager.addDocument('en', 'goodbye for now', 'greetings.bye');
    manager.addDocument('en', 'bye bye take care', 'greetings.bye');
    manager.addDocument('en', 'okay see you later', 'greetings.bye');
    manager.addDocument('en', 'bye for now', 'greetings.bye');
    manager.addDocument('en', 'i must go', 'greetings.bye');
    manager.addDocument('en', 'hello', 'greetings.hello');
    manager.addDocument('en', 'hi', 'greetings.hello');
    manager.addDocument('en', 'howdy', 'greetings.hello');
     
    // Train also the NLG
    manager.addAnswer('en', 'greetings.bye', 'Till next time');
    manager.addAnswer('en', 'greetings.bye', 'see you soon!');
    manager.addAnswer('en', 'greetings.hello', 'Hey there!');
    manager.addAnswer('en', 'greetings.hello', 'Greetings!');
    this.setState( {
      nlp: manager
    }, () => {
      console.log("I have set nlp")
    })
  }
 
   
  // Train and save the model.
  makeResponse = async () => {

    let { nlp } = this.state
    await nlp.train();
    nlp.save();
    const response = await nlp.process('en', 'I have to go');
    this.setState({ response: response })
  };

  render() {
    console.log("I'm rendering!")
    if (this.state.nlp) {
      this.makeResponse(); 
    } else {
      return null
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.response}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
