import axios from 'axios';
export const FETCH_NURSES = 'fetch_nurses';

const ROOT_URL = 'https://radiant-cove-91102.herokuapp.com/api';

export function fetchNurses() {
  const request = axios.get(`${ROOT_URL}/nurses/shift/2`);

  return {
    type: FETCH_NURSES,
    payload: request
  };
}
