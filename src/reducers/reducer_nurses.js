import _ from 'lodash';
import { FETCH_NURSES, ASSIGN_PATIENT } from '../actions';

export default function(state = {}, action) {
  switch(action.type){
  case FETCH_NURSES:
    return _.mapKeys(action.payload.data, 'id');
  case ASSIGN_PATIENT:
    return _.mapKeys(action.payload.data, 'id')
  default:
    return state;
  }
}
