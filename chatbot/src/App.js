import React, { Component } from 'react';
import axios from 'axios';

import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './css/styles.css'

import { Grid,Paper } from '@material-ui/core';
import About from './About'


Number.prototype.isBetween = function (low, high) {
  return this >= low && this < high
}
class App extends Component {
  constructor(props, context) {
    super(props, context);
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
    ];
    this.state = {
      sentiment_value:-1
    }
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

      const { response, sentiment } = res.data;
      this.setState({
        sentiment_value: sentiment
      });
      // console.log(res.data)


      // sentiment_value (range): -1 to 1
      // -1: sad
      //  0: neutral
      //  1: happy
      //change color based on sentiment_value
      let color = "";
      if (sentiment.isBetween(-1, -0.5)) {
        color = "#ff5d4f";
      }
      else if (sentiment.isBetween(-0.5, 0)) {
        color = "#ff9e4f";
      }
      else if (sentiment === 0) {
        color = "#ffd54f"
      }
      else if (sentiment.isBetween(0, 0.5)) {
        color = "#d0ff4f";
      }
      else if (sentiment.isBetween(0.5, 1)) {
        color = "#7dff4f";
      }
      document.getElementsByClassName('rcw-messages-container')[0].style.backgroundColor = color;

      addResponseMessage(`${response}`)
    } catch (e) {
      console.error("Error in handleNewUserMessage:", e)
      addResponseMessage(`Error, please try again`)
    }


  }


  render() {
    // Styling TODOS:
    //  - Center and set % width for chat window
    //  - On the sides, we can show emojis/colors
    //  - Maybe make the text larger if that's not too hard 
    return (

        <Grid container spacing={24}>
          <Grid item xs={6}>
            <About/>            
          </Grid>
          <Grid item xs={6}>
            <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            title="Chat with me!"
            subtitle="I can respond to most conversational input."
            fullScreenMode={false}
            showCloseButton={false}
          />
          </Grid>



        </Grid>


    );
  }
  
}

export default App;
