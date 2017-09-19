import React, {Component} from 'react'
import { Container, Grid, Icon, Menu, Segment} from 'semantic-ui-react'

import NurseContainer from './nurse_container';
import PatientContainer from './patient_container';

class MatchPage extends Component {

  render() {
    return (
      <Container fluid>
        <Menu color='blue' size='large' inverted secondary className='nav-bar'>
          <Menu.Item>
            <Icon name='doctor' color='pink' circular inverted></Icon>
            ChargeNurse
          </Menu.Item>
        </Menu>
        <Grid columns={2} divided padded='horizontally' relaxed className='main-grid'>
          <Grid.Column width={5} className='patient-column'>
            <PatientContainer/>
          </Grid.Column>
          <Grid.Column width={11} className='nurse-column'>
            <NurseContainer/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}


export default MatchPage;
