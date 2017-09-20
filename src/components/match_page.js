import React, {Component} from 'react'
import { Container, Grid, Icon, Menu, Segment} from 'semantic-ui-react'

import NurseContainer from './nurse_container';
import PatientContainer from './patient_container';

class MatchPage extends Component {

  render() {
    return (
      <Container fluid>
        <Menu color='blue' size='big' inverted secondary className='nav-bar'>
          <Menu.Item>
            <img src='https://image.flaticon.com/icons/svg/172/172825.svg' />
            ChargeNurse
          </Menu.Item>
        </Menu>
        <Grid columns={2} divided padded='horizontally' relaxed className='main-grid'>
          <Grid.Column width={6} className='patient-column'>
            <PatientContainer/>
          </Grid.Column>
          <Grid.Column width={10} className='nurse-column'>
            <NurseContainer/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}


export default MatchPage;
