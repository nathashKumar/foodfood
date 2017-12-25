import React, { Component } from "react";
import { Grid, Segment, Header, Form, Message, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Signup extends Component {

	constructor(props){
		super(props);		
		this.state = {
			form: {
				email: "",
				name: "",
				mobileNo: "",
				password: "",
				confirmPassword: ""
			}
		};
	}

	/**
	 * REGISTERING USER
	 */
	signUp = (e) => {
		e.preventDefault();
		console.log(this.state.form);
	};
	
	render() {
		return (
			<Grid textAlign="center">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Segment stacked>
						<Header as='h2' color='orange' textAlign='center'>Sign Up</Header>

						<Form size='large' onSubmit={this.signUp}>

							<Form.Input
								fluid
								icon='user'
								iconPosition='left'
								placeholder='E-mail address'
							/>

							<Form.Input
								fluid
								icon='mobile'
								iconPosition='left'
								placeholder='Mobile no.'
								type='number'
							/>

							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
							/>

							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Confirm Password'
								type='password'
							/>

							<Button color='orange' fluid size='large'>Create</Button>

						</Form>
					</Segment>
					<Message>
                        Already have an account? <Link to="/login">Login</Link>
					</Message>
				</Grid.Column>
			</Grid>
		);
	}

}

export default Signup;