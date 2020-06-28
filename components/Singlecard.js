const Singlecard = ({ post }) => {
  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>by {post.author}</p>
      <p>{post.description}</p>
      <p>
        {post.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </p>
      <style jsx>{`
        div {
          padding: 0 1rem;
        }
      `}</style>
    </div>
  );
};

export default Singlecard;
