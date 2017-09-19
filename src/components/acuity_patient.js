import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import { acuityRatingColor } from '../public/constants'

let math = require('mathjs');

class PatientAcuity extends Component {

  render(){
    return (
      <Label circular className={acuityRatingColor(this.props.patient.acuity_avg)}>
        {this.props.patient.acuity_avg}
      </Label>
    )
  }
}

export default PatientAcuity;
