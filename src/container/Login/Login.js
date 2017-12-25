import React, { Component } from "react";
import { Grid, Segment, Header, Form, Message, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <Grid textAlign="center">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Segment stacked>
                        <Header as='h2' color='orange' textAlign='center'>Login</Header>
                        <Form size='large'>

                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='orange' fluid size='large'>Login</Button>

                        </Form>
                    </Segment>
                    <Message>
                        New to us? <Link to="/signUp">Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;