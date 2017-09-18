import _ from 'lodash';
import React, {Component} from 'react'
import { Button, Card, Image, Icon, Label, List, Statistic, Segment, Grid } from 'semantic-ui-react'
let math = require('mathjs');
import  PatientCardDrop from './patient_card_wdrop';

class NurseCard extends Component {
  renderPatients() {
    return _.map(this.props.assigned_patients, patient=>{
      return <PatientCardDrop key={patient.id} updateAssignment={this.props.updateAssignment} deleteAssignment={this.props.deleteAssignment} assignPatient={this.props.assignPatient} patient={patient} nurses={this.props.nurses} assignednurse={this.props.nurse.id}/>
    });
  }

  calculateAveragePatientSAcuity() {
    let acuities = _.map(this.props.assigned_patients, p => p.calculateSAcuity());
    return acuities.length === 0 ? 0 : math.mean(acuities).toFixed(1);
  }

  renderOAcuityTags() {
    let unique_acuities = {};
    _.map(this.props.assigned_patients, p => {
      p.oacuity.map(acuity=>{
        if(acuity.value=="true") {
          if (!unique_acuities.hasOwnProperty(acuity.objective_acuity_id)){
            unique_acuities[acuity.objective_acuity_id] = acuity.name;
          }
        }
      })
    })
    return _.map(unique_acuities, acuity=>{
      return <List.Item><List.Icon name='circle' color='yellow' /><List.Content>{acuity}</List.Content></List.Item>
    })

  }

  render() {
    return (
      <Segment.Group>
        <Segment secondary>
          <h3>
            {this.props.nurse.first_name}
            <br></br>
            <Label color='red' floated='right' circular>
              {this.calculateAveragePatientSAcuity()}
            </Label>
            <List horizontal>
              {this.renderOAcuityTags()}
            </List>
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
