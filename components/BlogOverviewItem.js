import Link from 'next/link';

const BlogOverviewItem = ({ post }) => {
  return (
    <>
      <Link className="link" href={`/posts/${post.id}`}>
        <a>
          <div className="post-wrapper">
            <div>
              <h3 className="title">{post.title}</h3>
              <p className="post-shortTitle">{post.shortTitle}</p>
            </div>
            <div className="post-author">
              <img
                className="avatar"
                src="/images/Avatar_CK_min.jpg"
                alt="Christians Avatar"
              />
              <span className="small-italic">{post.formattedDate}</span>
              <span className="small-italic">{post.readingTime} min.</span>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .post-wrapper {
          display: flex;
          border-radius: 7px;
          box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.3);
          padding: 0rem 1rem;
          margin-bottom: 1rem;
        }

        .post-author {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: 1rem;
        }

        .small-italic {
          font-size: 80%;
          font-style: italic;
          opacity: 0.7;
          white-space: nowrap;
        }

        .avatar {
          display: inline-block;
          height: 60px;
          width: 60px;
          border-radius: 30px;
        }

        @media (max-width: 600px) {
          .post-author {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default BlogOverviewItem;
