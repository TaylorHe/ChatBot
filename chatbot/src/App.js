import React, { Component } from 'react';
import axios from 'axios';

import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './App.css';

import { Grid } from '@material-ui/core';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: ''
    }
    this.SERVER_URL = "http://localhost:8080/request";
    // TODO: make colors for some sentiment types (or sentiment groups)
    
    this.SENTIMENT_TYPES = [
      { label: 'agent.bad', value: 1 },
      { label: 'agent.acquaintance', value: 0 },
      { label: 'agent.age', value: 0 },
      { label: 'agent.annoying', value: 0 },
      { label: 'agent.beclever', value: 0 },
      { label: 'agent.beautiful', value: 0 },
      { label: 'agent.birthday', value: 0 },
      { label: 'agent.boring', value: 0 },
      { label: 'agent.boss', value: 0 },
      { label: 'agent.busy', value: 0 },
      { label: 'agent.canyouhelp', value: 0 },
      { label: 'agent.chatbot', value: 0 },
      { label: 'agent.clever', value: 0 },
      { label: 'agent.crazy', value: 0 },
      { label: 'agent.fire', value: 0 },
      { label: 'agent.funny', value: 0 },
      { label: 'agent.good', value: 0 },
      { label: 'agent.happy', value: 0 },
      { label: 'agent.hobby', value: 0 },
      { label: 'agent.hungry', value: 0 },
      { label: 'agent.marryuser', value: 0 },
      { label: 'agent.myfriend', value: 0 },
      { label: 'agent.occupation', value: 0 },
      { label: 'agent.origin', value: 0 },
      { label: 'agent.ready', value: 0 },
      { label: 'agent.real', value: 0 },
      { label: 'agent.residence', value: 0 },
      { label: 'agent.right', value: 0 },
      { label: 'agent.sure', value: 0 },
      { label: 'agent.talktome', value: 0 },
      { label: 'agent.there', value: 0 },
      { label: 'appraisal.bad', value: 0 },
      { label: 'appraisal.good', value: 0 },
      { label: 'appraisal.noproblem', value: 0 },
      { label: 'appraisal.thankyou', value: 0 },
      { label: 'appraisal.welcome', value: 0 },
      { label: 'appraisal.welldone', value: 0 },
      { label: 'dialog.holdon', value: 0 },
      { label: 'dialog.hug', value: 0 },
      { label: 'dialog.idontcare', value: 0 },
      { label: 'dialog.sorry', value: 0 },
      { label: 'greetings.bye', value: 0 },
      { label: 'greetings.hello', value: 0 },
      { label: 'greetings.howareyou', value: 0 },
      { label: 'greetings.nicetomeetyou', value: 0 },
      { label: 'greetings.nicetoseeyou', value: 0 },
      { label: 'greetings.nicetotalktoyou', value: 0 },
      { label: 'user.angry', value: 0 },
      { label: 'user.back', value: 0 },
      { label: 'user.bored', value: 0 },
      { label: 'user.busy', value: 0 },
      { label: 'user.cannotsleep', value: 0 },
      { label: 'user.excited', value: 0 },
      { label: 'user.likeagent', value: 0 },
      { label: 'user.testing', value: 0 },
      { label: 'user.lovesagent', value: 0 },
      { label: 'user.needsadvice', value: 0 }
    ]
  }

  componentDidMount() {
    toggleWidget();
  }


  handleNewUserMessage = async (msg) => {
    try {
      console.log(`${this.SERVER_URL}?message=${msg}`)
      const res = await axios.get(`${this.SERVER_URL}?message=${msg}`, {
        'mode': 'no-cors',  // fuck cors
        'headers': {
          'Content-Type': 'application/json'
        },
      })
      const { response } = res.data;
      console.log(res.data)
      addResponseMessage(`${response}`)
    } catch (e) {
      console.log(e)
      addResponseMessage(`Error, please try again`)
    }
  }


  render() {
    return (
      <Grid container>
      <Grid item>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Chat with me!"
          subtitle="I can respond to most conversational input."
          fullScreenMode={true}
          showCloseButton={false}
        />
      </Grid>
      <Grid item>
      Hello there
      </Grid>
      </Grid>
    );
  }
  
}

export default App;
