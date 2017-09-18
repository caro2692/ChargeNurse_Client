import React, { Component } from 'react';
import {Label} from 'semantic-ui-react';

let math = require('mathjs');

class PatientAcuity extends Component {

  render(){
    return (
      <Label color='red' circular>
        {this.props.patient.calculateSAcuity()}
      </Label>
    )
  }
}

export default PatientAcuity;
