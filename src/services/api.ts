import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://reqres.in/api'
const REQUEST_TIMEOUT = 5000;

export const createCoreAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });