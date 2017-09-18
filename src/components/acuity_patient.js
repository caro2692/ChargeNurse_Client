import React, { Component } from 'react';
import {Label} from 'semantic-ui-react';

let math = require('mathjs');

class PatientAcuity extends Component {
  calculateOAcuity() {
    
  }

  calculateSAcuity() {
    let sAcuity = 0;
    let counter = 0;
    for(let i=0; i<3; i++){
      if(this.props.patient.sacuity[i]){
        sAcuity = math.add(this.props.patient.sacuity[i].value, sAcuity)
        counter ++;
      }
    }
    let sAcuity_avg = math.divide(sAcuity,counter);
    return math.round(sAcuity_avg, 1);
  }

  calculateTAcuity() {

  }

  render(){
    return (
      <Label color='red' circular>
        {this.calculateSAcuity()}
      </Label>
    )
  }
}

export default PatientAcuity;
