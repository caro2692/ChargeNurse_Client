import React, {Component} from 'react'
import { Button, Card, Image, Label, List, Icon, Statistic, Grid } from 'semantic-ui-react'

class PatientCard extends Component {

  render() {
    const colors = ['red', 'blue']
    return (
      <Card fluid className='patient-card'>
        <Card.Content>
          <Card.Header>
            <Label>
              <Icon name='hotel' /> 3
            </Label>
            <div className='right floated acuity-rating'>
              <Label color='red' circular>
                {this.props.patient.id}
              </Label>
              <div className='label-text'>Acuity</div>
            </div>
          </Card.Header>
          <Card.Description>
            <List>
              <List.Item>
                <List.Icon name='yellow circle' />
                <List.Content>Bone Marrow</List.Content>
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}


export default PatientCard;
