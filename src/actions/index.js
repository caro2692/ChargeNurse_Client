import axios from 'axios';
export const FETCH_NURSES = 'fetch_nurses';
export const FETCH_PATIENTS = 'fetch_patients';

const ROOT_URL = 'https://radiant-cove-91102.herokuapp.com/api';

export function fetchNurses() {
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
