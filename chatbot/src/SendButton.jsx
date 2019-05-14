import React, {Component} from 'react';
import {Button} from '@material-ui/core/Button';

export default class SendButton extends Component {

    constructor(props, context){
        super(props,context);
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={ () => {console.log("sent message!")}}>
                    Send
                </Button>
            </div>
        )

    }

}

