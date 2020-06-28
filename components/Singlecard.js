const Singlecard = ({ post }) => {
  return (
    <div key={post.id} className="card-container">
      <div className="card-header">
        {post.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </div>
      <h2>{post.title}</h2>
      <p>by {post.author}</p>
      <p>{post.description}</p>
      <p></p>
      <style jsx>{`
        .card-container {
          width: 50%;
          border-radius: 5px;
          margin: 0 0.3rem;
          box-shadow: 0 2px 5px #bbb;
        }

        .card-header {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: flex-end;
          max-width: 100%;
          background-image: url(${post.imageUrl});
          background-position: center;
          background-size: cover;
          border-radius: 5px 5px 0 0;
          width: 100%;
          height: 150px;
        }

        h2,
        p {
          margin: 0.6rem;
        }

        span {
          padding: 0.3rem 0.5rem;
          margin: 0.3rem;
          border-radius: 3px;
          color: white;
          background-color: rgba(255, 33, 90, 0.8);
        }

        @media (max-width: 500px) {
          .card-container {
            width: 100%;
            margin: 0.3rem;
          }
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
