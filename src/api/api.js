// Basic CRUD:
// index  <- GET all items
// single <- GET single item by id
// create <- POST an item
// update <- PUT data to an item
// remove <- DELETE an item
// Specific:
// singleByEmail
// removeAll
import axios from 'axios';

export const END_POINTS = {
  BASE:
    'http://assets-production.applicaster.com/applicaster-employees/israel_team/Elad/assignment/',
};

const apiClient = axios.create({
  baseURL: END_POINTS.BASE, // <- ENV variable
});

apiClient.interceptors.request.use(
  (config) => ({
    ...config,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error.response.data),
);

const {get, post, put, delete: destroy} = apiClient;
export {get, post, put, destroy};
