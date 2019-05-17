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

    this.colorPalette = {
      "light-red": {
        backgroundColor: "#ff5d4f",
        textColor: "#F6F6F6"
      },
      "light-orange": {
        backgroundColor: "#ff9e4f",
        textColor: "#222222"
      },
      "light-yellow": {
        backgroundColor: "#ffd54f",
        textColor: "#444444"
      },
      "lime-green": {
        backgroundColor: "#d0ff4f",
        textColor: "#666666"
      },
      "green": {
        backgroundColor: "#64cc3f",
        textColor: "#FFFFFF"
      }
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
      // sentiment_value (range): -1 to 1
      // -1: sad
      //  0: neutral
      //  1: happy
      //change color based on sentiment value
      let color = "";
      if (sentiment.isBetween(-1, -0.5)) {
        color = "light-red";
      }
      else if (sentiment.isBetween(-0.5, 0)) {
        color = "light-orange";
      }
      else if (sentiment === 0) {
        color = "light-yellow"
      }
      else if (sentiment.isBetween(0, 0.5)) {
        color = "lime-green";
      }
      else if (sentiment.isBetween(0.5, 1)) {
        color = "green";
      }

      document.getElementsByClassName('rcw-header')[0].style.backgroundColor = this.colorPalette[color].backgroundColor;
      document.getElementsByClassName('rcw-header')[0].style.color = this.colorPalette[color].textColor;
      
      addResponseMessage(`${response}`)
    } catch (e) {
      console.error("Error in handleNewUserMessage:", e)

      await addResponseMessage(`Failed to connect to the server. Make sure it's running and try again`)
      
      // Bold red
      document.getElementsByClassName('rcw-header')[0].style.backgroundColor = "#FF0000";
      document.getElementsByClassName('rcw-header')[0].style.color = "#FFFFFF";
      document.getElementsByClassName('rcw-sender')[0].style.backgroundColor = "#FF0000";
      document.getElementsByClassName('rcw-new-message')[0].style.backgroundColor = "#FF0000";
      document.getElementsByClassName('rcw-send')[0].style.backgroundColor = "#FF0000";

    }


  }


  render() {
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
