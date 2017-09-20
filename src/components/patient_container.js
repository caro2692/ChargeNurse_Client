import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPatients, assignPatient } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import  PatientCardDrop from './patient_card_wdrop';
import { Button, Card, Header, Image, Grid } from 'semantic-ui-react';



class PatientContainer extends Component {
  componentDidMount() {
     this.props.fetchPatients();
  }

  renderPatients() {
    return _.map(_.filter(this.props.patients,'assigned', '0'), patient=>{
    //return _.map(this.props.patients, patient=>{
      return <PatientCardDrop key={patient.id} assignPatient={this.props.assignPatient} patients={this.props.patients} patient={patient} nurses={this.props.nurses}/>
    });
  }

  render() {
    return (
      <div>
        <Header as='h3' textAlign='center' divided>Patients</Header>
        <Card.Group itemsPerRow='2'>
          {this.renderPatients()}
        </Card.Group>
      </div>
    );
  }
}
function mapStatetoProps(state){
  return { nurses:state.nurses,
        patients:state.patients}
}


//wires up fetchNurses to be a prop as action creator for component
export default connect(mapStatetoProps, { fetchPatients, assignPatient })(PatientContainer);
