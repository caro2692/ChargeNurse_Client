import React, { Component } from 'react';
import { Button, Checkbox, Form} from 'semantic-ui-react'
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';

class Login extends Component {
  render(){
    return (
      <Form>
        <Form.Field>
          <label>Hospital ID</label>
          <input placeholder='Please enter your Hospital ID' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder='Password' />
        </Form.Field>
        <Link to="/assign"><Button onClick={this.goToApp}>Login</Button></Link>
      </Form>
    )
  }
}

export default Login;
