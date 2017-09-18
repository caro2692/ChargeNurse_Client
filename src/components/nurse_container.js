import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNurses, updateAssignment, deleteAssignment } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import  NurseCard from './nurse_card';
import { Button, Card, Image } from 'semantic-ui-react';



class NurseContainer extends Component {
  componentDidMount() {
     this.props.fetchNurses();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'newValue');
  }
  renderNurses() {
    return _.map(this.props.nurses, nurse=>{
      //let patients = _.pickBy(this.props.patients, [1,2])
      return <NurseCard key={nurse.id} nurse={nurse} updateAssignment={this.props.updateAssignment} deleteAssignment={this.props.deleteAssignment} assigned_patients={_.pick(this.props.patients, nurse.patients)} nurses={this.props.nurses}/>
    });
  }

  render() {
    return (
      <div>
        <h3><Link to="/nurses/1">Nurses</Link></h3>
          {this.renderNurses()}
      </div>
    );
  }
}
function mapStatetoProps(state){
  return { nurses:state.nurses,
          patients: state.patients}
}


//wires up fetchNurses to be a prop as action creator for component
export default connect(mapStatetoProps, { fetchNurses, updateAssignment, deleteAssignment })(NurseContainer);
