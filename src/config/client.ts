import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});
