import React, { Component } from 'react';
import { Container, Grid, Menu, Segment, Rating } from 'semantic-ui-react'


class SRating extends Component {
  render(){
    return (
      <div>
        <Menu color='blue' size='big' inverted secondary className='nav-bar'>
          <Menu.Item>
            <img src='https://image.flaticon.com/icons/svg/172/172825.svg' />
            ChargeNurse
          </Menu.Item>
        </Menu>
        <Container fluid className='login-container'>
          <Grid centered columns={2}>
            <Grid.Column>
              <Segment>
                <h3>
                  How would you rate the psychosocial/family needs of patient 1?
                </h3>
                <Rating icon='heart' defaultRating={1} maxRating={5} />
                <h3>
                  How would you rate the hands on care needed for patient 1?
                </h3>
                <Rating icon='heart' defaultRating={1} maxRating={5} />
                <h3>
                  How would you rate the education needed for patient 1?
                </h3>
                <Rating icon='heart' defaultRating={1} maxRating={5} />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default SRating;
