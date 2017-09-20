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
    let previous_nurse = {};
    let patient = this.props.patient;
    let patients = this.props.patients;
    this.props.patient.previous_nurses.map(nurse=>{
      previous_nurse[nurse.nurse_id] = nurse.shift_count;
    })
    //for each nurse on the shift loop through and determine what logic should be applied to their name
    _.forIn(this.props.nurses, function(value_v, key_k) {
        let class_name = '';
        let nurse_bmt_cert = value_v.oacuity.filter(acuity=>{
          return acuity.objective_acuity_id == "3";
        })
        //check if patient of interest has restrictions that should be checkeed for
        patient.oacuity.map((acuity) => {
          //if patient is bone marror patient, rule out nurses that aren't certified
          if(acuity.value=="true" && acuity.objective_acuity_id=="3"){
           if(nurse_bmt_cert[0].value=="false"){
             class_name = 'drop-down-badchoice';
           }
          }
          //if the patient is immune suppressed, check if nurse has any infectious patient assigned to
          if (acuity.value=="true" && acuity.objective_acuity_id=="4") {
            value_v.patients.forEach((p)=>{
              let overlapping_patient_infection = patients[p].oacuity.filter(acuity=>{
                return acuity.objective_acuity_id == "5";
              });
              if (overlapping_patient_infection[0].value == "true") {
                class_name = 'drop-down-badchoice';
              }
            });
            //grey out nurses that have Infectious patients
          }
          if (acuity.value=="true" && acuity.objective_acuity_id=="5") {
            value_v.patients.forEach((p)=>{
              let overlapping_patient_infection = patients[p].oacuity.filter(acuity=>{
                return acuity.objective_acuity_id == "4";
              });
              if (overlapping_patient_infection[0].value == "true") {
                class_name = 'drop-down-badchoice';
              }
            });
          }
        })
        let nurse = {key: value_v.id, value: value_v.id, text: value_v.first_name, description: previous_nurse[value_v.id], className:class_name}
        nurse_dropdown.push(nurse);
    });
    //add logic for shift history description
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
