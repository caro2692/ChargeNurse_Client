import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNurses } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

class Match extends Component {
  componentDidMount() {
     this.props.fetchNurses();
  }

  renderNurses() {
    return _.map(this.props.nurses, nurse=>{
      return (
        <Card>
          <Card.Content>
            <Card.Header>
              Header
              {nurse.first_name}
            </Card.Header>
          </Card.Content>
        </Card>
      );
    });
  }
  render() {
    return (
      <div>
        <h3><Link to="/nurses/1">Nurses</Link></h3>
        <Card.group>
          {this.renderNurses()}
        </Card.group>
      </div>
    );
  }
}
function mapStatetoProps(state){
  return { nurses:state.nurses}
}


//wires up fetchNurses to be a prop as action creator for component
export default connect(mapStatetoProps, { fetchNurses })(Match);
