import axios from 'axios';
export const FETCH_NURSES = 'fetch_nurses';
export const FETCH_PATIENTS = 'fetch_patients';

let math = require('mathjs');

const ROOT_URL = 'https://radiant-cove-91102.herokuapp.com/api';

export function fetchNurses() {
  const request = axios.get(`${ROOT_URL}/nurses/shift/2`);

  return {
    type: FETCH_NURSES,
    payload: request
  };
}

export function fetchPatients() {
  const request = axios.request({
    method: 'GET',
    url: `${ROOT_URL}/patients/shift/1`,
    responseType: 'json',
    transformResponse: [function(data) {
      for(var patient of data) {
        patient.calculateSAcuity = function() {
          let sAcuity = 0;
          let counter = 0;
          for(let i=0; i<3; i++){
            if(this.sacuity[i]){
              sAcuity = math.add(this.sacuity[i].value, sAcuity);
              counter ++;
            }
          }
          let sAcuity_avg = math.divide(sAcuity,counter);
          return sAcuity_avg.toFixed(1);
        };
      }
      patient.calculateSAcuity = patient.calculateSAcuity.bind(patient);
    return data;
  }]
  });

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
