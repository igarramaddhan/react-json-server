import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router';
import PostList from '../components/PostList';
import Title from '../components/Title';
import usePosts from '../hooks/usePosts';

const SecondPage = (props) => {
  const {slug} = useParams();
  const {data, error, isLoading, refetch} = usePosts();
  console.log('>> adf', {data});

  // useEffect(() => {
  //   if (!isLoading && !data) {
  //     refetch();
  //   }
  // }, [data, isLoading, refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error gan</div>;
  if (!data) return null;

  return (
    <div>
      <Title title="Second Page" />
      <PostList posts={data.data} />
      {slug && slug === 'create' ? <button>Create</button> : null}
    </div>
  );
};

export default SecondPage;
