import React, {Component} from 'react'
import { Button, Card, Image, Icon, Statistic, Grid } from 'semantic-ui-react'
import _ from 'lodash';

class NurseCard extends Component {
  renderPatients() {
    return _.map(this.props.assigned_patients, patient=>{
      return <div>{patient.bed_number}</div>
    });
  }

  render() {
    return (
      <div>
        <Grid.Row>
        <Card fluid>
          <Card.Content>
            <Statistic.Group>
              <Statistic size='mini'>
                <Statistic.Value>
                  {this.props.nurse.first_name}
                </Statistic.Value>
                <Statistic.Label>
                  <Icon name='id card outline'/>
                </Statistic.Label>
              </Statistic>
              <Statistic label='Acuity Average' float='right' size='mini' value={this.props.nurse.id}/>
            </Statistic.Group>
          </Card.Content>
          <Card.Content>
            <Grid textAlign='center' columns={3} divided>
              {this.renderPatients()}
              <Grid.Column>
                <Icon name='image'/>
              </Grid.Column>
              <Grid.Column>
                <Icon name='image'/>
              </Grid.Column>
              <Grid.Column>
                <Icon name='image'/>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
        </Grid.Row>
      </div>
    );
  }
}


export default NurseCard;
