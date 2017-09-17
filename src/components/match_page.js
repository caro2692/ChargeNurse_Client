import React, {Component} from 'react'
import { Grid, Segment} from 'semantic-ui-react'

import NurseContainer from './nurse_container';
import PatientContainer from './patient_container';

class MatchPage extends Component {

  render() {
    return (
      <div>
        <Grid columns={2} divided>
          <Grid.Column width={5}>
            <PatientContainer/>
          </Grid.Column>
          <Grid.Column width={11}>
            <NurseContainer/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export default MatchPage;
