import React, { Component } from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

import { acuityRatingColor } from '../public/constants'

let math = require('mathjs');

class SummaryBar extends Component {
  getPatientCount(){
    return Object.keys(this.props.patients).length
  }

  getNurseCount(){
    return Object.keys(this.props.nurses).length
  }

  getPatientAcuity(){
    let acuities = _.map(this.props.patients, p => p.acuity_avg);
    return acuities.length === 0 ? 0 : math.mean(acuities).toFixed(1);
  }

  render(){
    return (
      <Segment inverted className='summary-bar'>
        <Statistic.Group widths='three' size='small' inverted>
          <Statistic>
            <Statistic.Value>{this.getPatientCount()}</Statistic.Value>
            <Statistic.Label>Patients</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{this.getNurseCount()}</Statistic.Value>
            <Statistic.Label>Nurses</Statistic.Label>
          </Statistic>
          <Statistic color={acuityRatingColor(this.getPatientAcuity())} inverted>
            <Statistic.Value>{this.getPatientAcuity()}</Statistic.Value>
            <Statistic.Label>Avg Acuity</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    )
  }
}

export default SummaryBar;
