import _ from 'lodash';
import React, {Component} from 'react'
import { Button, Card, Image, Icon, Label, Statistic, Segment, Grid } from 'semantic-ui-react'

import  PatientCardDrop from './patient_card_wdrop';

class NurseCard extends Component {
  renderPatients() {
    return _.map(this.props.assigned_patients, patient=>{
      return <PatientCardDrop key={patient.id} updateAssignment={this.props.updateAssignment} deleteAssignment={this.props.deleteAssignment} assignPatient={this.props.assignPatient} patient={patient} nurses={this.props.nurses} assignednurse={this.props.nurse.id}/>
    });
  }

  render() {
    return (
      <Segment.Group>
        <Segment secondary>
          <h3>
            {this.props.nurse.first_name}
            <Label color='red' floated='right' circular>
              {this.props.nurse.id}
            </Label>
          </h3>
        </Segment>
        <Segment>
          <Card.Group itemsPerRow='3'>
            {this.renderPatients()}
          </Card.Group>
        </Segment>
      </Segment.Group>
    );
  }
}


export default NurseCard;
