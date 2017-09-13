import _ from 'lodash';
import { FETCH_NURSES } from '../actions';

export default function(state = {}, action) {
  switch(action.type){
  case FETCH_NURSES:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
