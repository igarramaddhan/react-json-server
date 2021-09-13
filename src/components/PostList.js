const PostList = ({posts}) => {
  if (!posts) return <div>Empty Data</div>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={`post-${post.id}`}>
          <p style={{fontWeight: 'bold'}}>{post.author}</p>
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
