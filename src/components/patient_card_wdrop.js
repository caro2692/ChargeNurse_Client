import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Card, Dropdown, Grid, Icon, Image, Label, List, Statistic} from 'semantic-ui-react'
import _ from 'lodash';
import { acuityNameColor } from '../public/constants'
import PatientAcuity from './acuity_patient';

class PatientCardDrop extends Component {
  constructor(props) {
    super(props);
    this.assignPatient = this.assignPatient.bind(this);
    this.reassignPatient = this.reassignPatient.bind(this);
  }
  assignPatient(event, data) {
    const request_data = {
      shift_id: 2,
      nurse_id: data.value,
      patient_id: this.props.patient.id
    };
    return this.props.assignPatient(request_data);
  }

  reassignPatient(event, data){
    //if 0, just delete
    //else, delete and re-assign
    const delete_data = {
      shift_id: 2,
      nurse_id: this.props.assignednurse,
      patient_id: this.props.patient.id
    };

    const update_data = {
      shift_id: 2,
      nurse_id: data.value,
      patient_id: this.props.patient.id
    }
    if(data.value=="0"){
      return this.props.deleteAssignment(delete_data);
    }else{
      return this.props.updateAssignment(update_data)
    }
  }

  renderNurseOptions() {
    let nurse_dropdown = [];
    _.forIn(this.props.nurses, function(value_v, key_k) {
        let nurse = {key: key_k, value: key_k, text: value_v.first_name}
        nurse_dropdown.push(nurse);
    });
    //if they are already assigned to a nurse, have option to re-assign
    if (this.props.patient.assigned=="1"){
      let nurse_dropdown_copy = nurse_dropdown;
      nurse_dropdown.push({key: "0", value: "0", text: "Unassign patient"});
      return <Dropdown text='Re-assign nurse' selectOnBlur={false} onChange={this.reassignPatient} options={nurse_dropdown_copy}/>
    } else {
      return <Dropdown text='Assign nurse' selectOnBlur={false} onChange={this.assignPatient} options={nurse_dropdown}/>
    }
  }

  renderOAcuityTags() {
    //  let return_trues = function(acuity){return _.matchesProperty('value', 'true')}
      return this.props.patient.oacuity.map((acuity) => {
        if (acuity.value=="true") {
          return (
            <List.Item>
              <List.Icon name='circle thin' color={acuityNameColor(acuity.name)} />
              <List.Content>{acuity.name}</List.Content>
            </List.Item>
          )
        }
      })
  }

  renderAcuity() {
    return <PatientAcuity patient={this.props.patient}></PatientAcuity>
  }
  render() {
    const colors = ['red', 'blue']
    return (
        <Card fluid className='patient-card'>
          <Card.Content>
            <Card.Header>
              <Icon name='hotel' /> {this.props.patient.bed_number}
              <div className='right floated acuity-rating'>
                {this.renderAcuity()}
              </div>
            </Card.Header>
            <Card.Description>
              <List size='tiny'>
                {this.renderOAcuityTags()}
              </List>
              <div className='text right'>
                {this.renderNurseOptions()}
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}


export default PatientCardDrop;
