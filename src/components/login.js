import React, { Component } from 'react';
import { Button, Checkbox, Container, Form, Grid, Icon, Image, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Login extends Component {
  render(){
    return (
      <Container fluid className='login-container'>
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment.Group>
              <Segment textAlign='center' color='blue' inverted>
                <Image spaced verticalAlign='middle' size='mini' src='https://image.flaticon.com/icons/svg/172/172825.svg' />
                Welcome to ChargeNurse!
              </Segment>
              <Segment>
                <Form>
                  <Form.Field>
                    <label>Hospital ID</label>
                    <input placeholder='Please enter your Hospital ID' />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                  </Form.Field>
                  <Link to="/assign">
                    <Button color='teal' onClick={this.goToApp}>
                      Login
                      <Icon name='arrow right'></Icon>
                    </Button>
                  </Link>
                </Form>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Login;
