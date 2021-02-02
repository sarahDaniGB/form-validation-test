import axios from 'axios';

import { baseUrl } from './endpoints.util';

export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type'
  },
  params: {},
  data: {},
});
