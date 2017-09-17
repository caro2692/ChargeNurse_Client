import { combineReducers } from 'redux';
import NursesReducer from './reducer_nurses';
import PatientsReducer from './reducer_patients';

const rootReducer = combineReducers({
  nurses: NursesReducer,
  patients: PatientsReducer
});

export default rootReducer;
