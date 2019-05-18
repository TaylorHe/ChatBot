import React, {Component} from 'react';
import { Grid,Paper, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'; 
import Typography from '@material-ui/core/Typography';

export default class About extends Component {
    constructor(props, context){
        super(props,context);
        this.state = {
            
        }
    }


    render(){
        return (
            <Paper className={"aboutCSS"}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Card style={{maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                            <CardHeader
                                title= {"Welcome to ChatBot"}
                            />
                        </Card>
                    </Grid>
              {/* <p>This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. </p> */}
                    <Grid item xs={12}>
                        <Card style={{maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                            <CardHeader title="Sentiment Analysis"/>
                            <CardContent style={{marginTop: -40}}>
                                <p>This ChatBot measures sentiment in the messages it receives. Based off the sentiment (negative to positive), the background color will vary accordingly.</p>
                                <table style={{width:'100%'}}>
                                    <tr style={{verticalAlign: 'middle', height: '2em', backgroundColor:'#ff5d4f'}}>
                                        <td>Very Negative</td>
                                    </tr>
                                    <tr style={{verticalAlign: 'middle', height: '2em', backgroundColor:'#ff9e4f'}}>
                                        <td>Slightly Negative</td>
                                    </tr>
                                    <tr style={{verticalAlign: 'middle', height: '2em', backgroundColor:'#ffd54f'}}>
                                        <td>Neutral</td>
                                    </tr>
                                    <tr style={{verticalAlign: 'middle', height: '2em', backgroundColor:'#d0ff4f'}}>
                                        <td>Slightly Positive</td>
                                    </tr>
                                    <tr style={{verticalAlign: 'middle', height: '2em', backgroundColor:'#7dff4f'}}>
                                        <td>Very Positive</td>
                                    </tr>
                                </table>
                            </CardContent>
                        </Card>
                    </Grid>
                
                    <Grid item xs={12}>
                        <Card style={{maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                            <CardHeader title='Technologies Used' />
                            <CardContent style={{marginTop: -20}}>
                            <Grid container spacing={8}>
                                <Grid item xs={6}>
                                    Gulp.js
                                </Grid>
                                <Grid item xs={6}>
                                    Material-UI
                                </Grid>

                                <Grid item xs={6}>
                                    SASS
                                </Grid>
                                <Grid item xs={6}>
                                    NLP.js
                                </Grid>
                                <Grid item xs={6}>
                                    Redis
                                </Grid>
                                <Grid item xs={6}>
                                    React.js
                                </Grid>                                

                            </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
            </Grid>
            </Paper>
        );
    }


}