import React, {Component} from 'react'
import { Button, Card, Image, Icon, Statistic, Grid } from 'semantic-ui-react'

class PatientCard extends Component {

  render() {
    return (
      <div>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <Statistic.Group>
                <Statistic size='mini'>
                  <Statistic.Value>
                    Patient Name
                  </Statistic.Value>
                  <Statistic.Label>
                    <Icon name='id card outline'/>
                  </Statistic.Label>
                </Statistic>
                <Statistic label='Acuity Average' float='right' size='mini' value={this.props.nurse.id}/>
              </Statistic.Group>
            </Card.Header>
          </Card.Content>
        </Card>
      </div>
    );
  }
}


export default PatientCard;
