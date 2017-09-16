import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNurses } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import  PatientCard from './patient_card';
import { Button, Card, Image, Grid } from 'semantic-ui-react';



class NurseContainer extends Component {
  componentDidMount() {
     this.props.fetchNurses();
  }

  renderNurses() {
    return _.map(this.props.nurses, nurse=>{
      return <PatientCard nurse={nurse}/>
    });
  }

  render() {
    return (
      <div>
        <h3><Link to="/patients/1">Patients</Link></h3>
        <Grid.Row>
          <Card.Group itemsPerRow='2'>
            {this.renderNurses()}
          </Card.Group>
        </Grid.Row>

      </div>
    );
  }
}
function mapStatetoProps(state){
  return { nurses:state.nurses}
}


//wires up fetchNurses to be a prop as action creator for component
export default connect(mapStatetoProps, { fetchNurses })(NurseContainer);
