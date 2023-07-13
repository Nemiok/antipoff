import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://reqres.in/api'
const REQUEST_TIMEOUT = 5000;

const createCoreAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

export const coreAPI = createCoreAPI();