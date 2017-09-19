import React, { Component } from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

import { acuityRatingColor } from '../public/constants'

class SummaryBar extends Component {
  render(){
    return (
      <Segment inverted className='summary-bar'>
        <Statistic.Group widths='three' size='small' inverted>
          <Statistic>
            <Statistic.Value>21</Statistic.Value>
            <Statistic.Label>Patients</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>7</Statistic.Value>
            <Statistic.Label>Nurses</Statistic.Label>
          </Statistic>
          <Statistic color={acuityRatingColor(3.5)} inverted>
            <Statistic.Value>3.5</Statistic.Value>
            <Statistic.Label>Avg Acuity</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    )
  }
}

export default SummaryBar;
