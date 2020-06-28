const Singlecard = ({ post }) => {
  return (
    <div key={post.id} className="card-container">
      <div className="card-header"></div>
      <h2>{post.title}</h2>
      <p>by {post.author}</p>
      <p>{post.description}</p>
      <p>
        {post.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </p>
      <style jsx>{`
        .card-container {
          padding: 1rem 1rem;
          width: 50%;
          border-radius: 5px;
          margin: 0 0.5rem;
          box-shadow: 2px 2px 3px #bbb;
        }

        .card-header {
          max-width: 100%;
          background-image: url(${post.imageUrl});
          background-position: center;
          background-size: cover;
          border-radius: 5px;
          width: 100%;
          height: 150px;
        }
      `}</style>
    </div>
  );
};

export default Singlecard;

/*
        .card-container {
          padding: 1rem 1rem;
          width: 50%;
        }

        img {
          max-width: 100%;
          border-radius: 8px 8px 0 0;
        }
*/
