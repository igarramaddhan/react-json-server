import {useQuery, UseQueryOptions} from 'react-query';
import client from '../utils/axiosClient';

const usePosts = (options: UseQueryOptions = {}) =>
  useQuery('posts', () => client.get('/posts'), {...options});
// fetch('http://localhost:5000/posts').then((response) => response.json())

export default usePosts;
