import axios from 'axios';
export const FETCH_NURSES = 'fetch_nurses';
export const FETCH_PATIENTS = 'fetch_patients';

const ROOT_URL = 'https://radiant-cove-91102.herokuapp.com/api';

export function fetchNurses() {
  console.log('got here');
  const request = axios.get(`${ROOT_URL}/nurses/shift/2`);

  return {
    type: FETCH_NURSES,
    payload: request
  };
}

export function fetchPatients() {
  const request = axios.get(`${ROOT_URL}/patients/shift/1`);

  return {
    type: FETCH_PATIENTS,
    payload: request
  };
}

export function assignPatient(assignment) {
  return (dispatch) => axios.post(`${ROOT_URL}/nurses/assignment`, assignment)
  .then(() => {
    dispatch(fetchNurses());
    dispatch(fetchPatients());
  }).catch((error) => {
    console.log(error);
  });
}

export function deleteAssignment(assignment) {
  return (dispatch) => axios.delete(`${ROOT_URL}/nurses/assignment`, {params: assignment})
  .then(() => {
    dispatch(fetchNurses());
    dispatch(fetchPatients());
  }).catch((error) => {
    console.log(error);
  });
}


export function updateAssignment(assignment) {
  return (dispatch) => axios.put(`${ROOT_URL}/nurses/assignment`, assignment)
  .then(() => {
    dispatch(fetchNurses());
    dispatch(fetchPatients());
  }).catch((error) => {
    console.log(error);
  });
}
