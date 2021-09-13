import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  // example getting token from local storage;
  const token = 'test token';

  config.headers.token = token;

  return config;
});

client.interceptors.response.use(
  (data) => {
    // example getting token from local storage;
    console.log('>> response', {data});
    return data;
  },
  (error) => {
    window.location.href = 'http://localhost:3000/error';
    return error;
  }
);

export default client;
