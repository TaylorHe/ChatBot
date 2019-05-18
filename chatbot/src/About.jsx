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

                        <Card>
                            <CardHeader
                                title= {"Welcome to ChatBot"}
                            />
                        </Card>
                    </Grid>
              {/* <p>This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. This is a sentence. This is another sentence that is longer than the previous. </p> */}
                    <Grid item xs={12}>

                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h3">
                                    Sentiment Analysis
                                </Typography>

                                <p>This ChatBot measures sentiment in the messages it receives. Based off the sentiment (negative to positive), the background color will vary accordingly.</p>
                                <table style={{width:'100%'}}>
                                    <tr style={{backgroundColor:'#ff5d4f'}}>
                                        Very Negative
                                    </tr>
                                    <tr style={{backgroundColor:'#ff9e4f'}}>
                                        Slightly Negative
                                    </tr>
                                    <tr style={{backgroundColor:'#ffd54f'}}>
                                        Neutral
                                    </tr>
                                    <tr style={{backgroundColor:'#d0ff4f'}}>
                                        Slightly Positive
                                    </tr>
                                    <tr style={{backgroundColor:'#7dff4f'}}>
                                        Very Positive
                                    </tr>
                                </table>
                            </CardContent>
                        </Card>
                    </Grid>
                
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h3">
                                    Technologies Used
                                </Typography>

                            <Grid container spacing={8}>
                                <Grid item xs={6}>
                                    Gulp.js
                                </Grid>
                                <Grid item xs={6}>
                                    Material-UI
                                </Grid>

                                <Grid item xs={6}>
                                    Sass
                                </Grid>
                                
                                <Grid item xs={6}>
                                    NLP.js
                                </Grid>
                                <Grid item xs={6}>
                                    Redux
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