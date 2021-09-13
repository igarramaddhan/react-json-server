import {useQuery} from 'react-query';

const TestPost = () => {
  const {data} = useQuery('posts');
  // console.log('>> for Test Post', {data});

  return <div>Test</div>;
};

export default TestPost;
