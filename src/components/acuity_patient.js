import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import { calculateColor } from '../public/constants'

let math = require('mathjs');

class PatientAcuity extends Component {

  render(){
    return (
      <Label circular className={calculateColor(this.props.patient.calculateSAcuity())}>
        {this.props.patient.calculateSAcuity()}
      </Label>
    )
  }
}

export default PatientAcuity;
