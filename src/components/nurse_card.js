import _ from 'lodash';
import React, {Component} from 'react'
import { Button, Card, Image, Icon, Label, Statistic, Segment, Grid } from 'semantic-ui-react'

import  PatientCard from './patient_card';

class NurseCard extends Component {
  renderPatients() {
    return _.map(this.props.assigned_patients, patient=>{
      return <PatientCard patient={patient}></PatientCard >
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
