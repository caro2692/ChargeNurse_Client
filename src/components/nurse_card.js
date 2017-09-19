import _ from 'lodash';
import React, {Component} from 'react'
import { Button, Card, Image, Icon, Label, List, Statistic, Segment, Grid } from 'semantic-ui-react'
let math = require('mathjs');
import { acuityRatingColor, acuityNameColor } from '../public/constants'
import  PatientCardDrop from './patient_card_wdrop';
let moment  = require('moment');

class NurseCard extends Component {
  renderPatients() {
    return _.map(this.props.assigned_patients, patient=>{
      return <PatientCardDrop key={patient.id} updateAssignment={this.props.updateAssignment} deleteAssignment={this.props.deleteAssignment} assignPatient={this.props.assignPatient} patient={patient} nurses={this.props.nurses} assignednurse={this.props.nurse.id}/>
    });
  }

  calculateAveragePatientSAcuity() {
    let acuities = _.map(this.props.assigned_patients, p => p.acuity_avg);
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
      return (
        <List.Item>
          <List.Icon name='circle thin' color={acuityNameColor(acuity)} />
          <List.Content>{acuity}</List.Content>
        </List.Item>
      )
    })

  }

  renderNurseTags() {
    let time_from_now = moment(this.props.nurse.unit_nurse_since).fromNow();
    if(!time_from_now.includes('year')){
      return (
        <List.Item>
          <List.Icon name='circle thin' color='yellow' />
          <List.Content>New Nurse</List.Content>
        </List.Item>
      )
    }
  }

  renderPreceptor() {
    if(this.props.nurse.is_preceptor){
      return (
        <List.Item>
          <List.Icon name='circle thin' color='yellow' />
          <List.Content>Preceptor</List.Content>
        </List.Item>
      )
    }
  }

  render() {
    return (
      <Segment.Group className='nurse-card'>
        <Segment secondary>
          <h3>
            <Label circular size='large' className={acuityRatingColor(this.calculateAveragePatientSAcuity())}>
              {this.calculateAveragePatientSAcuity()}
            </Label>
            {this.props.nurse.first_name}
            <List horizontal size='small'>
              {this.renderNurseTags()}
              {this.renderPreceptor()}
            </List>
          </h3>
          <List horizontal size='small'>
            {this.renderOAcuityTags()}
          </List>
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
