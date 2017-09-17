import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPatients } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import  PatientCard from './patient_card';
import { Button, Card, Image, Grid } from 'semantic-ui-react';



class PatientContainer extends Component {
  componentDidMount() {
     this.props.fetchPatients();
  }

  renderPatients() {
    return _.map(this.props.patients, patient=>{
      return <PatientCard patient={patient}/>
    });
  }

  render() {
    return (
      <div>
        <h3><Link to="/patients/1">Patients</Link></h3>
        <Grid.Row>
          <Card.Group itemsPerRow='2'>
            {this.renderPatients()}
          </Card.Group>
        </Grid.Row>

      </div>
    );
  }
}
function mapStatetoProps(state){
  return { nurses:state.nurses,
        patients:state.patients}
}


//wires up fetchNurses to be a prop as action creator for component
export default connect(mapStatetoProps, { fetchPatients })(PatientContainer);
