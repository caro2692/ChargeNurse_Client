import React, {Component} from 'react'
import { Button, Card, Image, Icon, Statistic, Grid } from 'semantic-ui-react'

class NurseCard extends Component {

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
