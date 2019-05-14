import React, {Component} from 'react';
import {Button,TextField, FormControl} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'


export default class ChatForm extends Component {

    constructor(props, context){
        super(props,context);
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <form>
                    <TextField
                    id="standard-textarea"
                    label="With placeholder multiline"
                    placeholder="Placeholder"
                    multiline
                    margin="normal"
                    />

                    <Button variant="contained" color="primary">
                        Send
                        <SendIcon/>
                    </Button>
                </form>
            </div>
        );
    }

}
