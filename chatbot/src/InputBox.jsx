import React, { Component } from 'react';
import { TextField } from '@material-ui/core';


export default class InputBox extends Component {
	constructor(props, context) {
		super(props, context);

	}

	render() {
		const { message } = this.props;
		return(
			<div>
	        	<TextField
		          id="standard-textarea"
		          label="With placeholder multiline"
		          placeholder="Placeholder"
		          multiline
		          margin="normal"
		        />
			</div>
		)
	}
}