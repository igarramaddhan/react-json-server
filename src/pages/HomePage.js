import {useState, useEffect} from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {Link} from 'react-router-dom';
import PostList from '../components/PostList';
import TestPost from '../components/TestPost';
import usePosts from '../hooks/usePosts';
import testClient from '../utils/testMockServer';

async function testMock() {
  try {
    const {data} = await testClient.get('/transaksi');
    console.log('>>', {data});
  } catch (error) {
    console.log('>> error', error);
  }
}

function HomePage() {
  const [value, setValue] = useState('');
  const [isAppLoading, setIsAppLoading] = useState(false);

  const client = useQueryClient();

  // const cache = client.getQueryCache();

  const {data, isLoading, error} = usePosts({staleTime: 2000});
  console.log('>>', {data});

  // console.log('>>', {posts});

  const {mutate, isLoading: addPostLoading} = useMutation(
    (post) =>
      fetch('http://localhost:5000/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    {
      onSuccess: (data) => {
        // refetch();
      },
    }
  );

  const debugFunction = () => {
    debugger;
    console.log('>> start');
    console.log('>> do some logic');
    console.log('>> end');
  };

  if (isAppLoading) return <div>Loading</div>;

  if (error) {
    return 'An error has occurred: ' + error.message;
  }

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          if (!addPostLoading) {
            mutate({title: value, author: 'Test Author 1'});
          }
        }}>
        {addPostLoading ? 'Loading...' : 'Add Post'}
      </button>
      <button onClick={debugFunction}>Test</button>

      <Link to="/second">Second Page</Link>

      <div style={{}}>
        {isLoading ? <div>Loading...</div> : <PostList posts={data.data} />}
      </div>
    </div>
  );
}

export default HomePage;
