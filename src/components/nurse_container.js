import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNurses, updateAssignment, deleteAssignment } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import  NurseCard from './nurse_card';
import { Segment } from 'semantic-ui-react';
import SummaryBar from './summary_bar'



class NurseContainer extends Component {
  componentDidMount() {
     this.props.fetchNurses();
  }
  renderNurses() {
    return _.map(this.props.nurses, nurse=>{
      //let patients = _.pickBy(this.props.patients, [1,2])
      return <NurseCard key={nurse.id} nurse={nurse} updateAssignment={this.props.updateAssignment} deleteAssignment={this.props.deleteAssignment} assigned_patients={_.pick(this.props.patients, nurse.patients)} patients={this.props.patients} nurses={this.props.nurses}/>
    });
  }

  renderSummaryBar(){
    return <SummaryBar patients={this.props.patients} nurses={this.props.nurses}></SummaryBar>
  }

  render() {
    return (
      <div>
        {this.renderSummaryBar()}
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
