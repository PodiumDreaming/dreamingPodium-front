import axios from 'axios';
import * as config from '../../config';

const API = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
