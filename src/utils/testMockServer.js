import axios from 'axios';

const testClient = axios.create({
  baseURL: 'https://5d7ad059-e59c-4c34-8f32-122d044b89b2.mock.pstmn.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default testClient;
