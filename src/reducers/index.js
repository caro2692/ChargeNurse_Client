import { combineReducers } from 'redux';
import NursesReducer from './reducer_nurses';

const rootReducer = combineReducers({
  nurses: NursesReducer
});

export default rootReducer;
