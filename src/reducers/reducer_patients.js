import _ from 'lodash';
import { FETCH_PATIENTS } from '../actions';

export default function(state = {}, action) {
  switch(action.type){
  case FETCH_PATIENTS:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
