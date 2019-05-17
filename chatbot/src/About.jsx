import React, {Component} from 'react';
import { Grid,Paper } from '@material-ui/core';

export default class About extends Component {
    constructor(props, context){
        super(props,context);
        this.state = {
            
        }
    }


    render(){
        return (
            <Paper className={"aboutCSS"}>
              <h1> Welcome to our chatbot </h1>
              <p>This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. </p>
            </Paper>
        );
    }


}